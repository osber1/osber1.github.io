import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import PillLink from '../ui/PillLink'

export default function LinksPills() {
  return (
    <section id="links" data-section="links" className="links">
      <div className="container">
        <SectionHeading eyebrow={profile.links.eyebrow} title={profile.links.title} align="left" />
        <div className="links-grid">
          {profile.links.categories.map(c => (
            <PillLink key={c.id} href={`/links#${c.id}`} variant="outline" title={c.title}>{c.title}</PillLink>
          ))}
        </div>
      </div>
    </section>
  )
}
