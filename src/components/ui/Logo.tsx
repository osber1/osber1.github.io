import { Link } from 'react-router-dom'
import { profile } from '../../data/profile'

export default function Logo() {
  const { logoSvg, wordmark } = profile.brand
  return (
    <Link to="/" className="logo" aria-label={`${profile.name}, home`}>
      {logoSvg ? <img src={logoSvg} alt="" width={72.28} height={18.8} /> : wordmark}
    </Link>
  )
}
