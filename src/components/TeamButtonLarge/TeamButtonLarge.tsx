import { COUNTRY_NAMES, type CountryCode } from '../../data/countryNames'
import './TeamButtonLarge.css'

export type TeamButtonLargeState = 'unselected' | 'selected' | 'automatic' | 'greyed'

type TeamButtonLargeProps = {
  team?: CountryCode
  points?: number
  placeholder?: boolean
  state?: TeamButtonLargeState
  onClick?: () => void
}

export function TeamButtonLarge({
  team,
  points,
  placeholder = false,
  state = 'unselected',
  onClick,
}: TeamButtonLargeProps) {
  if (placeholder || !team) {
    return (
      <div className="team-button-large team-button-large--placeholder">
        <div className="team-button-large__flag-placeholder" />
        <span className="team-button-large__name">TBD</span>
      </div>
    )
  }

  const countryName = COUNTRY_NAMES[team]
  const flagSrc = `/flags/${team}.svg`

  return (
    <button
      type="button"
      className={`team-button-large team-button-large--${state}`}
      onClick={onClick}
      aria-label={`${countryName}, ${points} points`}
      disabled={state === 'greyed'}
    >
      <img src={flagSrc} alt="" className="team-button-large__flag" />
      <span className="team-button-large__name">{countryName}</span>
      <span className="team-button-large__points">{points} pts</span>
    </button>
  )
}
