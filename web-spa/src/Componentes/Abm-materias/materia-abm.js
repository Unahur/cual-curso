import React, { Component } from 'react';
import ListaMaterias from './Component-abm/component-abm';
import Put from './Component-abm/component-put';
class Abm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: "",
            name: "",
            description: "",
            duration: "",
            totalHours: "",
            materias: [],
            paginasEnTotal: 0,
            paginaActiva: 0
        }//digamos que este es el estado del put, el componente-abm trae los elementos y en el componente-put se cambia y se envia por fetch.
    }

    handleChangeOnEdit (json) {
        this.setState({
            id: json.id,
            name: json.name,
            description: json.description,
            duration: json.duration,
            totalHours: json.totalHours
        })
        console.log(this.state)
    }//este metodo recibe los parametros cuando se activa el edit, para tenerlos listos para el put.
    //nota: sin esto, ocurriria un bug que haria que el componente no muestre los datos que uno esta modificando.
    handleGet(json){
        this.setState({
            materias: json[0],
            paginasEnTotal: json[1].paginas
        })
    }
    paginaActiva(index){
        this.setState({
            paginaActiva: index
        })
    }
    vaciarFormulario(){
        this.setState({
            id: "",
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
    }//este metodo se envia al put para que el usuario pueda modificar los valores del estado, y asi mandarlo por fetch.
    render(){
        //aca se envia el input y el metodo para activar la edicion y modificar el estado de esta clase.
        //Nota: eso se hace en ListaMaterias.
        //Si la ID esta como "", el componente-put se oculta, hasta que la id contenga un numero.
        //Nota: Al put se le envian los parametros del estado y su respectivo metodo para modificarlo.
        return (
            <div>
                <div className="contenedor-titulo">
                    <div className="titulo">Materias</div>
                </div>
                <div className="contenedor-grid">
		            <div className="contenido">
                        <div>
                            <ul className="col5">
                                <li>Materia</li>
                                <li>Descripcion</li>
                                <li>Duracion</li>
                                <li>Horas Totales</li>
                                <li>Opciones</li>
                            </ul>
                            <ListaMaterias
                                handleChange={this.handleChangeOnEdit.bind(this)}
                                materias={this.state.materias}
                                paginasEnTotal={this.state.paginasEnTotal}
                                input={this.props.input}
                                handleGet={this.handleGet.bind(this)}
                                correlativas={this.props.correlativas}
                                changePaginaActiva={this.paginaActiva.bind(this)}
                                paginaActiva={this.state.paginaActiva}
                            />
                        </div>
                    </div>
                    <aside className="sidebar">
                        <div className="subtitulo-edit">Buscar Materia</div>
                        <input className="input input-edit" type="text" value={this.props.input} onChange={this.props.search}/>
                        {this.state.id && <Put
                            id={this.state.id}
                            name={this.state.name}
                            description={this.state.description}
                            duration={this.state.duration}
                            totalHours={this.state.totalHours}
                            handleChange={this.handleChange.bind(this)}
                            handleGet={this.handleGet.bind(this)}
                            changePaginaActiva={this.paginaActiva.bind(this)}
                            vaciarFormulario={this.vaciarFormulario.bind(this)}
                        />}
                    </aside>
		            <footer className="footer">
                        <button className="buttom" onClick={()=>{this.props.mostrarCorrelativa()}}>Mostrar/Correlativa</button>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Abm;