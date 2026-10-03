import { Component, useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { formatDate, posts } from './posts'
import { site } from './data/site'
import links from './data/links.json'

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {}
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])
  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))] as const
}

function Header() {
  const [theme, toggle] = useTheme()
  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link to="/" className="brand">Osvaldas B.</Link>
        <nav>
          {[['/blog', 'Writing'], ['/projects', 'Projects'], ['/links', 'Links']].map(([to, label]) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))}
          <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}

function SectionHead({ index, title, to }: { index: string; title: string; to?: string }) {
  return (
    <div className="section-head">
      <span className="mono">{index}</span>
      <h2>{title}</h2>
      {to && <Link to={to} className="mono more">All →</Link>}
    </div>
  )
}

function PostRow({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="row">
      <span className="mono muted">{formatDate(post.date)}</span>
      <span className="row-main">
        <span className="row-title">{post.title}</span>
        <span className="row-sub">{post.summary}</span>
      </span>
      <span className="arrow">→</span>
    </Link>
  )
}

function Home() {
  return (
    <main className="wrap">
      <section className="hero">
        <p className="mono muted">{site.role}</p>
        <h1>
          Building reliable backend systems<span className="dot">.</span>
        </h1>
        <p className="lead">
          I'm {site.name}. {site.tagline}
        </p>
        <div className="socials">
          {site.contacts.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer">{c.label} ↗</a>
          ))}
        </div>
      </section>

      <section>
        <SectionHead index="01" title="Writing" to="/blog" />
        {posts.slice(0, 4).map(p => <PostRow key={p.slug} post={p} />)}
      </section>

      <section>
        <SectionHead index="02" title="Projects" to="/projects" />
        {site.projects.map(p => <ProjectRow key={p.name} p={p} />)}
      </section>

      <section>
        <SectionHead index="03" title="Stack" />
        <p className="stack mono">{site.skills.join('  /  ')}</p>
      </section>
    </main>
  )
}

function ProjectRow({ p }: { p: (typeof site.projects)[number] }) {
  return (
    <a href={p.href} target="_blank" rel="noreferrer" className="row">
      <span className="mono muted">{p.tags[0]}</span>
      <span className="row-main">
        <span className="row-title">{p.name}</span>
        <span className="row-sub">{p.description}</span>
      </span>
      <span className="arrow">↗</span>
    </a>
  )
}

function PageTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p className="lead">{sub}</p>
    </div>
  )
}

function Blog() {
  return (
    <main className="wrap">
      <PageTitle title="Writing" sub="Code snippets and notes I want to find again." />
      {posts.map(p => <PostRow key={p.slug} post={p} />)}
    </main>
  )
}

function PostPage() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <NotFound />
  return (
    <main className="wrap narrow">
      <Link to="/blog" className="mono muted back">← Writing</Link>
      <h1 className="post-title">{post.title}</h1>
      <p className="mono muted">
        {formatDate(post.date)} · {post.category} · {post.tags.map(t => `#${t}`).join(' ')}
      </p>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{post.body}</ReactMarkdown>
      </article>
    </main>
  )
}

function Projects() {
  return (
    <main className="wrap">
      <PageTitle title="Projects" sub="Various sample projects." />
      {site.projects.map(p => <ProjectRow key={p.name} p={p} />)}
    </main>
  )
}

function Links() {
  const [q, setQ] = useState('')
  const needle = q.trim().toLowerCase()
  return (
    <main className="wrap">
      <PageTitle title="Links" sub="Useful things, all in one place." />
      <input className="search mono" placeholder="Filter…" value={q} onChange={e => setQ(e.target.value)} />
      {links.categories.map((cat, n) => {
        const items = links.items.filter(
          i => i.category === cat.id && (i.title + i.info).toLowerCase().includes(needle),
        )
        if (!items.length) return null
        return (
          <section key={cat.id}>
            <SectionHead index={String(n + 1).padStart(2, '0')} title={cat.title} />
            {items.map(i => (
              <a key={i.url} href={i.url} target="_blank" rel="noreferrer" className="row">
                <span className="mono muted">{new URL(i.url).hostname.replace(/^www\./, '')}</span>
                <span className="row-main">
                  <span className="row-title">{i.title}</span>
                  <span className="row-sub">{i.info}</span>
                </span>
                <span className="arrow">↗</span>
              </a>
            ))}
          </section>
        )
      })}
    </main>
  )
}

function NotFound() {
  return (
    <main className="wrap">
      <PageTitle title="404" sub="That page doesn't exist." />
      <Link className="mono" to="/">← Home</Link>
    </main>
  )
}

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
      <main className="wrap">
        <PageTitle title="Something went wrong" sub="Reload the page, or go back home." />
        <pre className="mono muted" style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error.stack || this.state.error)}</pre>
        <a className="mono" href="/">← Home</a>
      </main>
    )
  }
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return (
    <>
      <Header />
      <ErrorBoundary key={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ErrorBoundary>
      <footer className="wrap footer mono muted">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <a href="https://github.com/osber1">GitHub</a>
      </footer>
    </>
  )
}
