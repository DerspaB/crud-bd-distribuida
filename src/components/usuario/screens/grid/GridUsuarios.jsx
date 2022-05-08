import React, { useEffect } from "react";
import { UsuarioBusiness } from "../../actions/usuarioBusiness";
import { useUsuario } from "../../context/useUsuario";
import { UsuarioGrid } from "./UsuarioGrid";

export const GridUsuarios = () => {
  const { getUsers } = UsuarioBusiness();
  const { state } = useUsuario();

  useEffect(() => {
    getUsers();
  }, []);

  return <UsuarioGrid rows={state.rows} />;
};
