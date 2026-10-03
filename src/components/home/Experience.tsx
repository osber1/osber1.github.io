import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" data-section="experience" className="experience">
      <div className="container">
        <SectionHeading eyebrow={profile.experience.eyebrow} title={profile.experience.title} align="center" />
      </div>
    </section>
  )
}
