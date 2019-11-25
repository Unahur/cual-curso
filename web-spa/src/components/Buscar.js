import React, { Component } from 'react';

class Buscar extends Component {

  constructor(props) {
    super(props); 
   this.state = {
       estudiantes: [],
    };

  } 

  BuscarEstudiantes() {
    return this.state.estudiantes.map(e => (
      <tr>   
        <th>{e.id}</th>
        <th>{e.nombre_apellido}</th> 
        <th>{e.dni}</th> 
        <th>{e.carreraId}</th>
      </tr>
    ))
  };

 render() {
    const { search } = this.state.dni;


    return (
        <div className= "texto">Dni(*)</div>
                <input 
                  className="input" 
                  type="number" 
                  name="dni" 
                  onChange={this.onChange}
                  value={this.state.dni} 
                />
  <ul>
    {search.map(task => <li>{search}</li>)}
  </ul>
	);

  }
}
export default Buscar;

