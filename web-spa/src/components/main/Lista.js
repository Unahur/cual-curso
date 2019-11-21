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

   
    filasDocentes() {
      return this.state.docentes.map(e => (
        <tr>   
          <th>{e.id}</th>
          <th>{e.nombre}</th> 
          <th>{e.apellido}</th> 
          <th>{e.dni}</th>
          <th>
            <Link to={`/modificar/?idDocente=${e.id}`}>
              <button className="btn btn-warning btn-lg"
                      renderAs="button"/>
            </Link>
          </th> 
          <th>
            <button className="btn btn-danger btn-lg" 
                    onClick={() => this.deleteDocente(e.id)}/>
          </th>
      </tr>
      ))
    }

    deleteDocente = (id) => {
      var newList = [];
      if (
        window.confirm("Esta seguro que quiere borrar el docente")
      ) {
        fetch("http://localhost:3001/docentes/" + id, {
          method: "DELETE"
        })
          .then(() => {
            console.log("removed id " + id);
          })
          .catch(err => {
            console.error(err);
          });
        newList = this.state.docentes.filter(docente => docente.id !== id);
        this.setState({ docentes: newList });
      }
    };

    render() {
        return (
          <main className="container">
            <div id="listadoDocente">
              <div className="row" >
                <div className="col text-center">
                  <h3 classNAme="titulo" id="titulo" >Listado <span>Docentes</span></h3>
                </div>
              </div>
              <div className="row">
                <div className="table-responsive">            
                  <table className="table table-striped" id="table">
                    <thead className="thead-dark"> 
                      <tr>
                        <th><p className="text-center">#ID</p></th>
                        <th><p className="text-center">Nombre</p></th>
                        <th><p className="text-center">Apellido</p></th>
                        <th><p className="text-center">DNI</p></th>
                        <th><p className="text-center">Modificar</p></th>
                        <th><p className="text-center">Eliminar</p></th>                  
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