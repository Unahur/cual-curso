import React, { Component } from 'react';
import Lista from "./ListaMaterias.js"
import ListaFiltrada from "./ListaFiltrada"
class ListaMaterias extends Component {
    constructor(props){
        super(props);
        this.state = {
            materias: []
        }
    }
    onEdit(e){
        console.log(e)
        fetch(`http://localhost:3001/materia/${e}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.props.handleChange(data.id, data.name, data.description, data.duration, data.totalHours)
            });
    }//activa la edicion y le manda los datos a materia-abm para que luego componente-put los edite.
    handleGet(){
        fetch('http://localhost:3001/materia/', {
            method: 'GET'
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            console.log("----------------");
            this.setState({
                materias: data//se setea el array de datos en materias, para que luego las clases de Listas puedan renderearlo.
            })
        })
    }//con este metodo se traen los datos
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
    }//tanto en las 2 clases de lista, se trae la id, se borra el objeto y se recarga la pagina.
    render(){
        return(
            <div>
                {this.props.input === "" && <Lista
                    materias={this.state.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    handleGet={this.handleGet.bind(this)}
                />}
                {this.props.input !== "" && <ListaFiltrada
                    input={this.props.input}
                    materias={this.state.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    handleGet={this.handleGet.bind(this)}               
                />}
            </div>
        )
    }
}

export default ListaMaterias;