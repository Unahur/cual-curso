import React, { Component } from 'react';
class ListaMaterias extends Component{
    constructor(props){
        super(props)
        this.state = {
            materias: [
                "Matematica 2",
                "Programacion de objetos",
                "Bases de Datos",
                "Ingles 2",
                "Estructura de Datos",
                "Robotica",
                "Redes"
            ]
        }
    }
  render(){
    return (
        this.state.materias.map(materia => {
            return(
                <ul className="lista-materia">
                    <li onClick={() => this.props.setMateria(materia)}>{materia}</li>
                </ul>
            )
        })
    )
  }
}

export default ListaMaterias;