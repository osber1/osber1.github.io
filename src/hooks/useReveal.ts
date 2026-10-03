import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = [
  '.sh', '.stats__item', '.about__card', '.experience__row', '.cert-card', '.contact__buttons',
  '.blog-card', '.links-grid .pill', '.project-card', '.faq__item', '.marquee',
].join(',')

/** Fade-and-rise elements into view as they are scrolled to. */
export function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(el => {
        const index = el.parentElement ? [...el.parentElement.children].indexOf(el) : 0
        el.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`)
        el.classList.add('reveal')
        io.observe(el)
      })
    })
    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
    }
  }, [pathname])
}
