import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
// import { Dashboard } from "./components/Dashboard";
import { Register } from "./components/Register";
import Header from './components/Header';
import Inicio from './Pages/Inicio';
import Publicar from './Pages/Publicar';
import Pedido from './Pages/Pedido';
import HistorialPedidos from './Pages/HistorialPedidos';
import HistorialFacturas from './Pages/HistorialFacturas';


function App() {

  return (
    <>

      <Routes>
          <Route path="*" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/inicio" element={<Inicio/>}></Route>
          <Route path="/publicar" element={<Publicar/>}></Route>
          <Route path="/pedido" element={<Pedido/>}></Route>
          <Route path="/mispedidos" element={<HistorialPedidos/>}></Route>
          <Route path="/misfacturas" element={<HistorialFacturas/>}></Route>
      </Routes>
    </>
  )
}

export default App
