import type { ReactNode } from 'react'
import SectionHeading from '../components/ui/SectionHeading'
import Glow from '../components/ui/Glow'
import glowHero from '../assets/glow-hero.svg'

interface Props {
  eyebrow: string
  title: string
  lead?: ReactNode
  before?: ReactNode
  full?: boolean
  children?: ReactNode
}

// Dark page band shared by every inner route: glow, eyebrow and white H1.
// It has no router dependency, so it is safe to render from an error boundary.
export default function PageBand({ eyebrow, title, lead, before, full = false, children }: Props) {
  return (
    <div className={full ? 'page-band page-band--full' : 'page-band'}>
      <Glow src={glowHero} width={1440} height={641} className="page-band__glow" eager />
      <div className="container page-band__inner">
        {before}
        <SectionHeading eyebrow={eyebrow} title={title} align="left" as="h1" tone="white" />
        {lead && <p className="page-band__lead">{lead}</p>}
        {children}
      </div>
    </div>
  )
}

// Full-height variant for error screens (404, ErrorBoundary). `children` is the action
// (a link or button); `detail` is an optional technical message shown in a dark box.
export function ErrorBand({
  eyebrow = 'Error',
  title,
  lead,
  detail,
  children,
}: {
  eyebrow?: string
  title: string
  lead?: ReactNode
  detail?: string
  children?: ReactNode
}) {
  return (
    <main>
      <PageBand eyebrow={eyebrow} title={title} lead={lead} full>
        {detail && <pre className="error-band__detail">{detail}</pre>}
        {children && <div className="error-band__action">{children}</div>}
      </PageBand>
    </main>
  )
}
