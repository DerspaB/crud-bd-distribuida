import { Container } from "@mui/material";
import React from "react";
import { ProductoProvider } from "./provider/ProductoProvider";
import { DeleteModal } from "./screens/grid/DeleteModal";
import { ProductoGrid } from "./screens/grid/ProductoGrid";
import { ProductoModal } from "./screens/grid/ProductoModal";

export const ProductoPage = () => {
  return (
    <ProductoProvider>
      <Container maxWidth="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '40px' }}>
        <ProductoGrid />
        <ProductoModal />
        <DeleteModal />
      </Container>
    </ProductoProvider>
  )
};
