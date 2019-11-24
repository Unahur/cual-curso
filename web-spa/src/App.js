import React from 'react';
import './App.css';
import CrearEstudiantes from "./components/CrearEstudiantes";
import BorrarEstudiante from "./components/BorrarEstudiante";
import ModificarEstudiantes from "./components/ModificarEstudiantes";
import Sugerencias from "./components/Sugerencias";
class App extends React.Component {
  render() {
  
    return (
      <div>
        <div className="App">
          <br/>
          <div className="container-fluid">
            <center>
              <img
                className="img-fluid"
                src="https://servicios.unahur.edu.ar/unahur3w/_comp/unahur/img/logo-transparente.png"
                alt="imagen"
              />
            </center>
          </div>

          <br/>

          <ul className="nav justify-content-center">
             <CrearEstudiantes/>
             <br/>
             <ModificarEstudiantes/>
             <br/>
             <BorrarEstudiante/>
             <br/>
             <Sugerencias/>
          </ul>

          <br/>
        
        </div>
      </div>
      
    );
    
  }
}
export default App;