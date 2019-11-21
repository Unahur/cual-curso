import React, { Component } from 'react';

class Registro extends Component {
  state = {
    nombre: "",
    apellido: "",
    dni: null,
    dataValue: false
  };


  createDocente = () => {
    
      var data = {
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        dni: this.state.dni
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
    }

        onChange = e => {
          this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
          <main className="container">          
            <form id="formulario">
              <h3 className="titulo">Registrar <span>Docente</span></h3>
              <div className="form-group">
                <label for="">Nombre</label>
                <input type="text" class="form-control"
                        name="nombre" placeholder="Nombre" required
                        value={this.state.nombre} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label for="">Apellido</label>
                <input type="text" class="form-control"
                        name="apellido" placeholder="Apellido" required
                        value={this.state.apellido} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label for="">DNI</label>
                <input type="text" class="form-control"
                        name="dni" placeholder="DNI" required
                        value={this.state.dni} onChange={this.onChange}/>
              </div>
              <button type="text" class="btn btn-primary"
                      onClick={() => this.createDocente()}>Registrar</button>
            </form>                     
          </main>
        )
    }
}

export default Registro;