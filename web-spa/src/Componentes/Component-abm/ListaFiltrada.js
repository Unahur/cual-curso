import React, { Component } from 'react';
class ListaFiltrada extends Component {
    
    render(){
        let filtereList = this.props.materias.filter(data => {return data.name.toLowerCase().indexOf(this.props.input.toLowerCase()) !==-1
        || data.description.toLowerCase().indexOf(this.props.input.toLowerCase()) !==-1 || data.duration.toString().indexOf(this.props.input.toString()) !==-1 || data.totalHours.toString().indexOf(this.props.input.toString()) !==-1})
        //con esta clase, se busca filtrar la lista, asi que lo que se hace, es buscar en el index, poner todas las coincidencias en minusculas, asi son mas faciles de encontrar
        //y pasando los numeros a strings, ya que de otra forma el codigo no compilaria, en pocas palabras, el codigo busca una coincidencia en todos los campos.
        return (
            filtereList.map(data =>{
                return(
                    <ul className="col5-data">
                        <li><div className="texto-responsive">Materia: </div><div className="texto-responsive-ul">{data.name}</div></li>
                        <li><div className="texto-responsive">Descripcion: </div><div className="texto-responsive-ul">{data.description}</div></li>
                        <li><div className="texto-responsive">Duracion: </div><div className="texto-responsive-ul">{data.duration}</div></li>
                        <li><div className="texto-responsive">Horas Totales: </div><div className="texto-responsive-ul">{data.totalHours}</div></li>
                        <li>
                        <div className="texto-responsive">Opciones: </div>
                            <button className="buttom buttom-tabla" onClick={() => this.props.onEdit(data.id)}>editar</button>
                            <button className="buttom buttom-tabla" onClick={() => this.props.onDelete(data.id)}>eliminar</button> 
                        </li>
                    </ul>
                    )
                })
            )
    }
}
export default ListaFiltrada;