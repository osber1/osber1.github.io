import { Link, useLocation } from 'react-router-dom'
import facebookIcon from '../assets/icon-facebook.svg'
import githubIcon from '../assets/icon-github.svg'
import linkedinIcon from '../assets/icon-linkedin.svg'
import { nav, profile, social } from '../data/profile'
import Logo from './ui/Logo'

const socials = [
  { label: 'LinkedIn', href: social.linkedin, icon: linkedinIcon },
  { label: 'Facebook', href: social.facebook, icon: facebookIcon },
  { label: 'GitHub', href: social.github, icon: githubIcon },
]

export default function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const { footer } = profile

  return (
    <footer data-section="footer" className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__about">
            <Logo />
            <p className="footer__text">{footer.text}</p>
            <a className="footer__email" href={`mailto:${social.email}`}>
              {social.email}
            </a>
          </div>

          <nav className="footer__col" aria-labelledby="footer-quick">
            <h2 className="footer__title" id="footer-quick">{footer.quickTitle}</h2>
            <ul className="footer__list">
              {nav.map(n => (
                <li key={n.id}>
                  {isHome ? (
                    <a className="footer__link" href={`#${n.id}`}>{n.label}</a>
                  ) : (
                    <Link className="footer__link" to={`/#${n.id}`}>{n.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__title">{footer.socialTitle}</h2>
            <ul className="footer__social">
              {socials.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <img src={s.icon} alt="" width={34.56} height={34.56} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__rights">{new Date().getFullYear()} {footer.rights}</span>
          <span className="footer__company">{footer.company}</span>
        </div>
      </div>
    </footer>
  )
}
