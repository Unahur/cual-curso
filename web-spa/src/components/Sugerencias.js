import React, { Component } from "react";
import "../App.css";
export default class Sugerencias extends Component {
  state = {
    verTodas: false,
    verMaterias: false,
    myStyle: "",
    materias: [],
    listaMaterias: []
  };

  componentDidMount = () => {
    
    fetch(" http://localhost:3001/materias/")
      .then(res => res.json())
      .then(data => {
        this.setState({ materias: data });
      })
      .catch(console.log);
    
    };

  mostrarTodas = () => {
    //this.state.listaMaterias=materias

    this.setState({ verTodas: true });
    
  };
  mostrarSugerencias = (listadoM) => {
    //this.state.listaMaterias=ListadoM.filter(e=>e.correlativa.array.anyAll(maeria=>materia.aprobada);
    //suponiendo que materia tenga  la variable aprobadas y una lista de sus correlativas, que por ahora no lo tiene
    console.log(this.state.materias[1])
    this.setState({ verTodas: false });
    
      
    
  };

  mostrarMateria = index => {
   const listaDeMaterias = this.state.listaMaterias;
    if(this.state.listaMaterias.every(mat=>this.state.materias[index.index].nombre!==mat.nombre))
    listaDeMaterias.push(this.state.materias[index.index]);
    this.setState({ listaMaterias: listaDeMaterias });
    this.setState({ myStyle: "col-6", verMaterias: true });
  };
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
      <div id="colF">
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
                    onClick={() => this.mostrarSugerencias()}
                  />{" "}
                  Sugerencias
                </label>

                <label class="btn btn-info">
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autocomplete="off"
                    onClick={() => this.mostrarTodas()}
                  />{" "}
                  Ver todas
                </label>
              </div>
              <br />
              <br />
              <br />

              {this.state.verTodas ? (
                <ul className="list-group list-group-flush ulListaMaterias" >
                  {this.state.materias.map((materia, index) => (
                    <li class="list-group-item ilListaMaterias ">
                      <a
                        onClick={() => this.mostrarMateria({ index })}
                        href="#"
                      >
                        {materia.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="list-group list-group-flush ulListaMaterias">
                  {this.state.materias
                    .filter(materia => materia.correlativa)
                    .map((materia, index) => (
                      <li class="list-group-item ilListaMaterias">
                        <a
                          onClick={() => this.mostrarMateria({ index })}
                          href="#"
                        >
                          {materia.nombre}
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <div id="ilListaMaterias" className={this.state.myStyle} style={{backgroundColor:"rgb(218, 218, 218)"}}>
              {this.state.verMaterias ? (
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Materia</th>
                      <th scope="col">Profesor</th>
                      <th scope="col">Dias</th>
                      <th scope="col">Horario</th>
                      <th scope="col">Inscribirse</th>
                    </tr>
                  </thead>

                  {this.state.listaMaterias.map(materia => 
                    <tbody>
                      <tr>
                        <td>{materia.nombre}</td>
                        <td>{materia.profesor}</td>
                        <td>{materia.dia}</td>
                        <td>{materia.horario}</td>

                        <td>
                          <button className="btn btn-primary btn-sm">
                            Inscribirse
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              ) : (
                ""
              )}
            </div>
            <div className="col">
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
