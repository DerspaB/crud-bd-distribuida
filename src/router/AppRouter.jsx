import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PersonasPage } from "../components/persona/PersonasPage";
import { ProductoPage } from "../components/producto/ProductoPage";
import { UsuarioPage } from "../components/usuario/UsuarioPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonasPage />} />
        <Route path="/personas" element={<PersonasPage />} />
        <Route path="/productos" element={<ProductoPage />} />
        <Route path="/usuarios" element={<UsuarioPage />} />
      </Routes>
    </BrowserRouter>
  );
};
