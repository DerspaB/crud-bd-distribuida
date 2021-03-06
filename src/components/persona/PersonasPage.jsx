import { Container } from "@mui/material";
import React from "react";
import { PersonaProvider } from "./provider/PersonaProvider";
import { DeleteModal } from "./screens/grid/DeleteModal";
import { PersonaGrid } from "./screens/grid/PersonaGrid";
import { PersonaModal } from "./screens/grid/PersonaModal";

export const PersonasPage = () => {
  return (
    <PersonaProvider>
      <Container maxWidth="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <PersonaGrid />
        <PersonaModal />
        <DeleteModal />
      </Container>
    </PersonaProvider>
  )
};
