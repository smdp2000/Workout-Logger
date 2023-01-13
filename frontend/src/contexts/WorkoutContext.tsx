import { IWorkout } from '../models/IWorkout'
import { createContext, Dispatch, useReducer } from 'react'

export const defaultValue = {
  workouts: [],
  state: {},
  dispatch: (() => undefined) as Dispatch<any>,
}

export const WorkoutContext = createContext(defaultValue)

export const workoutsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload,
      }
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts],
      }
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter(
          (w: IWorkout) => w._id !== action.payload._id,
        ),
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  })

  return (
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
}
