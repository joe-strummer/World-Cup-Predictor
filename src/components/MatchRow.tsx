import type { CountryCode } from '../data/countryNames'
import type { MatchPrediction } from '../context/PredictionsContext'
import { TeamButton } from './TeamButton'
import './MatchRow.css'

type MatchRowProps = {
  matchId: string
  teamA: CountryCode
  teamB: CountryCode
  prediction: MatchPrediction | null
  onPredictionChange: (matchId: string, prediction: MatchPrediction) => void
}

export function MatchRow({
  matchId,
  teamA,
  teamB,
  prediction,
  onPredictionChange,
}: MatchRowProps) {
  const resolveState = (option: MatchPrediction) => {
    if (prediction === null) {
      return 'unselected'
    }

    if (prediction === option) {
      return 'selected'
    }

    return 'greyed'
  }

  const togglePrediction = (option: MatchPrediction) => {
    onPredictionChange(matchId, option)
  }

  return (
    <div className="match-row">
      <TeamButton
        label={teamA}
        state={resolveState(teamA)}
        onClick={() => togglePrediction(teamA)}
      />
      <TeamButton
        label="Draw"
        state={resolveState('Draw')}
        onClick={() => togglePrediction('Draw')}
      />
      <TeamButton
        label={teamB}
        state={resolveState(teamB)}
        onClick={() => togglePrediction(teamB)}
      />
    </div>
  )
}
