import { TeamButton } from './TeamButton'
import './MatchRow.css'

type MatchRowProps = {
  teamA: string
  teamB: string
}

export function MatchRow({ teamA, teamB }: MatchRowProps) {
  return (
    <div className="match-row">
      <TeamButton label={teamA} />
      <TeamButton label="Draw" />
      <TeamButton label={teamB} />
    </div>
  )
}
