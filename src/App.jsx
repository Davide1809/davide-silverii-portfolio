import { Link, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { RequireAuth } from './components/RequireAuth.jsx'
import { DashboardPage } from './pages/DashboardPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ItemDetailPage } from './pages/ItemDetailPage.jsx'
import { ItemListPage } from './pages/ItemListPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import './Portfolio.css'

function NotFoundPage() {
  return (
    <section className="route-page content-width not-found-page">
      <p className="eyebrow">Page not found</p>
      <h1>This page does not exist.</h1>
      <p>Use the links below to continue browsing the portfolio.</p>
      <Link className="button button-primary" to="/">Back home <span aria-hidden="true">↗</span></Link>
    </section>
  )
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main id="top">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemListPage />} />
          <Route path="/items/:id" element={<ItemDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
