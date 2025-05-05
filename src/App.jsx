import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Galones from './Galones';
import Combustible from './Combustible';
import Horas from './Horas';
import Pago from './Pago';
import Peso from './Peso';
import GalonesLitros from './GalonesLitros';
import KmMillas from './KmMillas';
import ThemeToggle from './ThemeToggle';
import './ThemeToggle.css'

import 'font-awesome/css/font-awesome.min.css';

function FormularioGeneral() {
  return (
    <div className="form-container">
      <Galones />
      <Combustible />
      <Horas />
      <Pago />
      <Peso />
    </div>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showToggle, setShowToggle] = useState(true);

  // Detectar modo preferido o cargar el último guardado
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode ? JSON.parse(savedMode) : prefersDark);
  }, []);

  // Aplicar clase al body y guardar estado
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Mostrar toggle por interacción
  useEffect(() => {
    let timeout = setTimeout(() => setShowToggle(false), 5000);
    const showAgain = () => {
      setShowToggle(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setShowToggle(false), 5000);
    };
    window.addEventListener('mousemove', showAgain);
    window.addEventListener('touchstart', showAgain);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', showAgain);
      window.removeEventListener('touchstart', showAgain);
    };
  }, []);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className="app-container">
      <Router>
        {/* Botón flotante de modo oscuro */}
        {showToggle && (
          <div className="toggle-container" style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        )}

        {/* Navegación principal */}
        <nav className="navbar">
          <NavLink to="/" className="nav-link" end>
            Formulario General
          </NavLink>
          <NavLink to="/galones-litros" className="nav-link">
            Galones a Litros
          </NavLink>
          <NavLink to="/km-millas" className="nav-link">
            Km a Millas
          </NavLink>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<FormularioGeneral />} />
          <Route path="/galones-litros" element={<GalonesLitros />} />
          <Route path="/km-millas" element={<KmMillas />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
