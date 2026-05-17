import { usePredictions } from '../../context/PredictionsContext'
import { FIXTURES_BY_GROUP } from '../../data/fixtures'
import { getThirdPlaceTeams, classifyThirdPlaceTeams } from '../../utils/GroupTableUtils'
import { RoundHeading, TeamButtonLarge } from '../'
import type { TeamButtonLargeState } from '../TeamButtonLarge/TeamButtonLarge'
import './ThirdPlaceContainer.css'

export function ThirdPlaceContainer() {
  const { predictions, thirdPlaceSelections, toggleThirdPlaceSelection } = usePredictions()
  const thirdPlaceTeams = getThirdPlaceTeams(FIXTURES_BY_GROUP, predictions)
  const { automatic, tiedForSelection, eliminated, spotsRemaining } = classifyThirdPlaceTeams(thirdPlaceTeams)
  const groups = Object.keys(FIXTURES_BY_GROUP)

  function getState(group: string): TeamButtonLargeState | undefined {
    const team = thirdPlaceTeams.find(t => t.group === group)
    if (!team) return undefined
    if (automatic.some(t => t.group === group)) return 'automatic'
    if (thirdPlaceSelections.includes(group)) return 'selected'
    if (eliminated.some(t => t.group === group)) return 'greyed'
    return 'unselected'
  }

  return (
    <section className="container third-place-container">
      <RoundHeading
        heading="Third-Place Finishers"
        subheading="Points determine the eight that progress. Pick nations that are split on points manually..."
      />
      <div className="third-place-container__grid">
        {groups.map((group) => {
          const team = thirdPlaceTeams.find(t => t.group === group)
          const state = getState(group)
          const isTied = tiedForSelection.some(t => t.group === group)

          return (
            <TeamButtonLarge
              key={group}
              team={team?.team}
              points={team?.points}
              placeholder={!team}
              state={state}
              onClick={isTied ? () => toggleThirdPlaceSelection(group, spotsRemaining) : undefined}
            />
          )
        })}
      </div>
    </section>
  )
}
