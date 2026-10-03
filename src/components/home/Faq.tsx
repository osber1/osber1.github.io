import { profile } from '../../data/profile'
import SectionHeading from '../ui/SectionHeading'

export default function Faq() {
  const { eyebrow, title, items } = profile.faq
  return (
    <section id="faq" data-section="faq" className="faq">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <div className="faq__list">
          {items.map(item => (
            <details key={item.q} className="faq__item">
              <summary className="faq__question">
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
