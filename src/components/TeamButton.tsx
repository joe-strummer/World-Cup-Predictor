import './TeamButton.css'
import { COUNTRY_NAMES, type CountryCode } from '../data/countryNames'

export type TeamButtonState = 'unselected' | 'selected' | 'greyed'

type TeamButtonProps = {
  label: CountryCode | 'Draw'
  state?: TeamButtonState
  onClick?: () => void
}

export function TeamButton({
  label,
  state = 'unselected',
  onClick,
}: TeamButtonProps) {
  const countryName = label === 'Draw' ? 'Draw' : COUNTRY_NAMES[label]
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
