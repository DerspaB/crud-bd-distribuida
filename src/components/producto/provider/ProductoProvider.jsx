import React, { useReducer } from 'react'
import { ProductoContext } from '../context/useProducto'
import { productoInitialState, productoReducer } from '../reducer/productoReducer'

export const ProductoProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productoReducer, productoInitialState)
  const value = { state, dispatch }

  return (
    <ProductoContext.Provider value={value}>
      {children}
    </ProductoContext.Provider>
  )
}
