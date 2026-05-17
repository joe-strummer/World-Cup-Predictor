import type { Fixture } from '../data/fixtures'
import type { CountryCode } from '../data/countryNames'
import type { MatchPrediction } from '../context/PredictionsContext'

export type TeamTotals = {
  team: CountryCode
  wins: number
  losses: number
  draws: number
}

export type StandingRow = TeamTotals & {
  rank: number
  points: number
}

export function getTeamTotals(matches: Fixture[], predictions: Record<string, MatchPrediction>): TeamTotals[] {
  const teams = Array.from(
    new Set<CountryCode>([
      ...matches.map(m => m.teamA),
      ...matches.map(m => m.teamB)
    ])
  )

  return teams.map(team => {
    let wins = 0
    let losses = 0
    let draws = 0

    matches.forEach(match => {
      const prediction = predictions[match.id]
      if (!prediction) return

      if (prediction === 'Draw') {
        if (match.teamA === team || match.teamB === team) {
          draws += 1
        }
      } else if (prediction === match.teamA) {
        if (match.teamA === team) {
          wins += 1
        } else if (match.teamB === team) {
          losses += 1
        }
      } else if (prediction === match.teamB) {
        if (match.teamB === team) {
          wins += 1
        } else if (match.teamA === team) {
          losses += 1
        }
      }
    })

    return { team, wins, losses, draws }
  })
}

export function getStandings(teams: TeamTotals[]): StandingRow[] {
  const teamsWithPoints = teams.map((team) => ({
    ...team,
    points: team.wins * 3 + team.draws,
  }))

  return teamsWithPoints
    .sort((a, b) => b.points - a.points)
    .map((team, index) => ({
      ...team,
      rank: index + 1,
    }))
}
