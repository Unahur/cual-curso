import React, { Component } from "react";

class CrearEstudiantes extends Component {
  state = {
    nombre_apellido: "",
    dni: 0,
    carreraId:0,
    dataValue: false
  }
 
  verificar = () => {
    return this.state.nombre_apellido.length > 1 && this.state.dni.length > 6;
  };


 crearAlumno = () => {
  if (this.verificar()) {
   var data = {
     nombre_apellido: this.state.nombre_apellido,
     dni: this.state.dni,
     carreraId: this.state.carreraId
   }
   window.alert("Se Agrego el Estudiante "+ this.state.nombre_apellido + " exitosamente!!")
    fetch("http://localhost:3001/estudiantes", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));
  }else{
    alert(
      "El nombre del alumno o el DNI son invalidos (nombre mayor a un caracter y dni mayor a 6 cifras)"
    );
  }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div>
          <div className="col text-center">
            <h3 className="titulo" id="titulo" >Alta <span>Estudiantes</span></h3>
          </div>
          <div className="row justify-content-md-center">
        <div  className="col-md-4" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
          <form 
            action="" 
            autoComplete="off" 
            className="contenedor-grid contenedor-grid-abm" 
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
      </div>
    )
  }
}

export default CrearEstudiantes;
 
