import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  href: string
  children: ReactNode
  tone: 'light' | 'dark' | 'blue'
}

export default function ArrowLink({ href, children, tone }: Props) {
  const className = `arrow-link arrow-link--${tone}`
  if (href.startsWith('/')) return <Link to={href} className={className}>{children}</Link>
  const external = href.startsWith('http')
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
    </a>
  )
}
