import type { ReactNode } from 'react'
import SectionHeading from '../components/ui/SectionHeading'

// Stub: Step E styles this (dark band with glow). Signature is final.
export default function PageBand({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="page-band">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} align="left" as="h1" />
        {children}
      </div>
    </div>
  )
}
