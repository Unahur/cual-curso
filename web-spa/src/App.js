import React from "react";
import "./App.css";
import CrearAula from "./components/CrearAula";
import ModificarAula from "./components/ModificarAula";
import ListaAulas from "./components/ListaAulas";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Sugerencias from "./components/Sugerencias";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <br />
          <div className="container-fluid">
            <center>
              <img
                className="img-fluid"
                src="https://servicios.unahur.edu.ar/unahur3w/_comp/unahur/img/logo-transparente.png"
                alt="imagen"
              />
            </center>
          </div>
          <br />
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/ListaAulas">
                Listar aulas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CrearAula">
                Crear aulas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ModificarAula">
                Modificar Aula
              </Link>
            </li>
           
          </ul>

          <br />
          <Switch>
            <Route exact path="/CrearAula" component={CrearAula} />
            <Route exact path="/" component={ListaAulas} />
            <Route exact path="/ListaAulas" component={ListaAulas} />
            <Route exact path="/ModificarAula" component={ModificarAula} />
            <Route exact path="/sugerencias" component={Sugerencias} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
