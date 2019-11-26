import React, { Component } from 'react';
class Lista extends Component {
    render(){
        //Nota: no tuve una forma tan elegante de cargar los datos apenas se carga la pagina, asi que use ese evento onload.
        //si no hay datos, trata de traerlos, sino se queda en "cargando materia..."
        //en el caso de que haya almenos una materia, la renderiza, con todos sus atributos y las opciones.
        if (this.props.materias.length > 0) {
            return (
                this.props.materias.map(data =>{
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
        } else {
            return <p onLoad={() => this.props.componentDidMount()}>Cargando Materia...</p>
        }
    }
}
export default Lista;