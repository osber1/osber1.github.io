import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import ArrowLink from '../ui/ArrowLink'
import Glow from '../ui/Glow'
import glowAbout from '../../assets/glow-about-card.svg'
import portrait from '../../assets/about-portrait.webp'
import portrait12x from '../../assets/about-portrait@1.2x.webp'

export default function About() {
  const { about } = profile
  return (
    <section id="about" data-section="about" className="about">
      <div className="container">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} align="center" />
      </div>
      <div className="about__stage">
        <div className="container">
          <div className="about__card">
            <div className="about__clip">
              <Glow src={glowAbout} width={1146} height={470} className="about__glow" />
            </div>
            <div className="about__text">
              <h3 className="about__hello">{about.greeting}</h3>
              <p className="about__para">{about.text}</p>
              <ArrowLink href={about.cta.href} tone="light">{about.cta.label}</ArrowLink>
            </div>
            <img
              className="about__portrait"
              src={portrait}
              srcSet={`${portrait} 1x, ${portrait12x} 1.2x`}
              width={622}
              height={502}
              alt={`Portrait of ${profile.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
