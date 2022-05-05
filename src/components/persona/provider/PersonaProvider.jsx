import React, { useReducer } from 'react'
import { PersonaContext } from '../context/usePersona'
import { personaInitialState, personaReducer } from '../reducer/personaReducer'

export const PersonaProvider = ({children}) => {

    const [state, dispatch] = useReducer(personaReducer, personaInitialState)
    const value = {state, dispatch}

  return (
    <PersonaContext.Provider value={value}>
      {children}
    </PersonaContext.Provider>
  )
}
