import React, { Component } from 'react';
import MateriaCreate from './Abm-materias/materia-create.js';
import MateriaAbm from './Abm-materias/materia-abm.js';
import MateriaHeader from './Abm-materias/header-component.js';
class Abm extends Component{
  constructor(props){
    super(props)
    this.state = {
      cambioRender: "crear",
      input: "",
      index: 0,
      mostrarCorrelativa: false
    }//este estado define que se va a renderizar, por defecto se asigno crear
  }
  cambioRender(render){
    this.setState({
      cambioRender: render
    })
  }//este metodo reemplaza el render.
  search(input){
    this.setState({input: input.target.value.substr(0,20)})
  }
  mostrarCorrelativa(){
    if(this.state.mostrarCorrelativa===false){
      this.setState({
        mostrarCorrelativa:true
      })
    }else{
      this.setState({
        mostrarCorrelativa:false
      })
    }
    console.log(this.mostrarCorrelativa)
  }
  render(){
    //basicamente en esos "if" de abajo se selecciona que se va a renderizar y se le manda un parametro
    // a Header, para que pueda cambiar que se va a renderizar, si la parte de crear materia o abm
    return (
      <div>
        <MateriaHeader
          cambioRender={this.cambioRender.bind(this)}
        />
        {this.state.cambioRender === "crear" && <MateriaCreate/>}
        {this.state.cambioRender === "materias" && <MateriaAbm 
          input={this.state.input}
          search={this.search.bind(this)}
          index={this.state.index}
          mostrarCorrelativa={this.mostrarCorrelativa.bind(this)}
          correlativas={this.state.mostrarCorrelativa}
        />}
      </div>
    )
  }
}

export default Abm;