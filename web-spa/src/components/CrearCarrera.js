import React, { Component } from "react";

class CrearCarrera extends Component {

  state = {
    nombre_carrera: "",
    dataValue: false,
  };
  
  createCarrera = () => {
      var data = {
         nombre_carrera: this.state.nombre_carrera,
      };
      fetch("http://localhost:3001/carreras", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
    
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
            <div className="texto">Nombre de la carrera (*)</div>
              <input
                type="text"
                className="form-control"
                name="nombre_carrera"
                id="nombre_carreras"
                placeholder="Ingrese el nombre de la carrera"
                onChange={this.onChange}
                value={this.state.nombre_carrera}
                required
              />
            </div> 

          
            
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => this.createCarrera()}
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
export default CrearCarrera;

