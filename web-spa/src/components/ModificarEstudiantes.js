import React, { Component } from "react";
class ModificarEstudiantes extends Component {
     state = {
        nombre_apellido: "",
        dni: "",
        estudiantes: [],
      };
    
      componentDidMount = () => {
        fetch(" http://localhost:3001/estudiantes/")
          .then(res => res.json())
          .then(data => {
            this.setState({ estudiantes: data, dni: data.id });
          })
          .catch(console.log);
      };
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      ModificacionEstudiante = () => {
        const estudiantes = {
          nombre_apellido: this.state.nombre_apellido,
          dni: this.state.dni,
          id: this.state.id,
        };
    
        if (
          window.confirm(
            "Estas seguro que desea modificar el estudiante :" + this.state.dni
          ) 
        ) {
          console.log(this.state.dni.toString());
          fetch("http://localhost:3001/estudiantes/" + this.state.id, {
            method: "PUT",
            body: JSON.stringify(estudiantes),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json(), console.log("CAMBIADO"))
            .catch(error => console.error("Error:", error))
            .then(response => console.log("Success:", response));
        }
      };
      render() {
        console.log(this.state.dni);
        return (
          <div className="row justify-content-md-center">
            <div
              className="col-md-4"
              style={{ backgroundColor: "rgb(240, 240, 240)" }}
            >
              <br />
              <form>

                  <div className="form-group">
                  <div className="texto">Nombre y apellido (*)</div>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre_apellido"
                      id="nombre_apellidos"
                      placeholder="Ingrese el nombre y apellido"
                      onChange={this.onChange}
                      value={this.state.nombre_apellido}
                      required
                    />
                  </div>
                  <div className="form-group">
                  <div className="texto">Dni (*)</div>
                    <input
                      type="number"
                      className="form-control"
                      name="dni"
                      id="dnis"
                      placeholder="Ingrese el numero de dni"
                      onChange={this.onChange}
                      value={this.state.dni}
                      required
                    />
                  </div>

                  <div className="form-group">
                  <div className="texto">ID (*)</div>
                    <input
                      type="number"
                      className="form-control"
                      name="id"
                      id="ids"
                      placeholder="Ingrese el numero de id"
                      onChange={this.onChange}
                      value={this.state.id}
                      required
                    />
                  </div>
    
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => this.ModificacionEstudiante()}
                  >
                    Modificar estudiante
                  </button>
                
              </form>
            </div>
          </div>
        );
      }
    }
    

export default ModificarEstudiantes;