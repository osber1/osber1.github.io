import { nav } from '../data/profile'
import Logo from './ui/Logo'

// Stub: Step A replaces this with the floating pill nav.
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <nav aria-label="Main">
          {nav.map(n => <a key={n.id} href={`/#${n.id}`}>{n.label} </a>)}
        </nav>
      </div>
    </header>
  )
}
