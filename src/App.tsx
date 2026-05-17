import './App.css'
import { GroupStageContainer, ThirdPlaceContainer, Toolbar } from './components'

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <h1>World Cup Predictor</h1>
      </header>
      <Toolbar />
      <GroupStageContainer />
      <ThirdPlaceContainer />
    </main>
  )
}

export default App
