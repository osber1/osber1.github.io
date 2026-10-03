import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { profile } from '../../data/profile'
import Glow from '../ui/Glow'
import glowHero from '../../assets/glow-hero.svg'
import laptop from '../../assets/hero-laptop.webp'
import laptop2x from '../../assets/hero-laptop@2x.webp'

/** Cycles through the words. All words share one grid cell so the width never jumps. */
function Rotator({ words }: { words: string[] }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive(i => (i + 1) % words.length), 2400)
    return () => clearInterval(id)
  }, [words.length])
  return (
    <span className="rotator" aria-hidden="true">
      {words.map((word, i) => (
        <span key={word} className={i === active ? 'rotator__word is-active' : 'rotator__word'}>{word}</span>
      ))}
    </span>
  )
}

const PIN_QUERY = '(min-width: 1200px) and (prefers-reduced-motion: no-preference)'

/** On desktop the hero stays pinned while you scroll; --p (0 to 1) is the scroll progress through it. */
function usePinnedProgress() {
  const track = useRef<HTMLDivElement>(null)
  const [pinned, setPinned] = useState(false)
  useEffect(() => {
    const mq = matchMedia(PIN_QUERY)
    const sync = () => setPinned(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  useEffect(() => {
    const el = track.current
    if (!el || !pinned) return
    let frame = 0
    const update = () => {
      frame = 0
      const hero = el.firstElementChild as HTMLElement
      const length = el.offsetHeight - hero.offsetHeight
      const p = length > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / length)) : 0
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      el.style.removeProperty('--p')
    }
  }, [pinned])
  return { track, pinned }
}

// Where each extra scene fades in (--s) and out (--e), as a fraction of the pinned scroll
const SCENE_WINDOWS = [
  { s: 0.26, e: 0.46 },
  { s: 0.53, e: 0.72 },
  { s: 0.79, e: 9 },
]

export default function Hero() {
  const { rotator, scenes } = profile.hero
  const { track, pinned } = usePinnedProgress()
  return (
    <div ref={track} className={pinned ? 'hero-track is-pinned' : 'hero-track'}>
    <section id="home" data-section="home" className="hero">
      <Glow src={glowHero} width={1440} height={641} className="hero__glow" eager />
      <div className="container hero__text">
        <h1 className="hero__title">
          {profile.hero.title[0]}
          <br />
          {profile.hero.title[1]}
        </h1>
        <p className="hero__name">{profile.name}</p>
        <p className="hero__rotator">
          {rotator.prefix} <Rotator words={rotator.words} />
          <span className="sr-only">{rotator.words.join(', ')}</span>
        </p>
        {scenes.map((scene, i) => (
          <div
            key={scene.label}
            className="hero__scene"
            aria-hidden={pinned ? undefined : true}
            style={{ '--s': SCENE_WINDOWS[i].s, '--e': SCENE_WINDOWS[i].e } as CSSProperties}
          >
            <p className="hero__scene-label">{scene.label}</p>
            <p className="hero__scene-title">{scene.title}</p>
            <p className="hero__scene-sub">{scene.sub}</p>
            {scene.chips.length > 0 && (
              <p className="hero__scene-chips">
                {scene.chips.map(chip => <span key={chip}>{chip}</span>)}
              </p>
            )}
          </div>
        ))}
      </div>

      <img
        className="hero__laptop"
        src={laptop}
        srcSet={`${laptop} 1x, ${laptop2x} 2x`}
        width={1063}
        height={684}
        alt=""
        fetchPriority="high"
      />
    </section>
    </div>
  )
}
