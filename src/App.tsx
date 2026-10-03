import { useEffect, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'
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
      <div className="container header-inner">
        <Link to="/" className="brand">
          osber<span>1</span>
        </Link>
        <nav>
          {[['/', 'Home'], ['/blog', 'Blog'], ['/projects', 'Projects'], ['/links', 'Links']].map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
          <button className="theme-btn" onClick={toggle} aria-label="Toggle dark mode">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  )
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link to={`/blog/${post.slug}`} className="card post-card">
      <div className="meta">
        <span className="pill">{post.category}</span> {formatDate(post.date)}
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
    </Link>
  )
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">👋 Hi, I'm</p>
          <h1>{site.name}</h1>
          <p className="role">{site.role}</p>
          <p className="lead">{site.tagline}</p>
          <div className="actions">
            <Link className="btn primary" to="/projects">View projects</Link>
            <Link className="btn" to="/blog">Read the blog</Link>
          </div>
          <div className="socials">
            {site.contacts.map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <h2>Skills</h2>
        <div className="tags">
          {site.skills.map(s => <span key={s} className="pill big">{s}</span>)}
        </div>
      </section>
      <section className="container section">
        <h2>Latest posts</h2>
        <div className="grid">{posts.slice(0, 3).map(p => <PostCard key={p.slug} post={p} />)}</div>
      </section>
    </>
  )
}

function Blog() {
  return (
    <main className="container section">
      <h1>Blog</h1>
      <p className="muted">Code snippets and notes I want to find again.</p>
      <div className="grid">{posts.map(p => <PostCard key={p.slug} post={p} />)}</div>
    </main>
  )
}

function PostPage() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  if (!post) return <NotFound />
  return (
    <main className="container narrow section">
      <Link to="/blog" className="muted">← All posts</Link>
      <h1>{post.title}</h1>
      <div className="meta">
        <span className="pill">{post.category}</span> {formatDate(post.date)}
        {post.tags.map(t => <span key={t} className="tag">#{t}</span>)}
      </div>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>{post.body}</ReactMarkdown>
      </article>
    </main>
  )
}

function Projects() {
  return (
    <main className="container section">
      <h1>Projects</h1>
      <p className="muted">Various sample projects.</p>
      <div className="grid">
        {site.projects.map(p => (
          <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className="card">
            <h3>{p.name} ↗</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tags.map(t => <span key={t} className="pill">{t}</span>)}</div>
          </a>
        ))}
      </div>
    </main>
  )
}

function Links() {
  const [q, setQ] = useState('')
  const needle = q.trim().toLowerCase()
  return (
    <main className="container section">
      <h1>Links</h1>
      <p className="muted">All useful links in one place.</p>
      <input className="search" placeholder="Search links…" value={q} onChange={e => setQ(e.target.value)} />
      {links.categories.map(cat => {
        const items = links.items.filter(
          i => i.category === cat.id && (i.title + i.info).toLowerCase().includes(needle),
        )
        if (!items.length) return null
        return (
          <section key={cat.id}>
            <h2>{cat.title}</h2>
            <div className="grid">
              {items.map(i => (
                <a key={i.url} href={i.url} target="_blank" rel="noreferrer" className="card">
                  <h3>{i.title} ↗</h3>
                  <p>{i.info}</p>
                </a>
              ))}
            </div>
          </section>
        )
      })}
    </main>
  )
}

function NotFound() {
  return (
    <main className="container section center">
      <h1>404</h1>
      <p className="muted">That page doesn't exist.</p>
      <Link className="btn primary" to="/">Go home</Link>
    </main>
  )
}

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="footer">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </>
  )
}
