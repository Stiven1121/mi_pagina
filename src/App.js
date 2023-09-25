import React from 'react';
import appTareaLogo from './images/logo.jpg'
import './App.css';
import './hojas-de-estilo/Tarea.css'
import ListaDeTareas from './components/ListaDeTareas';
import NavBar from './components/MenuNavegacion';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

<>
      <NavBar />
      <div className='aplicacion-tareas'>
         <div className='apptarea-logo-contenedor'>
          <img 
            src={appTareaLogo}
            className='apptarea-logo' /> 

          </div>

          <div className='tareas-lista-principal'>
            <h1>Mis Tareas</h1>
            <ListaDeTareas />
         
           </div>

      </div>

      <Footer />
  </>
    )

}

export default App;

