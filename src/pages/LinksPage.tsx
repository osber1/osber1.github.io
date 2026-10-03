import { useState } from 'react'
import links from '../data/links.json'

// Stub: Step E restyles.
export default function LinksPage() {
  const [q, setQ] = useState('')
  const needle = q.trim().toLowerCase()
  return (
    <main className="container">
      <h1>Links</h1>
      <p>Useful things, all in one place.</p>
      <input placeholder="Filter…" value={q} onChange={e => setQ(e.target.value)} />
      {links.categories.map(cat => {
        const items = links.items.filter(
          i => i.category === cat.id && (i.title + i.info).toLowerCase().includes(needle),
        )
        if (!items.length) return null
        return (
          <section key={cat.id} id={cat.id}>
            <h3>{cat.title}</h3>
            {items.map(i => (
              <a key={i.url} href={i.url} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
                {i.title} — {i.info}
              </a>
            ))}
          </section>
        )
      })}
    </main>
  )
}
