import { describe, it, expect } from 'vitest'
import type { Fixture } from '../data/fixtures'
import type { MatchPrediction } from '../context/PredictionsContext'
import { getTeamTotals, getStandings, type TeamTotals } from './GroupTableUtils'

const matches: Fixture[] = [
  { id: 'match1', teamA: 'MEX', teamB: 'RSA' },
  { id: 'match2', teamA: 'KOR', teamB: 'CZE' },
  { id: 'match3', teamA: 'CZE', teamB: 'RSA' },
  { id: 'match4', teamA: 'MEX', teamB: 'KOR' },
  { id: 'match5', teamA: 'CZE', teamB: 'MEX' },
  { id: 'match6', teamA: 'RSA', teamB: 'KOR' },
]

describe('getTeamTotals', () => {
  it('returns all teams with zero totals when there are no predictions', () => {
    const result = getTeamTotals(matches, {})

    expect(result).toEqual([
      { team: 'MEX', wins: 0, losses: 0, draws: 0 },
      { team: 'KOR', wins: 0, losses: 0, draws: 0 },
      { team: 'CZE', wins: 0, losses: 0, draws: 0 },
      { team: 'RSA', wins: 0, losses: 0, draws: 0 },
    ])
  })

  it('calculates totals correctly with some predictions', () => {
    const predictions = {
      match1: 'MEX',
      match2: 'Draw', // KOR and CZE
      match5: 'CZE',
    } as Record<string, MatchPrediction>

    const result = getTeamTotals(matches, predictions)

    expect(result).toEqual([
      { team: 'MEX', wins: 1, losses: 1, draws: 0 },
      { team: 'KOR', wins: 0, losses: 0, draws: 1 },
      { team: 'CZE', wins: 1, losses: 0, draws: 1 },
      { team: 'RSA', wins: 0, losses: 1, draws: 0 },
    ])
  })

  it('calculates totals correctly with all predictions', () => {
    const predictions = {
      match1: 'MEX',
      match2: 'KOR',
      match3: 'Draw', // CZE and RSA
      match4: 'MEX',
      match5: 'MEX',
      match6: 'RSA',
    } as Record<string, MatchPrediction>

    const result = getTeamTotals(matches, predictions)

    expect(result).toEqual([
      { team: 'MEX', wins: 3, losses: 0, draws: 0 },
      { team: 'KOR', wins: 1, losses: 2, draws: 0 },
      { team: 'CZE', wins: 0, losses: 2, draws: 1 },
      { team: 'RSA', wins: 1, losses: 1, draws: 1 },
    ])
  })
})

describe('getStandings', () => {
  it('returns all teams at rank with 0 points when no results', () => {
    const teams: TeamTotals[] = [
      { team: 'MEX', wins: 0, losses: 0, draws: 0 },
      { team: 'RSA', wins: 0, losses: 0, draws: 0 },
      { team: 'KOR', wins: 0, losses: 0, draws: 0 },
      { team: 'CZE', wins: 0, losses: 0, draws: 0 },
    ]

    const result = getStandings(teams)

    expect(result).toEqual([
      { team: 'MEX', wins: 0, losses: 0, draws: 0, points: 0, rank: 1 },
      { team: 'RSA', wins: 0, losses: 0, draws: 0, points: 0, rank: 2 },
      { team: 'KOR', wins: 0, losses: 0, draws: 0, points: 0, rank: 3 },
      { team: 'CZE', wins: 0, losses: 0, draws: 0, points: 0, rank: 4 },
    ])
  })

  it('ranks teams correctly with some results', () => {
    const teams: TeamTotals[] = [
      { team: 'MEX', wins: 1, losses: 0, draws: 0 },
      { team: 'RSA', wins: 0, losses: 2, draws: 0 },
      { team: 'KOR', wins: 0, losses: 0, draws: 1 },
      { team: 'CZE', wins: 1, losses: 0, draws: 1 },
    ]

    const result = getStandings(teams)

    expect(result).toEqual([
      { team: 'CZE', wins: 1, losses: 0, draws: 1, points: 4, rank: 1 },
      { team: 'MEX', wins: 1, losses: 0, draws: 0, points: 3, rank: 2 },
      { team: 'KOR', wins: 0, losses: 0, draws: 1, points: 1, rank: 3 },
      { team: 'RSA', wins: 0, losses: 2, draws: 0, points: 0, rank: 4 },
    ])
  })

  it('ranks teams correctly with all results', () => {
    const teams: TeamTotals[] = [
      { team: 'MEX', wins: 3, losses: 0, draws: 0 },
      { team: 'RSA', wins: 1, losses: 1, draws: 1 },
      { team: 'KOR', wins: 1, losses: 2, draws: 0 },
      { team: 'CZE', wins: 0, losses: 2, draws: 1 },
    ]

    const result = getStandings(teams)

    expect(result).toEqual([
      { team: 'MEX', wins: 3, losses: 0, draws: 0, points: 9, rank: 1 },
      { team: 'RSA', wins: 1, losses: 1, draws: 1, points: 4, rank: 2 },
      { team: 'KOR', wins: 1, losses: 2, draws: 0, points: 3, rank: 3 },
      { team: 'CZE', wins: 0, losses: 2, draws: 1, points: 1, rank: 4 },
    ])
  })
})
