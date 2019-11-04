import React, { Component } from 'react';
import ListaMaterias from './component-abm';
class Abm extends Component {
   /*renderMaterias(){
        const materiaList =this.materias.map( data => {
            return(
                <ul className="col5">
                    <li>{data.name}</li>
                    <li>{data.description}</li>
                    <li>{data.duratio}</li>
                    <li>{data.totalHours}</li>
                </ul>
            )}
        )
    }*/
                    /*<li>
                        <buttom className="buttom buttom-tabla" onclick="onEdit(materia.id)">Editar</buttom>
                        <buttom className="buttom buttom-tabla" onclick="onDelete(materia.id)">Eliminar</buttom>
                    </li>*/
    render(){
        return (
            <div>
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
                    </aside>
		            <footer className="footer">
                    </footer>
                </div>
            </div>
        )
    }
}

export default Abm;