import { Component, useEffect, type ReactNode } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import ProjectsPage from './pages/ProjectsPage'
import LinksPage from './pages/LinksPage'
import NotFound from './pages/NotFound'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }
  static getDerivedStateFromError(error: Error) {
    return { error }
  }
  componentDidCatch(error: Error) {
    console.error(error)
    // A full reload recovers from a failed client-side navigation; do it once only.
    try {
      const last = Number(sessionStorage.getItem('crash-reload') || 0)
      if (Date.now() - last > 10000) {
        sessionStorage.setItem('crash-reload', String(Date.now()))
        window.location.reload()
      }
    } catch {}
  }
  render() {
    if (!this.state.error) return this.props.children
    return (
      <main className="container">
        <h1>Something went wrong</h1>
        <p>Reload the page, or go back home.</p>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error.stack || this.state.error)}</pre>
        <a href="/">← Home</a>
      </main>
    )
  }
}

export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return
    }
    let id = hash.slice(1)
    try {
      id = decodeURIComponent(id)
    } catch {}
    const raf = requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    return () => cancelAnimationFrame(raf)
  }, [pathname, hash])
  return (
    <>
      <Header />
      <ErrorBoundary key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  )
}
