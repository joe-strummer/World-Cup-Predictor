import './RoundHeading.css'

type RoundHeadingProps = {
  heading: string
  subheading?: string
}

export function RoundHeading({ heading, subheading }: RoundHeadingProps) {
  return (
    <header className="round-heading">
      <h2 className="round-heading__title">{heading}</h2>
      {subheading && (
        <p className="round-heading__subtitle">{subheading}</p>
      )}
    </header>
  )
}
