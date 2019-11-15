import React, { Component } from 'react';
import Lista from "./ListaMaterias.js"
import ListaFiltrada from "./ListaFiltrada"
class ListaMaterias extends Component {
    constructor(props){
        super(props);
        this.state = {
            materias: [],
            paginaActiva: 0,
            paginasEnTotal: 0
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
    handleGet(index){
        fetch(`http://localhost:3001/materia/pagina/${index}`, {
            method: 'GET'
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            console.log("----------------");
            this.setState({
                materias: data[0],//se setea el array de datos en materias, para que luego las clases de Listas puedan renderearlo.
                paginasEnTotal: Math.ceil(data[1].paginas)
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
                {(this.props.input === "" && this.props.correlativas === false) && <Lista
                    materias={this.state.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    handleGet={this.handleGet.bind(this)}
                    index={this.props.index}
                />}
                {(this.props.input !== "" && this.props.correlativas === false) && <ListaFiltrada
                    input={this.props.input}
                    materias={this.state.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    handleGet={this.handleGet.bind(this)}               
                />}
                {this.props.correlativas && <h1>correlativas</h1>}

            </div>
        )
    }
}

export default ListaMaterias;