import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function LinksPills() {
  return (
    <section id="links" data-section="links" className="links">
      <div className="container">
        <SectionHeading eyebrow={profile.links.eyebrow} title={profile.links.title} align="left" />
      </div>
    </section>
  )
}
