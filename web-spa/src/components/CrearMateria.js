import React, { Component } from "react";

class CrearMateria extends Component {

    state = {
    nombre_materia: "",
      
    };
  
    createMateria = () => {
        var data = {
           nombre_materia: this.state.nombre_materia,

        }
        fetch("http://localhost:3001/materias", {
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
              <div className="texto">Nombre de la materia (*)</div>
                <input
                  type="text"
                  className="form-control"
                  name="nombre_materia"
                  id="nombre_materias"
                  placeholder="nombre de la materia"
                  onChange={this.onChange}
                  value={this.state.nombre_materia}
                  required
                />
              </div> 
  
            
              
              <button
                type="submit"
                className="btn btn-success"
                onClick={() => this.createMateria()}
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
  export default CrearMateria;
  
  