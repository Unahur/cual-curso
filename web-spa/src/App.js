import React from 'react';
import './App.css';
import Logo from './images/logo-transparente.png';
import Materia from './Componentes/materia-create.js'
function App() {

  return (
    <div>
      <div class="contenedor-logo">
        <div class="row-fluid">
        < img class="logo-Unahur" type="img" src={Logo}></img>
        </div>
      </div>
      <div class="contenedor-header">
        <header class="header">
          <ul class="contenedor-header-buttoms">
            <li><a>Crear</a></li>
            <li><a>Materias</a></li>
          </ul>
        </header>
      </div>
    <Materia/>
    </div>
  );
}

export default App;
