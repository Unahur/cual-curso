import React, { Component } from "react";

class CrearEstudiantes extends Component {
  state = {
    nombre_apellido: "",
    dni: 0,
    carreraId:0,
    dataValue: false
  }
 
 
 crearAlumno = () => {
   var data = {
     nombre_apellido: this.state.nombre_apellido,
     dni: this.state.dni,
     carreraId: this.state.carreraId
   }

    fetch("http://localhost:3001/estudiantes", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div>
        <div className="contenedor-titulo">
          <div className="titulo">CREAR NUEVO ESTUDIANTE</div>
        </div>
        <div  className="col-md-4" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
          <form 
            action="" 
            
            autoComplete="off" 
            className="contenedor-grid contenedor-grid-abm" 
           // onSubmit={(e) => this.handleSubmit(e)}
          >
            <div className="contenido">
              <div className="texto">Nombre y apellido (*)</div>
                <input 
                  className="input" 
                  type="text" 
                  name="nombre_apellido" 
                  value={this.state.nombre_apellido} 
                  onChange={this.onChange}
                  />
              <div className= "texto">Dni(*)</div>
                <input 
                  className="input" 
                  type="number" 
                  name="dni" 
                  onChange={this.onChange}
                  value={this.state.dni} 
                />
                <div className= "texto">CarreraId(*)</div>
                <input 
                  className="input" 
                  type="number" 
                  name="carreraId" 
                  onChange={this.onChange}
                  value={this.state.carreraId} 
                />
            </div>
            <footer className="footer">
              <button 
                type="submit"  
                className="btn btn-success" 
                onClick={() => this.crearAlumno()}
              >
                Crear
              </button>
            </footer>
          </form>
        </div>
    
      </div>
    )
  }
}

export default CrearEstudiantes;
 

 