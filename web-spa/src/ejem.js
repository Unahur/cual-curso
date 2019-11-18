import React, { Component } from 'react';
class Materia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            duration: "",
            totalHours: ""
        }//aca se especifican los parametros del objetos que van a ser enviados al post
        this.handleChange = this.handleChange.bind(this);//con esto se permite modificar los valores(ya que sin esto no se podria escribir en los inputs)
    }
    vaciarFormulario(){
        this.setState({
            name: "",
            description: "",
            duration: "",
            totalHours: ""
        })//este metodo vacia el formulario para hacer el siguiente post
    }
    handleChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value
        })
    }//en este metodo se cambian los valores y se asigna el campo y el valor, para no tener que hacer un metodo para cada input.
    handleSubmit(event){
        event.preventDefault()
        this.handlePost()
    }//este evento se encarga de hacer el post
    handlePost(){
        const request = new Request('http://localhost:3001/materia',
            { method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)//aca se envia el estado en forma de json
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
                <div className="contenedor-titulo">
                    <div className="titulo">Creacion de materia</div>
                </div>
                <form action="" autoComplete="off" className="contenedor-grid contenedor-grid-abm" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="contenido">
                        <div className="subtitulo">Datos de la materia</div>
                        <div className="texto">Nombre de materia(*)</div>
                        <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <div className="texto">Descripcion de materia(*)</div>
                        <input className="input" type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                        <div className= "texto">Duracion(*)</div>
                        <input className="input" type="number" name="duration" value={this.state.duration} onChange={this.handleChange}/>
                        <div className="texto">Horas totales(*)</div>
                        <input className="input" type="number" name="totalHours" value={this.state.totalHours} onChange={this.handleChange}/>
                    </div>
                    <footer className="footer">
                        <input className="buttom" type="submit" value="Aceptar"/>
                    </footer>
                </form>
            </div>
        )
    }
}

export default Materia;