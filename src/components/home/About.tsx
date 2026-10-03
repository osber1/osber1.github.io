import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" data-section="about" className="about">
      <div className="container">
        <SectionHeading eyebrow={profile.about.eyebrow} title={profile.about.title} align="center" />
      </div>
    </section>
  )
}
