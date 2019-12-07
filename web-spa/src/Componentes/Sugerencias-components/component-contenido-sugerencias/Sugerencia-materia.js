import React, { Component } from 'react';
class SugerenciaMaterias extends Component{
    constructor(props){
        super(props)
        this.state = {
            sugeridas: [
                "",
                "Programacion de objetos",
                "Bases de Datos",
                "Ingles 2",
                "Estructura de Datos"
            ]
        }
    }
    render(){
        return (
            this.state.sugeridas.map(materia => {
                return(
                    <option value={materia}>{materia}</option>
                )
            })
        )
    }
}

export default SugerenciaMaterias;