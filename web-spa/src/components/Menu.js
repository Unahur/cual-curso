
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                     
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/CrearEstudiantes">CrearEstudiante</Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className="nav-link" to="/ListarEstudiantes">ListarEstudiantes</Link>
                        </li>    
                        <li className="nav-item">
                            <Link className="nav-link" to="/Modificar_BorrarEstudiante">Modificar/Borrar</Link>
                        </li>                 
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;


/*
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Collapsed content</h4>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>



---- original

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
                     
    <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
    </button>        
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/CrearEstudiantes">CrearEstudiante</Link>
            </li>             
            <li className="nav-item">
                <Link className="nav-link" to="/ListarEstudiantes">ListarEstudiantes</Link>
            </li>    
            <li className="nav-item">
                <Link className="nav-link" to="/Modificar_BorrarEstudiante">Modificar/Borrar</Link>
            </li>                 
        </ul>
    </div>
</nav>










*/