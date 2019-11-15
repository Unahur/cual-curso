import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docentes: [],
    };
  }

  componentDidMount() {
    
    this.getDocentes()
      .then(docentes => this.setState({ docentes }));
  }

  getDocentes = () => {
    return fetch("http://localhost:3001/docentes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    }

    /* modifyDocente(id, nombre, apellido, dni) {
      loadForm(id, nombre, apellido, dni);
    }
  
    loadForm (id,nombre,apellido,dni) {
      return this.state.docentes.filter(id)
    } */

    filasDocentes() {
      return this.state.docentes.map(e => (
        <tr>   
          <th>{e.id}</th>
          <th>{e.nombre}</th> 
          <th>{e.apellido}</th> 
          <th>{e.dni}</th>
          <th>
            <Link to={`/modificar/${e.id}`}>
              <button class="btn btn-warning btn-lg" renderAs="button">                      
              </button>

            </Link>
          </th> 
          <th>
            <button class="btn btn-danger btn-lg" 
                    onclick="deleteDocente(${e.id})"/>
          </th>
      </tr>
      ))
    }

    render() {
        return (
          <main class="container">
            <div id="listadoDocente">
              <div class="row" >
                <div class="col text-center">
                  <h3 class="titulo" id="titulo" >Listado <span>Docentes</span></h3>
                </div>
              </div>
              <div class="row">
                <div class="table-responsive">            
                  <table class="table table-striped" id="table">
                    <thead class="thead-dark"> 
                      <tr>
                        <th><p clas="text-center">#ID</p></th>
                        <th><p clas="text-center">Nombre</p></th>
                        <th><p clas="text-center">Apellido</p></th>
                        <th><p clas="text-center">DNI</p></th>
                        <th><p clas="text-center">Modificar</p></th>
                        <th><p clas="text-center">Eliminar</p></th>                  
                      </tr>
                    </thead>
                    {this.filasDocentes()}
                  </table>
                </div>
              </div>
            </div>
          </main>
        )
    }

  

}
export default Lista;