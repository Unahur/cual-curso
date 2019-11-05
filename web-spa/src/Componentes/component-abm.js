import React, { Component } from 'react';
import Abm from './materia-abm';
class ListaMaterias extends Component {
    constructor(props){
        super(props);
        this.state = {
            materias: [],
            input: ""
        }
    }
    onEdit(e){
        console.log(e)
        this.props.id(e)
    }
    handleGet(){
        fetch('http://localhost:3001/materia/', {
            method: 'GET'
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            console.log("----------------");
            this.setState({
                materias: data
            })
        })
    }
    onDelete(id) {
        const recargar = () => {
            window.location.reload();
        }
        if (window.confirm('Seguro que quiere eliminar esta Materia? ')) {
            fetch(`http://localhost:3001/materia/${id}`, {
                method: 'DELETE'
            })
            .then(recargar);
        }
    }
    render(){
        if (this.state.materias.length > 0) {
            return (
                this.state.materias.map(data =>{
                    return(
                        <ul className="col5-data">
                            <li><div className="texto-responsive">Materia: </div><div className="texto-responsive-ul">{data.name}</div></li>
                            <li><div className="texto-responsive">Descripcion: </div><div className="texto-responsive-ul">{data.description}</div></li>
                            <li><div className="texto-responsive">Duracion: </div><div className="texto-responsive-ul">{data.duration}</div></li>
                            <li><div className="texto-responsive">Horas Totales: </div><div className="texto-responsive-ul">{data.totalHours}</div></li>
                            <li>
                            <div className="texto-responsive">Opciones: </div>
                                <button className="buttom buttom-tabla" onClick={() => this.onEdit(data.id)}>editar</button>
                                <button className="buttom buttom-tabla" onClick={() => this.onDelete(data.id)}>eliminar</button> 
                            </li>
                        </ul>
                    )
                })
            )
        } else {
            return <p onLoad={this.handleGet()}>Cargando Materia...</p>
        }
    }
}

export default ListaMaterias;