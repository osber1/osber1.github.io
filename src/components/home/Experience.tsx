import { profile } from '../../data/profile'
import glowExperience from '../../assets/glow-experience.svg'
import SectionHeading from '../ui/SectionHeading'
import Glow from '../ui/Glow'

export default function Experience() {
  const { eyebrow, title, items } = profile.experience
  return (
    <section id="experience" data-section="experience" className="experience">
      <div className="center-block experience__head">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
      </div>
      <div className="experience__stage">
        <Glow src={glowExperience} width={944.8} height={927.8} className="experience__glow" />
        <div className="container">
          <ol className="experience__list">
            {items.map((item) => (
              <li key={`${item.years}-${item.role}`} className="experience__row">
                <h3 className="experience__title">
                  <span className="experience__year">{item.years}</span> {item.role}
                </h3>
                <p className="experience__company">{item.company}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
