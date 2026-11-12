import { useCallback, useEffect, useMemo, useState } from 'react'
import { apiRequest } from './api.js'
import { AuthContext } from './AuthContext.js'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState('checking')
  const [authError, setAuthError] = useState('')

  const refreshUser = useCallback(async () => {
    try {
      const response = await apiRequest('/users/me')
      setUser(response.user)
      setStatus('authenticated')
      setAuthError('')
    } catch (error) {
      setUser(null)
      if (error.status === 401) {
        setStatus('unauthenticated')
        setAuthError('')
      } else {
        setStatus('error')
        setAuthError(error.message)
      }
    }
  }, [])

  const retrySession = useCallback(async () => {
    setStatus('checking')
    await refreshUser()
  }, [refreshUser])

  useEffect(() => {
    let active = true

    apiRequest('/users/me')
      .then((response) => {
        if (!active) return
        setUser(response.user)
        setStatus('authenticated')
        setAuthError('')
      })
      .catch((error) => {
        if (!active) return
        setUser(null)
        if (error.status === 401) {
          setStatus('unauthenticated')
          setAuthError('')
        } else {
          setStatus('error')
          setAuthError(error.message)
        }
      })

    return () => {
      active = false
    }
  }, [])

  const login = useCallback(async ({ username, password }) => {
    const response = await apiRequest('/users/login', {
      method: 'POST',
      body: { username, password },
    })
    setUser(response.user)
    setStatus('authenticated')
    setAuthError('')
    return response.user
  }, [])

  const logout = useCallback(async () => {
    try {
      await apiRequest('/users/logout', { method: 'POST' })
    } catch (error) {
      if (error.status !== 401) {
        throw error
      }
    }

    setUser(null)
    setStatus('unauthenticated')
    setAuthError('')
  }, [])

  const invalidateSession = useCallback(() => {
    setUser(null)
    setStatus('unauthenticated')
    setAuthError('')
  }, [])

  const value = useMemo(() => ({
    user,
    status,
    authError,
    login,
    logout,
    refreshUser,
    retrySession,
    invalidateSession,
  }), [user, status, authError, login, logout, refreshUser, retrySession, invalidateSession])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
