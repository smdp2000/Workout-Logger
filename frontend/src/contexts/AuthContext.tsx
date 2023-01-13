import { createContext, Dispatch, useEffect, useReducer } from 'react'
import { IUser } from '../models/IUser'

const user: IUser = JSON.parse(localStorage.getItem('user')!)

export const defaultValue = {
  user: user,
  state: {},
  dispatch: (() => undefined) as Dispatch<any>,
}

export const AuthContext = createContext(defaultValue)

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload,
      }

    case 'LOGOUT':
      return {
        user: null,
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  useEffect(() => {
    if (user) {
      dispatch({ type: 'LOGIN', payload: user })
    }
  }, [])

  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
