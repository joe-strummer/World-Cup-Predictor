import './TeamButton.css'

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
  return (
    <button type="button" className={`team-button team-button--${state}`} onClick={onClick}>
      {label}
    </button>
  )
}
