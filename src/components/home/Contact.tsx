import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'
import PillLink from '../ui/PillLink'

export default function Contact() {
  const { eyebrow, title, aside, buttons } = profile.contact
  return (
    <section id="contacts" data-section="contacts" className="contact">
      <div className="container contact__inner">
        <SectionHeading eyebrow={eyebrow} title={title} align="left" />
        <p className="contact__aside" aria-hidden="true">{aside}</p>
        <div className="contact__buttons">
          {buttons.map((button) => (
            <PillLink
              key={button.label}
              href={button.href}
              variant={'primary' in button && button.primary ? 'primary' : 'outline'}
            >
              {button.label}
            </PillLink>
          ))}
        </div>
      </div>
    </section>
  )
}
