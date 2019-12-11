import React, { Component } from 'react';
class ComponentCorrelativaABM extends Component {
    constructor(props){
        super(props)
        this.state={
            correlativaNombre: "",
            idCorrelativa: "",
            modoEdicion: false
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3001/materia/${this.props.correlativa.id_materia_correlativa}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    correlativaNombre: data.name
                })
            })
    }
    handleGet(){
        this.props.changePaginaActiva(0)
        fetch(`http://localhost:3001/materia`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                this.props.handleGet(data)
                this.componentDidMount()
            })
    }
    onEdit(id){
        this.setState({
            idCorrelativa: id,
            modoEdicion: true
        })
    }
    handleEdit(correlativa){
        correlativa.id_materia_correlativa = this.state.idCorrelativa;
        fetch(`http://localhost:3001/correlativa/${correlativa.id}`,
        { method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(correlativa)
        })
        .then(() =>{
            this.handleGet()
            this.setState({
                modoEdicion:false
            })
            })
    }
    handleChange(e){
        this.setState({
            idCorrelativa: e.target.value
        })
    }
    onDelete(id) {
        if (window.confirm('Seguro que quiere eliminar esta Correlatividad? ')) {
            fetch(`http://localhost:3001/correlativa/${id}`, {
                method: 'DELETE'
            })
        }
    }
    render(){
        return(
            <div>
                {!this.state.modoEdicion &&
                    <div>Correlativa: {this.state.correlativaNombre}
                        <input className="buttom buttom-target" type="submit" value="Editar" onClick={()=>{this.onEdit(this.props.correlativa.id_materia_correlativa)}}/> 
                        <input className="buttom buttom-target" type="submit" value="Eliminar" onClick={()=>{this.onDelete(this.props.correlativa.id)}}/>
                    </div>
                }
                {this.state.modoEdicion &&
                    <div>
                        <div className="custom-select" style={{display: "inline-block"}}>
                            <select value={this.state.idCorrelativa} onChange={this.handleChange.bind(this)}>
                                {this.props.materias.map(materia =>{
                                    return(
                                        <option value={materia.id}>{materia.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <input className="buttom buttom-target" type="submit" value="Confirmar" onClick={()=>{this.handleEdit(this.props.correlativa)}}/> 
                        <input className="buttom buttom-target" type="submit" value="Eliminar" onClick={()=>{this.onDelete(this.props.correlativa.id)}}/>
                    </div>
                }
            </div>
        )
    }
}
export default ComponentCorrelativaABM;