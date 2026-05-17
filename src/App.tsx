import './App.css'
import {
  GroupStageContainer,
  ThirdPlaceContainer,
  RoundOf32Container,
  RoundOf16Container,
  QuarterFinalsContainer,
  SemiFinalsContainer,
  FinalContainer,
  Toolbar,
} from './components'

function App() {
  return (
    <main className="app-shell">
      <header className="app-shell__header">
        <h1>World Cup Predictor</h1>
      </header>
      <Toolbar />
      <GroupStageContainer />
      <ThirdPlaceContainer />
      <RoundOf32Container />
      <RoundOf16Container />
      <QuarterFinalsContainer />
      <SemiFinalsContainer />
      <FinalContainer />
    </main>
  )
}

export default App
