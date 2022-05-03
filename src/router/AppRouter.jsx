import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { PersonasScreen } from "../components/persona/PersonasScreen";
import { ProductosScreen } from "../components/producto/ProductosScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PersonasScreen />} />
        <Route path="/personas" element={<PersonasScreen />} />
        <Route path="/productos" element={<ProductosScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
