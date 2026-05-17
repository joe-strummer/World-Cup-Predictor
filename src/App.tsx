import './App.css'
import {
  GroupStageContainer,
  ThirdPlaceContainer,
  RoundOf32Container,
  RoundOf16Container,
  QuarterFinalsContainer,
  SemiFinalsContainer,
  FinalContainer,
  HeroVideo,
  Toolbar,
} from './components'

function App() {
  return (
    <main className="app-shell">
      <HeroVideo />
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
