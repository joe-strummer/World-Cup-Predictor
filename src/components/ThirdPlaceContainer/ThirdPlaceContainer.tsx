import { usePredictions } from '../../context/PredictionsContext'
import { FIXTURES_BY_GROUP } from '../../data/fixtures'
import { getThirdPlaceTeams } from '../../utils/GroupTableUtils'
import { RoundHeading, TeamButtonLarge } from '../'
import './ThirdPlaceContainer.css'

export function ThirdPlaceContainer() {
  const { predictions } = usePredictions()
  const thirdPlaceTeams = getThirdPlaceTeams(FIXTURES_BY_GROUP, predictions)
  const groups = Object.keys(FIXTURES_BY_GROUP)

  return (
    <section className="third-place-container">
      <RoundHeading
        heading="Third-Place Finishers"
        subheading="Points determine the eight that progress. Pick nations that are split on points manually..."
      />
      <div className="third-place-container__grid">
        {groups.map((group) => {
          const team = thirdPlaceTeams.find(t => t.group === group)

          return (
            <TeamButtonLarge
              key={group}
              team={team?.team}
              points={team?.points}
              placeholder={!team}
            />
          )
        })}
      </div>
    </section>
  )
}
