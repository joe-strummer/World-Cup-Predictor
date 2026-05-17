import type { Fixture } from '../data/fixtures'
import { MatchRow } from './MatchRow'
import './GroupCard.css'

type GroupCardProps = {
  letter: string
  matches: Fixture[]
}

export function GroupCard({ letter, matches }: GroupCardProps) {
  return (
    <article className="group-card">
      <h2 className="group-card__title">GROUP {letter}</h2>
      <div className="group-card__matches">
        {matches.map((match) => (
          <MatchRow key={match.id} teamA={match.teamA} teamB={match.teamB} />
        ))}
      </div>
    </article>
  )
}
