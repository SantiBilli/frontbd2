import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
// import { Dashboard } from "./components/Dashboard"
import { Register } from "./components/Register"

function App() {
  return (
    <>
      <Routes>
          <Route path="*" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
