import React, { Component } from 'react';
class MateriasInscriptas extends Component{

    render(){
        const materiasInscriptas = this.props.materias.filter(materia=> {return materia.inscripta})
        return (
            materiasInscriptas.map(materia => {
                return(
                    <div className="target">
                        <div className="subtitulo-edit">{materia.nombre}</div>
                            <div>Docente: {materia.docente}</div>
                            <div>Aula: {materia.Aula}</div>
                            <div>Dia: {materia.Dia}</div>
                            <div>Horario: {materia.Horario}</div>
                        <div>Horas {materia.HorasTotales} 
                            {materia.inscripta!==true && <input className="buttom buttom-target" type="submit" value="Inscribirse" onClick={()=>{this.props.inscribirMateria(materia)}}/>} 
                            {materia.inscripta && <input className="buttom buttom-target" type="submit" value="Dar de baja" onClick={() => {this.props.darDeBaja(materia)}}/>}
                        </div>
                    </div>
                )
            })
        )
    }  
}

export default MateriasInscriptas;