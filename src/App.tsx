import './App.css'
import { GroupStageContainer } from './components/GroupStageContainer'
import { ThirdPlaceContainer } from './components/ThirdPlaceContainer'

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <h1>World Cup Predictor</h1>
      </header>
      <GroupStageContainer />
      <ThirdPlaceContainer />
    </main>
  )
}

export default App
