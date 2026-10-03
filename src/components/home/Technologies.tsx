import type { CSSProperties } from 'react'
import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

const MIN_SET = 8
const COPIES = 3

export default function Technologies() {
  const { technologies } = profile
  const items = technologies.items
  const set = Array.from({ length: Math.max(MIN_SET, items.length) }, (_, i) => ({
    ...items[i % items.length],
    duplicate: i >= items.length,
  }))
  return (
    <section id="technologies" data-section="technologies" className="technologies">
      <div className="container">
        <SectionHeading eyebrow={technologies.eyebrow} title={technologies.title} align="left" />
      </div>
      <div className="marquee">
        <ul className="marquee__track" aria-label="Technologies" style={{ '--n': set.length } as CSSProperties}>
          {Array.from({ length: COPIES }, (_, copy) =>
            set.map((tech, i) => (
              <li
                key={`${copy}-${i}`}
                className="marquee__item"
                aria-hidden={copy > 0 || tech.duplicate ? true : undefined}
              >
                {tech.src2x ? (
                  <img
                    src={tech.src}
                    srcSet={`${tech.src} 1x, ${tech.src2x} 2x`}
                    width={123}
                    height={74}
                    alt={tech.name}
                  />
                ) : (
                  <span className="marquee__logo">
                    <img src={tech.src} alt="" aria-hidden="true" />
                    <span className="marquee__name">{tech.name}</span>
                  </span>
                )}
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  )
}
