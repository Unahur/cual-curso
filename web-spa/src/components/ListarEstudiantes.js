import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";


class ListarEstudiantes extends Component {


  constructor(props) {
    super(props);
    this.state = {
      estudiantes: [],
    };
  }

  componentDidMount() {    
    this.getEstudiantes()
      .then(estudiantes => this.setState({ estudiantes }));
  }

  getEstudiantes = () => {
    return fetch("http://localhost:3001/estudiantes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    }

   
    filasEstudiantes() {
      return this.state.estudiantes.map(e => (
        <tr>   
          <th>{e.id}</th>
          <th>{e.nombre_apellido}</th> 
          <th>{e.dni}</th> 
          <th>{e.carreraId}</th>
          <th>
            <Link to={`/ModificarEstudiantes/?id=${e.id}`}> 
              <button className="btn btn-warning btn-lg"
                      renderAs="button"/>
            </Link>
          </th> 
          <th>
            <button className="btn btn-danger btn-lg" 
                    onClick={() => this.deleteEstudiante(e.id)}/>
          </th>
      </tr>
      ))
    }

    deleteEstudiante = (id) => {
      var newList = [];
      if (
        window.confirm("Esta seguro que quiere borrar el estudiante")
      ) {
        fetch("http://localhost:3001/estudiantes/" + id, {
          method: "DELETE"
        })
          .then(() => {
            console.log("removed id " + id);
          })
          .catch(err => {
            console.error(err);
          });
        newList = this.state.estudiantes.filter(estudiante => estudiante.id !== id);
        this.setState({ estudiantes: newList });
      }
    };

    render() {
        return (
          <main className="container">
            <div id="listadoEstudiante">
              <div className="row" >
                <div className="col text-center">
                  <h3 className="titulo" id="titulo" >Listado <span>Estudiantes</span></h3>
                </div>
              </div>
              <div className="row">
                <div className="table-responsive">            
                  <table className="table table-striped" id="table">
                    <thead className="thead-dark"> 
                      <tr>
                        <th><p className="text-center">#ID</p></th>
                        <th><p className="text-center">Nombre_Apellido</p></th>
                        <th><p className="text-center">DNI</p></th>
                        <th><p className="text-center">CARRERAID</p></th>
                        <th><p className="text-center">Modificar</p></th>
                        <th><p className="text-center">Eliminar</p></th>                  
                      </tr>
                    </thead>
                    {this.filasEstudiantes()}
                  </table>
                </div>
              </div>
            </div>
          </main>
        )
    }  

}
export default ListarEstudiantes;