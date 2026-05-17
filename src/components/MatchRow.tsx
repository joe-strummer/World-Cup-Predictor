import { useState } from 'react'
import { TeamButton } from './TeamButton'
import './MatchRow.css'

type MatchRowProps = {
  teamA: string
  teamB: string
}

type Selection = 'teamA' | 'draw' | 'teamB' | null

export function MatchRow({ teamA, teamB }: MatchRowProps) {
  const [selected, setSelected] = useState<Selection>(null)

  const toggleSelection = (option: Selection) => {
    setSelected(selected === option ? null: option)
  }

  const resolveState = (option: Selection) => {
    if (selected === null) {
      return 'unselected'
    }
    
    if (selected === option) {
      return 'selected'
    }

    return 'greyed'
  }

  return (
    <div className="match-row">
      <TeamButton
        label={teamA}
        state={resolveState('teamA')}
        onClick={() => toggleSelection('teamA')}
      />
      <TeamButton
        label="Draw"
        state={resolveState('draw')}
        onClick={() => toggleSelection('draw')}
      />
      <TeamButton
        label={teamB}
        state={resolveState('teamB')}
        onClick={() => toggleSelection('teamB')}
      />
    </div>
  )
}
