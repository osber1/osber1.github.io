import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import links from '../data/links.json'
import { profile } from '../data/profile'
import PageBand from './PageBand'

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export default function LinksPage() {
  const [q, setQ] = useState('')
  const { hash } = useLocation()
  const needle = q.trim().toLowerCase()
  const groups = links.categories.map(cat => ({
    cat,
    items: links.items.filter(i => i.category === cat.id && (i.title + i.info).toLowerCase().includes(needle)),
  }))
  const visible = groups.filter(g => g.items.length)
  return (
    <main>
      <PageBand eyebrow={profile.links.eyebrow} title={profile.links.title} />
      <div className="page-content">
        <div className="container">
          <nav aria-label="Link categories">
            <ul className="links-pills">
              {groups.map(({ cat, items }) => {
                const active = hash === `#${cat.id}`
                return (
                  <li key={cat.id}>
                    <Link
                      to={`/links#${cat.id}`}
                      className={`pill pill--outline${active ? ' is-active' : ''}${items.length ? '' : ' is-empty'}`}
                      title={cat.title}
                      aria-current={active ? 'true' : undefined}
                    >
                      {cat.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="links-filter">
            <label className="sr-only" htmlFor="links-filter">Filter links</label>
            <input
              id="links-filter"
              className="links-filter__input"
              type="search"
              placeholder="Filter…"
              autoComplete="off"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          </div>

          {visible.map(({ cat, items }) => (
            <section key={cat.id} id={cat.id} className="links-group">
              <h2 className="links-group__title">{cat.title}</h2>
              <ul className="links-list">
                {items.map(i => (
                  <li key={`${i.title}|${i.url}`}>
                    <a className="link-row" href={i.url} target="_blank" rel="noreferrer">
                      <span className="link-row__text">
                        <span className="link-row__title">{i.title}</span>
                        <span className="link-row__info">{i.info}</span>
                      </span>
                      <span className="link-row__host">{hostname(i.url)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {!visible.length && <p className="links-empty">No links match “{q.trim()}”.</p>}
        </div>
      </div>
    </main>
  )
}
