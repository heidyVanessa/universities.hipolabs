import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'

function Menu() {
  
    return (
        <nav className="c-menu">
            <Link to="/">Lista</Link>
            <Link to="/capturados">Capturados</Link>
            <Link to="/aleatorios">Aleatorio</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/favoritos">Favoritos</Link>
        </nav>
    )
  }
  
  export default Menu