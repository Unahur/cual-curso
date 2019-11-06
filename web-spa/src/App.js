import React, { Component } from 'react';
import './App.css';
import Materia from './Componentes/materia-create.js';
import Abm from './Componentes/materia-abm.js';
import Header from './Componentes/header-component.js';
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cambioRender: "crear",
      input: ""
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
  render(){
    //basicamente en esos "if" de abajo se selecciona que se va a renderizar y se le manda un parametro
    // a Header, para que pueda cambiar que se va a renderizar, si la parte de crear materia o abm
    return (
      <div>
        <Header
          cambioRender={this.cambioRender.bind(this)}
        />
        {this.state.cambioRender === "crear" && <Materia/>}
        {this.state.cambioRender === "materias" && <Abm 
          input={this.state.input}
          search={this.search.bind(this)}
        />}
      </div>
      )
  }
}

export default App;
