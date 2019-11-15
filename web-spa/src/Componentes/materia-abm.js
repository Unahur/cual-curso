import React, { Component } from 'react';
import ListaMaterias from './component-abm';
import Put from './component-put';
class Abm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: "",
            name: "",
            description: "",
            duration: "",
            totalHours: ""
        }//digamos que este es el estado del put, el componente-abm trae los elementos y en el componente-put se cambia y se envia por fetch.
    }
    handleChangeOnEdit (id, name, description, duration, totalHours) {
        this.setState({
            id: id,
            name: name,
            description: description,
            duration: duration,
            totalHours: totalHours
        })
        console.log(this.state)
    }//este metodo recibe los parametros cuando se activa el edit, para tenerlos listos para el put.
    //nota: sin esto, ocurriria un bug que haria que el componente no muestre los datos que uno esta modificando.
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
		            <div className="contenido" id="contenido" >
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
                                input={this.props.input}
                                index={this.props.index}
                                correlativas={this.props.correlativas}
                            />
                        </div>
                    </div>
                    <aside className="sidebar">
                        <div className="subtitulo-edit">Buscar Materia</div>
                        <input className="input input-edit" type="text" value={this.props.input} onChange={this.props.search}/>
                        {this.state.id !== "" && <Put
                            id={this.state.id}
                            name={this.state.name}
                            description={this.state.description}
                            duration={this.state.duration}
                            totalHours={this.state.totalHours}
                            handleChange={this.handleChange.bind(this)}
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