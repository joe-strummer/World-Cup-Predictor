import { FIXTURES_BY_GROUP } from '../../data/fixtures'
import { GroupCard } from '../GroupCard'
import { RoundHeading } from '../RoundHeading'
import './GroupStageContainer.css'

export function GroupStageContainer() {
  return (
    <section className="container group-stage-container" aria-label="World Cup Group Stage">
      <RoundHeading
        heading="Group Stage"
        subheading="Group winners, runners-up and the eight best third-placed teams will advance to the Round of 32"
      />
      <div className="group-stage-container__grid">
        {Object.entries(FIXTURES_BY_GROUP).map(([letter, matches]) => (
          <GroupCard key={letter} letter={letter} matches={matches} />
        ))}
      </div>
    </section>
  )
}
