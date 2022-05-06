import { useContext, createContext } from "react";
import { usuarioInitialState } from "../reducer/usuarioReducer";

// Se crea un Contexto el cual le asignamos el tipo de CountContext el cual tendra nuestro state del reducer y nuestro dispatch
export const UsuarioContext = createContext({
  state: usuarioInitialState,
  dispatch: () => {},
});

// Se crea un custom hook para validar que nuestro contexto no contenta una instancia indefinida
// y una vez se valide que si contiene una instancia, lo retornamos para su uso posterior

export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error("useUsuario must be used with a Provider");
  }

  return context;
};
