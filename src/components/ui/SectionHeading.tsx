import { Fragment } from 'react'

interface Props {
  eyebrow: string
  title: string | string[]
  align: 'left' | 'center'
  as?: 'h1' | 'h2'
  tone?: 'blue' | 'white'
  id?: string
}

export default function SectionHeading({ eyebrow, title, align, as: Tag = 'h2', tone = 'blue', id }: Props) {
  return (
    <div className={`sh sh--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag id={id} className={tone === 'white' ? 'h2 h2--white' : 'h2'}>
        {Array.isArray(title)
          ? title.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && ' '}
                <span className="line">{line}</span>
              </Fragment>
            ))
          : title}
      </Tag>
    </div>
  )
}
