import { Container } from "@mui/material";
import React from "react";
import { UsuarioProvider } from "./provider/UsuarioProvider";
import { DeleteModal } from "./screens/grid/DeleteModal";
import { GridUsuarios } from "./screens/grid/GridUsuarios";
import { UsuarioModal } from "./screens/grid/UsuarioModal";

export const UsuarioPage = () => {
  return (
    <UsuarioProvider>
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <GridUsuarios />
        <UsuarioModal />
        <DeleteModal />
      </Container>
    </UsuarioProvider>
  );
};
