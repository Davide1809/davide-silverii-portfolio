import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiRequest } from '../auth/api.js'
import { useAuth } from '../auth/useAuth.js'

export function DashboardPage() {
  const { user, invalidateSession } = useAuth()
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [productsLoading, setProductsLoading] = useState(true)
  const [productsError, setProductsError] = useState('')
  const [adminResult, setAdminResult] = useState(null)
  const [checkingAdmin, setCheckingAdmin] = useState(false)

  const handleUnauthorized = useCallback(() => {
    invalidateSession()
    navigate('/login', { replace: true, state: { from: { pathname: '/dashboard' } } })
  }, [invalidateSession, navigate])

  useEffect(() => {
    let active = true

    apiRequest('/products')
      .then((response) => {
        if (!active) return
        if (!Array.isArray(response.data)) {
          setProductsError('The API returned an unexpected products response.')
          return
        }
        setProducts(response.data)
        setProductsError('')
      })
      .catch((error) => {
        if (!active) return
        if (error.status === 401) {
          handleUnauthorized()
          return
        }
        setProductsError(error.message)
      })
      .finally(() => {
        if (active) setProductsLoading(false)
      })

    return () => {
      active = false
    }
  }, [handleUnauthorized])

  async function checkAdminAccess() {
    setCheckingAdmin(true)
    setAdminResult(null)

    try {
      await apiRequest('/admin/dashboard/stats')
      setAdminResult({
        kind: 'success',
        message: 'Your account has admin access.',
      })
    } catch (error) {
      if (error.status === 401) {
        handleUnauthorized()
        return
      }
      if (error.status === 403) {
        setAdminResult({
          kind: 'forbidden',
          message: 'You are signed in, but this account is not allowed to view admin data (403 Forbidden).',
        })
      } else {
        setAdminResult({ kind: 'error', message: error.message })
      }
    } finally {
      setCheckingAdmin(false)
    }
  }

  return (
    <section className="dashboard-page route-page content-width" aria-labelledby="dashboard-title">
      <p className="eyebrow">Protected view · Inventory API</p>
      <h1 id="dashboard-title">Your dashboard.</h1>
      <p className="dashboard-welcome">
        Signed in as <strong>{user.username}</strong> <span className="role-tag">{user.role}</span>
      </p>

      <section className="dashboard-panel" aria-labelledby="products-title">
        <div className="dashboard-panel-heading">
          <div>
            <p className="eyebrow">Authenticated API request</p>
            <h2 id="products-title">Your products</h2>
          </div>
          <code>GET /api/products</code>
        </div>
        {productsLoading && <p aria-live="polite">Loading products…</p>}
        {productsError && <p className="auth-message auth-message-error" role="alert">{productsError}</p>}
        {!productsLoading && !productsError && products.length === 0 && (
          <p className="dashboard-empty">The API request succeeded. There are no products for this account yet.</p>
        )}
        {!productsLoading && !productsError && products.length > 0 && (
          <ul className="dashboard-product-list">
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong>
                <span>{product.description || product.category_name || 'Inventory product'}</span>
                <span>Quantity: {product.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="dashboard-panel authorization-panel" aria-labelledby="authorization-title">
        <div>
          <p className="eyebrow">Authorization check</p>
          <h2 id="authorization-title">Admin-only information</h2>
          <p>Check whether this account can access the API’s admin-only dashboard stats.</p>
        </div>
        <button
          className="button button-primary"
          disabled={checkingAdmin}
          onClick={checkAdminAccess}
          type="button"
        >
          {checkingAdmin ? 'Checking…' : 'Check admin access'} <span aria-hidden="true">↗</span>
        </button>
        {adminResult && (
          <p className={`auth-message auth-message-${adminResult.kind}`} role="status" aria-live="polite">
            {adminResult.message}
          </p>
        )}
      </section>
    </section>
  )
}
