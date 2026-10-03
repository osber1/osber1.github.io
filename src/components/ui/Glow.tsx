interface Props {
  src: string
  width: number
  height: number
  className?: string
  eager?: boolean
}

export default function Glow({ src, width, height, className = '', eager = false }: Props) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt=""
      aria-hidden="true"
      className={`glow ${className}`.trim()}
      decoding="async"
      loading={eager ? 'eager' : 'lazy'}
    />
  )
}
