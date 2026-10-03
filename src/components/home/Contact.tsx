import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function Contact() {
  return (
    <section id="contacts" data-section="contacts" className="contact">
      <div className="container">
        <SectionHeading eyebrow={profile.contact.eyebrow} title={profile.contact.title} align="left" />
      </div>
    </section>
  )
}
