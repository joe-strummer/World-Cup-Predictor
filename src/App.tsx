import './App.css'
import { GroupStageContainer } from './components/GroupStageContainer'

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <h1>World Cup Predictor</h1>
      </header>
      <GroupStageContainer />
    </main>
  )
}

export default App
