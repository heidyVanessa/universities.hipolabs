import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Menu from './Componentes/Menu'
import Paises from './Componentes/Paises'
import Nombres from './Componentes/Nombres'
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
        <Route path="/" element={<Dominios />} />
      </Routes>
    </Router>  
  )
}

export default App
