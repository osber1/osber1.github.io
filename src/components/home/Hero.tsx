import { profile } from '../../data/profile'
import Glow from '../ui/Glow'
import glowHero from '../../assets/glow-hero.svg'
import laptop from '../../assets/hero-laptop.webp'
import laptop2x from '../../assets/hero-laptop@2x.webp'

export default function Hero() {
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
  )
}
