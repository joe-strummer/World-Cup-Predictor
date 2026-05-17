import './App.css'
import { GroupStageContainer } from './components/GroupStageContainer'
import { ThirdPlaceContainer } from './components/ThirdPlaceContainer'

const DUMMY_THIRD_PLACE = [
  { team: 'MEX' as const, points: 3 },
  { team: 'QAT' as const, points: 3 },
  { team: 'HAI' as const, points: 3 },
  { team: 'USA' as const, points: 4 },
  { team: 'GER' as const, points: 3 },
  { team: 'JPN' as const, points: 3 },
  { team: 'SUI' as const, points: 4 },
  { team: 'CPV' as const, points: 2 },
  { team: 'IRQ' as const, points: 4 },
  { team: 'JOR' as const, points: 2 },
  { team: 'POR' as const, points: 4 },
  { team: 'ENG' as const, points: 3 },
]

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <h1>World Cup Predictor</h1>
      </header>
      <GroupStageContainer />
      <ThirdPlaceContainer teams={DUMMY_THIRD_PLACE} />
    </main>
  )
}

export default App
