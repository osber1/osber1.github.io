import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  href: string
  children: ReactNode
  variant: 'outline' | 'primary'
  title?: string
}

export default function PillLink({ href, children, variant, title }: Props) {
  const className = `pill pill--${variant}`
  if (href.startsWith('/')) {
    return <Link to={href} className={className} title={title} aria-label={title}>{children}</Link>
  }
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className={className}
      title={title}
      aria-label={title}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
