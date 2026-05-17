import { usePredictions } from '../../context/PredictionsContext'
import { FIXTURES_BY_GROUP } from '../../data/fixtures'
import './Toolbar.css'

export function Toolbar() {
  const { setPrediction, resetPredictions } = usePredictions()

  function pickForMe() {
    for (const matches of Object.values(FIXTURES_BY_GROUP)) {
      for (const match of matches) {
        const options = [match.teamA, 'Draw', match.teamB] as const
        const pick = options[Math.floor(Math.random() * 3)]
        setPrediction(match.id, pick)
      }
    }
  }

  return (
    <div className="toolbar">
      <button type="button" className="toolbar__button" onClick={pickForMe}>
        Pick for me
      </button>
      <button type="button" className="toolbar__button" onClick={resetPredictions}>
        Reset
      </button>
    </div>
  )
}
