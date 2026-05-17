import type { Fixture } from '../data/fixtures'
import { usePredictions } from '../context/PredictionsContext'
import { getTeamTotals } from '../utils/GroupTableUtils'
import { GroupTable } from './GroupTable'
import { MatchRow } from './MatchRow'
import './GroupCard.css'

type GroupCardProps = {
  letter: string
  matches: Fixture[]
}

export function GroupCard({ letter, matches }: GroupCardProps) {
  const { predictions, setPrediction } = usePredictions()
  const teamTotals = getTeamTotals(matches, predictions)

  return (
    <article className="group-card">
      <h2 className="group-card__title">GROUP {letter}</h2>
      <div className="group-card__matches">
        {matches.map((match) => (
          <MatchRow
            key={match.id}
            matchId={match.id}
            teamA={match.teamA}
            teamB={match.teamB}
            prediction={predictions[match.id] ?? null}
            onPredictionChange={setPrediction}
          />
        ))}
      </div>
      <GroupTable teams={teamTotals} />
    </article>
  )
}
