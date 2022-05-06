import { useContext, createContext } from "react";
import { productoInitialState } from "../reducer/productoReducer";

// Se crea un Contexto el cual le asignamos el tipo de CountContext el cual tendra nuestro state del reducer y nuestro dispatch
export const ProductoContext = createContext({
  state: productoInitialState,
  dispatch: () => {},
});

// Se crea un custom hook para validar que nuestro contexto no contenta una instancia indefinida
// y una vez se valide que si contiene una instancia, lo retornamos para su uso posterior

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (context === undefined) {
    throw new Error("useProducto must be used with a Provider");
  }

  return context;
};
