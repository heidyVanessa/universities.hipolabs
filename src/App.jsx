import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Paises from './Componentes/Paises'
import Nombres from './Componentes/Nombres'
import Menu from './Componentes/Menu'
import Lista from './Componentes/Lista'
import Dominios from './Componentes/Dominios'

function App() {

  return (
    <Router>
      
      <Menu />

      <Routes>
        <Route path="/" element={<Paises />} />
        <Route path="/" element={<Nombres />} />
        <Route path="/" element={<Menu />} />
        <Route path="/" element={<Lista />} />
        <Route path="/" element={<Dominios />} />
      </Routes>
    </Router>  
  )
}

export default App
