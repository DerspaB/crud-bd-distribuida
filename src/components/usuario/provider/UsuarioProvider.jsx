import React, { useReducer } from 'react'
import { UsuarioContext } from '../context/useUsuario'
import { usuarioReducer, usuarioInitialState } from '../reducer/usuarioReducer'

export const UsuarioProvider = ({ children }) => {

  const [state, dispatch] = useReducer(usuarioReducer, usuarioInitialState)
  const value = { state, dispatch }

  return (
    <UsuarioContext.Provider value={value}>
      {children}
    </UsuarioContext.Provider>
  )
}
