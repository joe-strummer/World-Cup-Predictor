import './TeamButton.css'
import { COUNTRY_NAMES } from '../data/countryNames'

export type TeamButtonState = 'unselected' | 'selected' | 'greyed'

type TeamButtonProps = {
  label: string
  state?: TeamButtonState
  onClick?: () => void
}

export function TeamButton({
  label,
  state = 'unselected',
  onClick,
}: TeamButtonProps) {
  const countryName = COUNTRY_NAMES[label] || label
  const flagSrc = `/flags/${label}.svg`

  return (
    <button
      type="button"
      className={`team-button team-button--${state}`}
      onClick={onClick}
      aria-label={countryName}
    >
      {label !== 'Draw' && (
        <img src={flagSrc} alt="" className="team-button__flag" />
      )}
      <span className="team-button__label">{label}</span>
    </button>
  )
}
