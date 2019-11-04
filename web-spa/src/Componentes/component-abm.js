import React, { Component } from 'react';
class ListaMaterias extends Component {
    constructor(props){
        super(props);
        this.state = {
            materias: []
        }
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
    onEdit(id) {
        fetch(`http://localhost:3001/materia/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }
    
    onDelete(id) {
        if (window.confirm('Seguro que quiere eliminar esta Materia? ')) {
            fetch(`http://localhost:3001/materia/${id}`, {
                method: 'DELETE'
            });
        }
    }
    render(){
        if (this.state.materias.length > 0) {
            return (
                this.state.materias.map(data =>{
                    return(
                        <ul className="col5">
                            <li>{data.name}</li>
                            <li>{data.description}</li>
                            <li>{data.duratio}</li>
                            <li>{data.totalHours}</li>
                            <li>
                                <button className="buttom buttom-tabla" onClick={this.onEdit(data.id)}>editar</button>
                                <button className="buttom buttom-tabla" onClick={this.onDelete(data.id)}>eliminar</button>
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