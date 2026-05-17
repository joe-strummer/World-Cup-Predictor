import type { CountryCode } from '../../data/countryNames'
import { RoundHeading } from '../RoundHeading'
import { TeamButtonLarge } from '../TeamButtonLarge'
import './ThirdPlaceContainer.css'

type ThirdPlaceTeam = {
  team: CountryCode
  points: number
}

type ThirdPlaceContainerProps = {
  teams: ThirdPlaceTeam[]
}

export function ThirdPlaceContainer({ teams }: ThirdPlaceContainerProps) {
  return (
    <section className="third-place-container">
      <RoundHeading
        heading="Third-Place Finishers"
        subheading="Points determine the eight that progress. Pick nations that are split on points manually..."
      />
      <div className="third-place-container__grid">
        {teams.map(({ team, points }) => (
          <TeamButtonLarge key={team} team={team} points={points} />
        ))}
      </div>
    </section>
  )
}
