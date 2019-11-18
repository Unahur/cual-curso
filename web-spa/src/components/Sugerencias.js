import React, { Component } from "react";

class Sugerencias extends Component {
  state = {
    verTodas: false,
    verMaterias: false,
    myStyle: "",
    materias: [],
    listaMaterias: []
  };

  componentDidMount = () => {
    
    fetch(" http://localhost:3001/materias")
      .then(res => res.json())
      .then(data => {
        this.setState({ materias: data });
      })
      .catch(console.log);
    
    };

  mostrarTodas = () => {
    this.setState({ verTodas: true });
  };
  mostrarSugerencias = () => {
    console.log(this.state.materias[1])
    this.setState({ verTodas: false });
  };

  mostrarMateria = index => {
   const listaDeMaterias = this.state.listaMaterias;
    if(this.state.listaMaterias.every(mat=>this.state.materias[index.index].nombre!==mat.nombre_))
    listaDeMaterias.push(this.state.materias[index.index]);
    this.setState({ listaMaterias: listaDeMaterias });
    this.setState({ myStyle: "col-6", verMaterias: true });
  };
  render() {
    const materias = [
      {
        materia: "Matematicas 1",
        docente: "liliana mazzi",
      },
      {
        materia: "Programacion con objetos 1",
        profesor: "carlos lombardi",
    
      },
     {
        materia: "Introduccion a la programacion",
        profesor: "gabriel molina",
      
      },

      {
        materia: "Redes de computadoras",
        profesor: "nico armilla",
      }
    ];
    //hay que cambiar este array ya que esta harcodeado, tengo que cargar las materias aprobadas en alumno
    return (
      //en incripcion a materias quiero que me liste las sugeridas,
      //en 
      <div>
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
                  <input type="radio" name="options" id="option1" autocomplete="off" checked onClick={() => this.mostrarSugerencias()} />{" "}
                  Sugerencias
                </label>
                <label class="btn btn-info">
                  <input type="radio" name="options" id="option2"  autocomplete="off"  onClick={() => this.mostrarTodas()}/>{" "}
                  Ver todas
                </label>
              </div>
              <br />
              <br />
              <br />

              {this.state.verTodas ? (
                <ul class="list-group list-group-flush" id="ulListaMaterias">
                  {this.state.materias.map((materia, index) => (
                    <li class="list-group-item ilListaMaterias">
                      <a onClick={() => this.mostrarMateria({ index })} href="#" >
                        {materia.nombre}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul class="list-group list-group-flush" id="ulListaMaterias">
                  {this.state.materias
                    .filter(materia => materia.correlativa)
                    .map((materia, index) => (
                      <li class="list-group-item ilListaMaterias">
                        <a  onClick={() => this.mostrarMateria({ index })} href="#" >
                          {materia.nombre}
                        </a>
                      </li>
                    ))}
                </ul>
              )}
            </div>
            <div className={this.state.myStyle} style={{backgroundColor:"rgb(218, 218, 218)"}}>
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
export default Sugerencias;