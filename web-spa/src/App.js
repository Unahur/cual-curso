import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//--- COMPONENTES
import CrearEstudiantes from "./components/CrearEstudiantes";
import ModificarEstudiantes from "./components/ModificarEstudiantes";
import Menu from "./components/Menu";
import ListarEstudiantes from "./components/ListarEstudiantes";
import BorrarEstudiante from "./components/BorrarEstudiante";

//import BorrarEstudiante from "./components/BorrarEstudiante";
//import ModificarEstudiantes from "./components/ModificarEstudiantes";
//import CrearAula from "./components/CrearAula";
//import CrearCarrera from "./components/CrearCarrera";
//import CrearDocente from "./components/CrearDocente";
//import CrearMateria from "./components/CrearMateria";
//import Sugerencias from "./components/Sugerencias";
class App extends React.Component {
  render() {
  
    return (
      <BrowserRouter>
      <div>
        <div className="App">
          <br/>
          <div className="container-fluid">
          <Menu/>
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
           
            <div className="container">
            <Switch>
              <Route exact path="/CrearEstudiantes" component = {CrearEstudiantes} />
              <Route exact path="/ModificarEstudiantes" component = {ModificarEstudiantes} />
              <Route exact path="/ListarEstudiantes" component = {ListarEstudiantes} />
              <Route exact path="/BorrarEstudiante" component = {BorrarEstudiante} />
            </Switch>
            </div>
          </ul>

          <br/>
        
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;