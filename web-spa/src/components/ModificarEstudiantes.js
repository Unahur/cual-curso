import React, { Component } from "react";


class ModificarEstudiantes extends Component {
     state = {
       id:0,
        nombre_apellido: "",
        dni: 0,
        carreraId: 0,
      };
    
      componentDidMount = () => {
        const id = this.sacarId();
        fetch(" http://localhost:3001/estudiantes/" + id)
          .then(res => res.json())
          .then(data => {
            this.setState({ 
              id: data.id,
              nombre_apellido: data.nombre_apellido,
              dni: data.dni,
              carreraId: data.carreraId 
            });
          })
          .catch(console.log);
      };

      sacarId() {
        var a = this.props.location.search;
          var id = a.split("=");
          return(id[1]);
      }

      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      verificar = () => {
        return this.state.nombre_apellido.length > 1 && this.state.dni.length > 6;
      };
    
      ModificacionEstudiante = () => {
        const estudiantes = {
          id: this.state.id,
          nombre_apellido: this.state.nombre_apellido,
          dni: this.state.dni,
          carreraId: this.state.carreraId,
        };
        if (this.verificar()) {
        if (
          window.confirm(
            "Estas seguro que desea modificar el estudiante " + this.state.nombre_apellido + " con DNI " + this.state.dni
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
            .then(response => response.json, console.log("funca"))
            .catch(error => console.error("Error:", error))
            .then(response => console.log("Success:", response))
            .then(() => window.location.href = '/Modificar_BorrarEstudiante');
        }
        }else{
          alert(
            "El nombre del alumno o el DNI son invalidos (nombre mayor a 1 CARACTER y dni mayor a 6 CIFRAS!!)"
          );
          window.location.href = '/Modificar_BorrarEstudiante'
        }
      };

      handleSubmit(e) {
        e.preventDefault();
        window.location.href = '/Modificar_BorrarEstudiante';
      }

      render() {
        console.log(this.state.dni);
        return (
          <div className="row justify-content-md-center">
            <div
              className="col-md-5"
              style={{ backgroundColor: "rgb(240, 240, 240)" }}
            >
              <div className="col text-center">
                <h3 className="titulo" id="titulo" >Modificar <span>Estudiantes</span></h3>
              <br/>
              <form onSubmit={(e) => this.handleSubmit(e)}>
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
                    <div className= "texto"></div>
                      <input 
                        className="input" 
                        type="number" 
                        name="carreraId" 
                        hidden={true}
                        onChange={this.onChange}
                        value={this.state.carreraId} 
                      />
                  </div>
              </form>
              </div>
              <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => this.ModificacionEstudiante()}
                  >
                    Modificar estudiante
                  </button>
            </div>
          </div>
        );
      }
    }
    

export default ModificarEstudiantes;