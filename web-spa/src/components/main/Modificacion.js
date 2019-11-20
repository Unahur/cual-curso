import React, { Component } from 'react';

class Modificacion extends Component {

  /* modificarDocente = (id) => {
    var newList = [];
    fetch("http://localhost:3001/docentes/" + id, {
        method: "PUT"
      })
        /* .then(() => {
          console.log("modificar " + id);
        })
        .catch(err => {
          console.error(err);
        });
  } */

  


  render() {
    return (
      <main class="container">          
        <form id="formulario editForm" onSubmit={this.obtenerDatos}>
          <h3 class="titulo">Modificar <span>Docente</span></h3>
          <div class="form-group">
          <label for="">Nombre</label>
            <input type="text" class="form-control" name="nombre"
                    placeholder="Nombre" required id="nombreM"/>
          </div>
          <div class="form-group">
            <label for="">Apellido</label>
            <input type="text" class="form-control" name="apellido"
                    placeholder="Apellido" required id="apellidoM"/>
          </div>
          <div class="form-group">
            <label for="">DNI</label>
            <input type="text" class="form-control" name="dni"
                    placeholder="DNI" required id="dniM"/>
          </div>
          <input type="submit" class="btn btn-primary" id="btn-Modificar"
                  value="Modificar" />
                  
        </form>
      </main>
    )
  }
}

export default Modificacion;