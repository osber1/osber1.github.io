import { profile } from '../../data/profile'
import badge from '../../assets/cert-ocp-java-se-11.png'
import badge2x from '../../assets/cert-ocp-java-se-11@2x.png'
import SectionHeading from '../ui/SectionHeading'
import ArrowLink from '../ui/ArrowLink'

export default function Certifications() {
  const { eyebrow, title, name, text, cta } = profile.certification
  return (
    <section id="certifications" data-section="certifications" className="certifications">
      <div className="center-block certifications__head">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
      </div>
      <div className="certifications__stage">
        <div className="container">
          <article className="cert-card">
            <div className="cert-card__text">
              <h3 className="cert-card__title">{name}</h3>
              <p className="cert-card__para">{text}</p>
              <ArrowLink href={cta.href} tone="blue">{cta.label}</ArrowLink>
            </div>
            <img
              className="cert-card__badge"
              src={badge}
              srcSet={`${badge} 1x, ${badge2x} 2x`}
              width={293}
              height={293}
              alt="Oracle Certified Professional Java SE 11 Developer badge"
              loading="lazy"
              decoding="async"
            />
          </article>
        </div>
      </div>
    </section>
  )
}
