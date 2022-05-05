import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { ProductosScreen } from "../components/producto/ProductosScreen";
import { PersonasPage } from "../components/persona/PersonasPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonasPage />} />
        <Route path="/personas" element={<PersonasPage />} />
        <Route path="/productos" element={<ProductosScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
