 
import React, { Component } from "react";
class BorrarEstudiante extends Component {

  state = {
    nombre_apellido:"",
    dni: "",
    carreraId: ""
  };
 
  
  deleteEstudiante = () => {
   
      var data = {
         nombre_apellido: this.state.nombre_apellido,
         dni: this.state.dni,
         carreraId: this.state.carreraId,
      };
      fetch("http://localhost:3001/estudiantes", {
        method: "DELETE",
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
            <div className="texto">Nombre del estudiante(*)</div>
              <input
                type="text"
                className="form-control"
                name="nombre_apellido"
                id="nombre_apellidos"
                placeholder="Ingrese el nombre y apelido"
                onChange={this.onChange}
                value={this.state.nombre_apellido}
                required
              />
            </div> 

            <div className="form-group">
            <div className="texto">dni(*)</div>
              <input
                type="text"
                className="form-control"
                name="dni"
                id="dnis"
                placeholder="Ingrese el dni"
                onChange={this.onChange}
                value={this.state.dni}
                required
              />
            </div> 
            <div className="form-group">carreraId(*)</div>
              <input
                type="number"
                className="form-control"
                name="carreraId"
                id="carreraIds"
                placeholder="Ingrese el id_carrera"
                onChange={this.onChange}
                value={this.state.carreraId}
                required
              />
            <br/>
            <div>
              <button  type="submit" className="btn btn-success" onClick={() => this.deleteEstudiante()}>
                        Borrar
              </button>
             </div>
           </form>
          <br/>
        </div>
      </div>
    );
  }
}
export default BorrarEstudiante;

