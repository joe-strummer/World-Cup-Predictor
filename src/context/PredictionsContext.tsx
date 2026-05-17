import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { CountryCode } from '../data/countryNames'

export type MatchPrediction = CountryCode | 'Draw'
export type PredictionsState = Record<string, MatchPrediction>

type PredictionsContextValue = {
  predictions: PredictionsState
  setPrediction: (matchId: string, prediction: MatchPrediction) => void
  togglePrediction: (matchId: string, prediction: MatchPrediction) => void
  resetPredictions: () => void
}

const PredictionsContext = createContext<PredictionsContextValue | undefined>(undefined)

type PredictionsProviderProps = {
  children: ReactNode
}

export function PredictionsProvider({ children }: PredictionsProviderProps) {
  const [predictions, setPredictions] = useState<PredictionsState>({})

  const value = useMemo<PredictionsContextValue>(() => {
    return {
      predictions,
      setPrediction: (matchId, prediction) => {
        setPredictions((current) => ({
          ...current,
          [matchId]: prediction,
        }))
      },
      togglePrediction: (matchId, prediction) => {
        setPredictions((current) => {
          if (current[matchId] === prediction) {
            const next = { ...current }
            delete next[matchId]
            return next
          }

          return {
            ...current,
            [matchId]: prediction,
          }
        })
      },
      resetPredictions: () => {
        setPredictions({})
      },
    }
  }, [predictions])

  return <PredictionsContext.Provider value={value}>{children}</PredictionsContext.Provider>
}

export function usePredictions() {
  const context = useContext(PredictionsContext)

  if (!context) {
    throw new Error('usePredictions must be used within a PredictionsProvider')
  }

  return context
}
