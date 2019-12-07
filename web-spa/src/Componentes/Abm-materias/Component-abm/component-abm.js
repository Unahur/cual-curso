import React, { Component } from 'react';
import Lista from "./ListaMaterias.js";
import ListaFiltrada from "./ListaFiltrada.js"
import Nav from "./componente-nav.js";
class ComponentAbm extends Component {
    constructor(props){
        super(props);
        this.state = {
            materias: [],
            paginaActiva: 0,
            paginasEnTotal: 0
        }
    }
    onEdit(id){
        console.log(id)
        fetch(`http://localhost:3001/materia/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.props.handleChange(data.id, data.name, data.description, data.duration, data.totalHours)
            });
    }//activa la edicion y le manda los datos a materia-abm para que luego componente-put los edite.
    componentDidMount(){
        fetch(`http://localhost:3001/materia`, {
            method: 'GET'
        })
          .then(response => response.json())
          .then(data => {
            this.setState({
                materias: data[0],//se setea el array de datos en materias, para que luego las clases de Listas puedan renderearlo.
                paginasEnTotal: data[1].paginas
            })
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
        if (index != this.state.paginasEnTotal && index >= 0) {
          this.setState({ paginaActiva: index });
          console.log(index);
        fetch(`http://localhost:3001/materia/pagina/${index}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    materias: data[0],
                    paginasEnTotal: data[1].paginas
                });
            })
        }
    };
    filtrarPorPagina(index, input){
        if (index != this.props.paginasEnTotal && index >= 0) {
            this.setState({ paginaActiva: index });
            console.log(index);
            fetch(`http://localhost:3001/materia/pagina/${index}/${input}`)
                .then(res => res.json())
                .then(data => {
                this.setState({
                    materias: data[0],
                    paginasEnTotal: data[1].paginas
                });
            })
        }
    }
    render(){
        return(
            <div>
                {this.props.input === "" && <Lista
                    materias={this.state.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    componentDidMount={this.componentDidMount.bind(this)}
                    index={this.props.index}
                />}
                {this.props.input !== "" && <ListaFiltrada
                    materias={this.state.materias}
                    onDelete={this.onDelete.bind(this)}
                    onEdit={this.onEdit.bind(this)}
                    input={this.props.input}
                    index={this.props.index}
                />}
                <Nav
                    paginaActiva={this.state.paginaActiva}
                    paginasEnTotal={this.state.paginasEnTotal}
                    cambiarPagina={this.cambiarPagina.bind(this)}
                    index={this.props.index}
                />
            </div>
        )
    }
}

export default ComponentAbm;