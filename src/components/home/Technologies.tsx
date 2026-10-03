import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function Technologies() {
  return (
    <section id="technologies" data-section="technologies" className="technologies">
      <div className="container">
        <SectionHeading eyebrow={profile.technologies.eyebrow} title={profile.technologies.title} align="left" />
      </div>
    </section>
  )
}
