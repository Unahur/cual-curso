import React, { Component } from 'react';
import Lista from "./ListaMaterias.js";
import ListaFiltrada from "./ListaFiltrada.js"
import Nav from "./componente-nav.js";
class ComponentAbm extends Component {

    onEdit(id){
        fetch(`http://localhost:3001/materia/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.props.handleChange(data)
            });
    }//activa la edicion y le manda los datos a materia-abm para que luego componente-put los edite.
    componentDidMount(){
        this.props.changePaginaActiva(0);
        fetch(`http://localhost:3001/materia`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.props.handleGet(data);    
            })
    }//con este metodo se traen los datos
    onDelete(id) {
        if (window.confirm('Seguro que quiere eliminar esta Materia? ')) {
            fetch(`http://localhost:3001/materia/${id}`, {
                method: 'DELETE'
            })
            .then(()=>{this.componentDidMount()});
        }
    }//tanto en las 2 clases de lista, se trae la id, se borra el objeto y se recarga la pagina.
    cambiarPagina(index){
        if (index != this.props.paginasEnTotal && index >= 0) {
            this.props.changePaginaActiva(index);
          console.log(index);
        fetch(`http://localhost:3001/materia/pagina/${index}`)
            .then(res => res.json())
            .then(data => {
                this.props.handleGet(data); 
            })
        }
    };
    filtrarPorPagina(index, input){
        if (index != this.props.paginasEnTotal && index >= 0) {
            this.props.changePaginaActiva(index);
            console.log(index);
            fetch(`http://localhost:3001/materia/pagina/${index}/${input}`)
                .then(res => res.json())
                .then(data => {
                    this.props.handleGet(data);   
                })
        }
    }
    render(){
        return(
            <div>
                {this.props.input === "" && <Lista
                    materias={this.props.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                />}
                {this.props.input !== "" && <ListaFiltrada
                    materias={this.props.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    input={this.props.input}
                />}
                <Nav
                    paginaActiva={this.props.paginaActiva}
                    paginasEnTotal={this.props.paginasEnTotal}
                    cambiarPagina={this.cambiarPagina.bind(this)}
                />
            </div>
        )
    }
}

export default ComponentAbm;