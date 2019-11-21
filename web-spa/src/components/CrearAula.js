
import React, { Component } from "react";
class CrearAula extends Component {

  state = {
    nombre_aula: "",
    edificio: "",
    dataValue: false,
  };
  
  createAula = () => {
    if (this.verificarNombre()) {
      var data = {
         nombre_aula: this.state.nombre_aula,
         edificio: this.state.edificio,
      };
      fetch("http://localhost:3001/aulas", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="row justify-content-md-center">
        <div
          className="col-md-4"
          style={{ backgroundColor: "rgb(240, 240, 240)" }}
        >
          <br />
          <form>
          
            <div className="form-group">
            <div className="texto">Nombre del aula (*)</div>
              <input
                type="text"
                className="form-control"
                name="nombre_aula"
                id="nombre_aulas"
                placeholder="Ingrese el numero de aula"
                onChange={this.onChange}
                value={this.state.nombre_aula}
                required
              />
            </div> 

            <div className="form-group">
            <div className="texto">Edificio (*)</div>
              <input
                type="text"
                className="form-control"
                name="edificio"
                id="edificios"
                placeholder="Ingrese el edificio"
                onChange={this.onChange}
                value={this.state.edificio}
                required
              />
            </div> 
            
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => this.createAula()}
            >
              Crear
            </button>
          </form>
          <br />
        </div>
      </div>
    );
  }
}
export default CrearAula;

