import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
// import { Dashboard } from "./components/Dashboard";
import { Register } from "./components/Register";
import Header from './components/Header';
import Inicio from './Pages/Inicio';
import { CartProvider } from 'react-use-cart';


function App() {

  return (
    <>
      <Inicio/>
      {/* <Routes>
          <Route path="*" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
      </Routes> */}
    </>
  )
}

export default App
