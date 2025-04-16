import { useState } from 'react'
import './App.css'
import Paises from './Componentes/Paises'
import Nombres from './Componentes/Nombres'
import Menu from './Componentes/Menu'
import Lista from './Componentes/Lista'
import Dominios from './Componentes/Dominios'

function App() {

  return (
    <>
    <Paises />
    <Nombres />
    <Menu />
    <Lista />
    <Dominios />
    </>
  )
}

export default App
