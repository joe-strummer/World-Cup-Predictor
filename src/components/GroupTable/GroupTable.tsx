import { getStandings, type StandingRow, type TeamTotals } from '../../utils/GroupTableUtils'
import './GroupTable.css'

function TableRow({ row }: { row: StandingRow }) {
  const tone = row.rank <= 2 ? 'qualify' : row.rank === 3 ? 'playoffs' : 'default'

  return (
    <tr className={`group-table__row group-table__row--${tone}`}>
      <td>{row.rank}</td>
      <td>{row.team}</td>
      <td>{row.points}</td>
      <td>{row.wins}</td>
      <td>{row.draws}</td>
      <td>{row.losses}</td>
    </tr>
  )
}

export function GroupTable({ teams }: {teams: TeamTotals[]}) {
  const standings = getStandings(teams)

  return (
    <div className="group-table-wrap">
      <table className="group-table" aria-label="Group standings table">
        <thead>
          <tr>
            <th>RANK</th>
            <th>TEAM</th>
            <th>PTS</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row) => (
            <TableRow key={row.team} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
