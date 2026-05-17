import './TeamButton.css'

type TeamButtonProps = {
  label: string
}

export function TeamButton({ label }: TeamButtonProps) {
  return <button className="team-button">{label}</button>
}
