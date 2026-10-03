import { useEffect, useState } from 'react'

// Returns the id of the section crossing a thin band at ~40-45% of the viewport.
// While no listed section is in that band (e.g. over a section without a nav item),
// the previous value is kept.
export function useScrollSpy(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    const list = key ? key.split('|') : []
    setActive(null)
    if (!list.length || typeof IntersectionObserver === 'undefined') return

    const elements = list
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const visible = new Set<string>()

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        let next: string | null = null
        let top = -Infinity
        for (const el of elements) {
          if (!visible.has(el.id)) continue
          const y = el.getBoundingClientRect().top
          if (y > top) {
            top = y
            next = el.id
          }
        }
        if (next) setActive(next)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return key ? active : null
}
