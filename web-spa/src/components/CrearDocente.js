import React, { Component } from "react";

class CrearDocente extends Component {

    state = {
    nombre_apellido_docente: "",
      
    };
  
    createDocente = () => {
        var data = {
           nombre_apellido_docente: this.state.nombre_apellido_docente,

        }
        fetch("http://localhost:3001/docentes", {
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
              <div className="texto">Nombre y apellido del docente (*)</div>
                <input
                  type="text"
                  className="form-control"
                  name="nombre_apellido_docente"
                  id="nombre_apellido_docentes"
                  placeholder="nombre del docente"
                  onChange={this.onChange}
                  value={this.state.nombre_apellido_docente}
                  required
                />
              </div> 
  
            
              
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => this.createDocente()}
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
  export default CrearDocente;
  
  