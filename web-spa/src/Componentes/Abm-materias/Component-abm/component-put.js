import React, { Component } from 'react';
import Correlativa from './component-correlativa';
class Put extends Component {
    constructor(props){
        super(props)
        this.state={
            idMaterias: [],
            count: 0
        }
    }
    handleSubmit(event){
        event.preventDefault()
        this.handleEdit(this.props.id)
        this.props.vaciarFormulario()
    }//Se evita el evento por default y se manda los datos editados con la ID del props(el estado de materia-abm)
    
    handleRefresh(){
        this.props.changePaginaActiva(0);
        fetch(`http://localhost:3001/materia`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.props.handleGet(data);    
            })
    }

    handleEdit(id) {
        fetch(`http://localhost:3001/materia/${id}`,
            { method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.props)
            })
            .then(response => {
                if (response.status === 200) {
                   return response;
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                console.debug(response);
            }).catch(error => {
                console.error(error);
            }).then(()=> {this.handleRefresh()})
    }
    handleIncrement(){
        this.setState({
            count: this.state.count+1
        })
    }
    handleDecrement(){
        this.setState({
            count: this.state.count-1
        })
    }
    
    render(){
        //aca se muestra el formulario de edicion, se mandan los atributos del props(materia-abm), los cuales van a ser editados.
        return(
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <br/>
                <div className="texto texto-edit">Nombre de materia</div>
                <input className="input input-edit" type="text" name="name" value={this.props.name} onChange={this.props.handleChange}/>
                <div className="texto texto-edit">Descripcion de materia</div>
                <input className="input input-edit" type="text" name="description" value={this.props.description} onChange={this.props.handleChange}/>
                <div className= "texto texto-edit">Duracion</div>
                <input className="input input-edit" type="number" name="duration" value={this.props.duration} onChange={this.props.handleChange}/>
                <div className="texto texto-edit">Horas totales</div>
                <input className="input input-edit" type="number" name="totalHours" value={this.props.totalHours} onChange={this.props.handleChange}/>
                <br/>
                <br/>
                <Correlativa
                    idCorrelativas={this.state.idMaterias}
                    count={this.state.count}
                    handleIncrement={this.handleIncrement.bind(this)}
                    handleDecrement={this.handleDecrement.bind(this)}
                />
                <input className="buttom buttom-edit" type="submit" value="Editar"/>
            </form>
        )
    }
}
export default Put;