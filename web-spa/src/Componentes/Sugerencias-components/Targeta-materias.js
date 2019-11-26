import React, { Component } from 'react';
class TargetaMaterias extends Component{

    render(){
        const inscripcion = this.props.materias.filter(materia=>{
            return materia.nombre.toLowerCase().indexOf(this.props.materia.toLowerCase()) !==-1
        })
        return (
            inscripcion.map(materia => {
                return(
                <div className="target">
                    <div className="subtitulo-edit">{materia.nombre}</div>
                        <div>Docente: {materia.docente}</div>
                        <div>Aula: {materia.aula}</div>
                        <div>Dia: {materia.Dia}</div>
                        <div>Horario: {materia.Horario}</div>
                    <div>Horas {materia.HorasTotales} 
                        {materia.inscripta!==true && <input className="buttom buttom-target" type="submit" value="Inscribirse" onClick={()=>{this.props.inscribirMateria(materia)}}/>} 
                        {materia.inscripta!==false && <input className="buttom buttom-target" type="submit" value="Dar de baja" onClick={() => {this.props.darDeBaja(materia)}}/>}
                    </div>
                </div>
                )
            })
        )
    }
}

export default TargetaMaterias;