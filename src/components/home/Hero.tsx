import { useEffect, useState } from 'react'
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

export default function Hero() {
  const { rotator, tags } = profile.hero
  return (
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
      </div>
      <ul className="hero__tags" aria-hidden="true">
        {tags.map(tag => <li key={tag} className="hero__tag">{tag}</li>)}
      </ul>
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
  )
}
