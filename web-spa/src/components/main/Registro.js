import React, { Component } from 'react';

class Registro extends Component {
    render() {
        return (
          <main class="container">          
            <form id="formulario">
              <h3 class="titulo">Registrar <span>Docente</span></h3>
              <div class="form-group">
                <label for="">Nombre</label>
                <input type="text" class="form-control" name="nombre" placeholder="Nombre" required/>
              </div>
              <div class="form-group">
                <label for="">Apellido</label>
                <input type="text" class="form-control" name="apellido" placeholder="Apellido" required/>
              </div>
              <div class="form-group">
                <label for="">DNI</label>
                <input type="text" class="form-control" name="dni" placeholder="DNI" required/>
              </div>
              <button type="text" class="btn btn-primary" onClick="alert('Docente registrado')">Registrar</button>
            </form>                     
          </main>
        )
    }
}

export default Registro;