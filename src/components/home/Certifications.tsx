import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" data-section="certifications" className="certifications">
      <div className="container">
        <SectionHeading eyebrow={profile.certification.eyebrow} title={profile.certification.title} align="center" />
      </div>
    </section>
  )
}
