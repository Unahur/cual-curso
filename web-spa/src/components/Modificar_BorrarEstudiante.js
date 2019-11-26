import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Modificar_BorrarEstudiante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      estudiantes: [],
      dni: 0,
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

  getEstudiante = () => {
    const alumBuscado = this.state.estudiantes.filter(e => e.dni == this.state.dni);
    this.setState(() => ({estudiantes: alumBuscado}) );
  }

   
    filasEstudiantes() {
      return this.state.estudiantes.map(e => (
        <thead>
          <tr>   
            <th>{e.id}</th>
            <th>{e.nombre_apellido}</th> 
            <th>{e.dni}</th> 
            <th>
              <Link to={`/ModificarEstudiantes/?id=${e.id}`}>
                <button className="btn btn-warning btn-lg"
                        renderAs="button"/>
              </Link>
            </th> 
            <th>
              <Link to={`/BorrarEstudiante/?id=${e.id}`}>
              <button className="btn btn-danger btn-lg" 
                      renderAs="button"/>
              </Link>
            </th>
          </tr>
        </thead>
      ))
    }

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
          <main className="container">
            <div id="listadoEstudiante">
              <div className="row" >
                <div className="col text-center">
                  <h3 className="titulo" id="titulo" >Listado <span>Estudiantes</span></h3>
                  <br/>
                  <br/>
                  <div className= "texto">Buscar por DNI</div>
                    <input 
                      className="input" 
                      type="number" 
                      name="dni" 
                      onChange={this.onChange}
                      value={this.state.dni} 
                    />
                   <button 
                    type="submit"  
                    className="btn btn-success" 
                    onClick={() => this.getEstudiante()}
                   >
                    Buscar
                   </button>

                   <button 
                    type="submit"  
                    className="btn btn-success" 
                    onClick={() => window.location.href = "/Modificar_BorrarEstudiante"}
                   >
                    Refrescar
                   </button>

                </div>
              </div>
              
              <div className="row">
                <div className="table-responsive"> 
                         
                  <table className="table table-striped search-table" id="table">
                    <thead className="thead-dark"> 
                      <tr>
                        <th><p className="text-center">#ID</p></th>
                        <th><p className="text-center">Nombre y Apellido</p></th>
                        <th><p className="text-center">DNI</p></th>
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
export default Modificar_BorrarEstudiante;
