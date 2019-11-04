import React, { Component } from 'react';
class Materia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            duration: "",
            totalHours: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    vaciarFormulario(){
        this.setState({
            name: "",
            description: "",
            duration: "",
            totalHours: ""
        })
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
        this.handlePost()
    }
    handlePost(){
        const request = new Request('http://localhost:3001/materia',
            { method: 'POST', 
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
            });
        this.vaciarFormulario()
    }
    render() {
        return (
            <div>
                <div class="contenedor-titulo">
                    <div class="titulo">Creacion de materia</div>
                </div>
                <form action="" autoComplete="off" class="contenedor-grid contenedor-grid-abm" onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="contenido">
                        <div class="subtitulo">Datos de la materia</div>
                        <div class="texto">Nombre de materia(*)</div>
                        <input class="input" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <div class="texto">Descripcion de materia(*)</div>
                        <input class="input" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                        <div class= "texto">Duracion(*)</div>
                        <input class="input" type="number" name="duration" value={this.state.duration} onChange={this.handleChange}/>
                        <div class="texto">Horas totales(*)</div>
                        <input class="input" type="number" name="totalHours" value={this.state.totalHours} onChange={this.handleChange}/>
                    </div>
                    <footer class="footer">
                        <input class="buttom" type="submit" value="Aceptar"></input>
                    </footer>
                </form>
            </div>
        )
    }
}

export default Materia;