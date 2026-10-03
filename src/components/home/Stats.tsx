import { useEffect, useRef, useState } from 'react'
import { profile } from '../../data/profile'

/** Counts from 0 to `value` the first time it scrolls into view. */
function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    setShown(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1200, 1)
        setShown(Math.round(value * (1 - Math.pow(1 - t, 3))))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])
  return <span ref={ref}>{shown}{suffix}</span>
}

export default function Stats() {
  return (
    <section id="stats" data-section="stats" className="stats">
      <div className="container">
        <ul className="stats__list">
          {profile.stats.map(stat => (
            <li key={stat.label} className="stats__item">
              <p className="stats__value"><CountUp value={stat.value} suffix={stat.suffix} /></p>
              <p className="stats__label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
