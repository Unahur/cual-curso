import React, { Component } from 'react';

class Modificacion extends Component {

    render() {
        return(
            <form id="formulario editForm">
                <h3 class="titulo">Modificar <span>Docente</span></h3>
                <div class="form-group">
                    <label for="">Nombre</>
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
                            value="Modificar" onclick='modificar()'/>                  
            </form>
        )
    }

}

export default Modificacion;
