import React, { Component } from "react";

export default class Sugerencias extends Component {
  render() {
    const materias = [
      {
        materia: "Matematicas 1",
        profesor: "Silvia Panizzi",
        promedio: 8
      },
      {
        materia: "Programacion con objetos 1",
        profesor: "Silvia Panizzi",
        promedio: 8
      },
      {
        materia: "Programacion funcional",
        profesor: "Silvia Panizzi",
        promedio: 8
      },

      {
        materia: " Programacion concurrente",
        profesor: "Silvia Panizzi",
        promedio: 8
      },

      {
        materia: "Base de datos",
        profesor: "Silvia Panizzi",
        promedio: 8
      },

      {
        materia: "Introduccion a la programacion",
        profesor: "Silvia Panizzi",
        promedio: 8
      },

      {
        materia: "Redes de computadoras",
        profesor: "Silvia Panizzi",
        promedio: 8
      }
    ];

    return (
      <div>
        <div className="row justify-content-md-center">
          <nav class="nav">
            <a class="nav-link active" href="#">
              Inscripcion de materias
            </a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Tramites
            </a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Becas
            </a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Cursos
            </a>
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Mi perfil
            </a>
          </nav>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Inscripcion de materias</h2>
              <br />
              <br />
              <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <br />
                <label class="btn btn-info active">
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked
                  />{" "}
                  Sugerencias
                </label>
                <label class="btn btn-info">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autocomplete="off"
                  />{" "}
                  Ver todas
                </label>
              </div>
              <br />
              <br />
              <br />
              <ul class="list-group list-group-flush" id="ulListaMaterias">
                <li class="list-group-item ilListaMaterias">
                  <a href="#">Matematicas 2</a>
                </li>
                <li class="list-group-item ilListaMaterias">
                  <a href="#">Estructura de datos</a>
                </li>
                <li class="list-group-item ilListaMaterias">
                  <a href="#">Interfaz de usuario</a>
                </li>
                <li class="list-group-item ilListaMaterias">
                  <a href="#">Estrategia de persistencia</a>
                </li>
                <li class="list-group-item ilListaMaterias">
                  <a href="#">Concurrencia</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-9 ">
              <h2>Historia academica</h2>
              <br />
              {materias.map(e => (
                <div className="card matAprobadas">
                  <div className="card-body">
                    <h5 className="card-title">{"Materia: " + e.materia}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {"Profesor: " + e.profesor}
                    </h6>
                    <p className="card-text">{"Promedio: " + e.promedio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
