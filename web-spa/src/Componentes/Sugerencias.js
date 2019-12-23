import React, { Component } from 'react';
import Logo from './Abm-materias/images/logo-transparente.png';
import Header from './Sugerencias-components/Header-Sugerencias.js';
import Contenido from './Sugerencias-components/Contenido-Sugerencias.js';
class Sugerencia extends Component{
  render(){
    return (
      <div>
        <Header
            logo={Logo}
        />
        <Contenido/>
      </div>
      )
  }
}

export default Sugerencia;