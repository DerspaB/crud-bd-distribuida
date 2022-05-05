import { Container } from "@mui/material";
import React from "react";
import { PersonaProvider } from "./provider/PersonaProvider";
import { PersonaGrid } from "./screens/grid/PersonaGrid";

export const PersonasPage = () => {
  return (
    <PersonaProvider>
      <Container maxWidth="md" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px'}}>
        <PersonaGrid />
      </Container>
    </PersonaProvider>
  )
};
