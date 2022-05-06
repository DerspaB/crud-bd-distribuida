import { Container } from "@mui/material";
import React from "react";
import { UsuarioProvider } from "./provider/UsuarioProvider";
import { DeleteModal } from "./screens/grid/DeleteModal";
import { UsuarioGrid } from "./screens/grid/UsuarioGrid";
import { UsuarioModal } from "./screens/grid/UsuarioModal";

export const UsuarioPage = () => {
  return (
    <UsuarioProvider>
      <Container maxWidth="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <UsuarioGrid />
        <UsuarioModal />
        <DeleteModal />
      </Container>
    </UsuarioProvider>
  )
};
