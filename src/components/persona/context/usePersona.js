import { useContext, createContext } from 'react'
import { personaInitialState } from '../reducer/personaReducer'



// Se crea un Contexto el cual le asignamos el tipo de CountContext el cual tendra nuestro state del reducer y nuestro dispatch
export const PersonaContext = createContext({state: personaInitialState, dispatch : () => {}})


// Se crea un custom hook para validar que nuestro contexto no contenta una instancia indefinida
// y una vez se valide que si contiene una instancia, lo retornamos para su uso posterior

export const usePersona = () => {
  const context = useContext(PersonaContext)
  if (context === undefined) {
    throw new Error('usePersona must be used with a Provider')
  }

  return context
}