import React, { Component } from 'react';
class ListaCorrelativas extends Component {
    constructor(props){
        super(props)
        this.state = {
            correlativa = ""
        }
    }

    handleGet(id){
        fetch(`http://localhost:3001/correlativa/${id}`, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => 
            this.setState({
                correlativa=data
            })
        )
    }
    
    render(){
        if (this.props.materias.length > 0) {
            return (
                this.props.materias.map(data =>{
                    return(
                        <ul className="col5-data">
                            <li><div className="texto-responsive">Materia: </div><div className="texto-responsive-ul">{data.name}</div></li>
                            <li><div className="texto-responsive">Correlativa: </div><div className="texto-responsive-ul">{data.correlativa_id}</div></li>
                            <li>
                            <div className="texto-responsive">Opciones: </div>
                                <button className="buttom buttom-tabla" onClick={() => this.props.onEdit(data.id)}>editar</button>
                                <button className="buttom buttom-tabla" onClick={() => this.props.onDelete(data.id)}>eliminar</button> 
                            </li>
                        </ul>
                    )
                })
            )
        } else {
            return <p onLoad={this.props.handleGet(this.props.index)}>Cargando Materia...</p>
        }
    }
}
export default ListaCorrelativas;