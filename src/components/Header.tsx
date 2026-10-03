import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nav } from '../data/profile'
import { useScrollSpy } from '../hooks/useScrollSpy'
import Logo from './ui/Logo'

const SPY_IDS = nav.map(n => n.id)

export default function Header() {
  const { pathname, hash } = useLocation()
  const isHome = pathname === '/'
  const active = useScrollSpy(isHome ? SPY_IDS : [])
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer whenever the route (or hash) changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  // Drawer behaviour: body scroll lock, Esc, outside click, focus trap, close when resized to desktop.
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const prevOverflow = root.style.overflow
    const prevPadding = root.style.paddingRight
    const scrollbar = window.innerWidth - root.clientWidth
    root.style.overflow = 'hidden'
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`

    const toggle = toggleRef.current
    const links = () => Array.from(navRef.current?.querySelectorAll<HTMLElement>('a') ?? [])
    links()[0]?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggle?.focus()
        return
      }
      if (e.key !== 'Tab' || !toggle) return
      const items = [toggle, ...links()]
      const first = items[0]
      const last = items[items.length - 1]
      const current = document.activeElement as HTMLElement | null
      if (!current || !items.includes(current)) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && current === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && current === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (!navRef.current?.contains(target) && !toggle?.contains(target)) setOpen(false)
    }
    const media = window.matchMedia('(min-width: 1024px)')
    const onMedia = () => {
      if (media.matches) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    media.addEventListener('change', onMedia)
    return () => {
      root.style.overflow = prevOverflow
      root.style.paddingRight = prevPadding
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      media.removeEventListener('change', onMedia)
    }
  }, [open])

  const close = () => setOpen(false)
  const cls = ['header', scrolled && 'is-scrolled', open && 'is-open'].filter(Boolean).join(' ')

  return (
    <header className={cls}>
      <div className="header__brand">
        <Logo />
      </div>
      <button
        ref={toggleRef}
        type="button"
        className="header__toggle"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(o => !o)}
      >
        <span className="header__bar" />
        <span className="header__bar" />
        <span className="header__bar" />
      </button>
      <nav ref={navRef} id="site-nav" className={`header__nav${open ? ' is-open' : ''}`} aria-label="Main">
        <ul className="header__list">
          {nav.map(n => {
            const current = active === n.id ? 'true' : undefined
            return (
              <li key={n.id}>
                {isHome ? (
                  <a className="header__link" href={`#${n.id}`} aria-current={current} onClick={close}>
                    {n.label}
                  </a>
                ) : (
                  <Link className="header__link" to={`/#${n.id}`} aria-current={current} onClick={close}>
                    {n.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
