import { FIXTURES_BY_GROUP } from '../../data/fixtures'
import { GroupCard } from '../GroupCard'
import './GroupStageContainer.css'

export function GroupStageContainer() {
  return (
    <section className="group-stage-container" aria-label="World Cup Group Stage">
      {Object.entries(FIXTURES_BY_GROUP).map(([letter, matches]) => (
        <GroupCard key={letter} letter={letter} matches={matches} />
      ))}
    </section>
  )
}
