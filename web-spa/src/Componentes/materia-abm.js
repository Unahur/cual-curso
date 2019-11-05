import React, { Component } from 'react';
import ListaMaterias from './component-abm';
class Abm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: "",
            name: "",
            description: "",
            duration: "",
            totalHours: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.setId = this.setId.bind(this);
    }
    onEdit(id) {
        fetch(`http://localhost:3001/materia/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    duration: data.duration,
                    totalHours: data.totalHours
                })
            });
    }
    setId(id){
        this.setState({id})
        this.onEdit(this.state.id)
    }
    handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.handleEdit(this.state.id)
    }
    handleEdit(id) {
        const recargar = () => {
            window.location.reload();
        }
        const request = new Request(`http://localhost:3001/materia/${id}`,
            { method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                },
                    body: JSON.stringify(this.state)
            });
    
        fetch(request)
            .then(response => {
                if (response.status === 201) {
                   return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(response => {
                console.debug(response);
            }).catch(error => {
                console.error(error);
            }).then(recargar);
    }
    renderearEdit(){
        if(this.state.id === null){
            return(
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <br/>
                        <div className="texto texto-edit">Nombre de materia</div>
                        <input className="input input-edit" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <div className="texto texto-edit">Descripcion de materia</div>
                        <input className="input input-edit" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                        <div className= "texto texto-edit">Duracion</div>
                        <input className="input input-edit" type="number" name="duration" value={this.state.duration} onChange={this.handleChange}/>
                        <div className="texto texto-edit">Horas totales</div>
                        <input className="input input-edit" type="number" name="totalHours" value={this.state.totalHours} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <input className="buttom buttom-edit" type="submit" value="Editar"/>
                </form>
            )
        }
    }
    render(){
        return (
            <div>
                <div className="contenedor-titulo">
                    <div className="titulo">Materias</div>
                </div>
                <div className="contenedor-grid">
		            <div className="contenido" id="contenido" >
                        <div>
                            <ul className="col5">
                                <li>Materia</li>
                                <li>Descripcion</li>
                                <li>Duracion</li>
                                <li>Horas Totales</li>
                                <li>Opciones</li>
                            </ul>
                            <ListaMaterias/>
                        </div>
                    </div>
                    <aside className="sidebar">
                        <div className="subtitulo-edit">Buscar Materia</div>
                        <input className="input input-edit" type="text" id="Buscar"/>
                        {this.renderearEdit}
                    </aside>
		            <footer className="footer">
                    </footer>
                </div>
            </div>
        )
    }
}

export default Abm;