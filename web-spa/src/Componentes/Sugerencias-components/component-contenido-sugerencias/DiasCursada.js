import React, { Component } from 'react';
class DiasCursada extends Component{
    render(){
        const materiasInscriptas = this.props.materias.filter(materia => {return materia.inscripta});
        const materiasLunes = materiasInscriptas.find(materia => {return materia.Dia==="Lunes y Viernes" && materia.Horario==="8:00 a 12:00"});
        const materiasMartes = materiasInscriptas.find(materia => {return materia.Dia==="Martes y Jueves" && materia.Horario==="8:00 a 12:00"});
        const materiasMiercoles = materiasInscriptas.find(materia => {return materia.Dia==="Miercoles" && (materia.Horario==="8:00 a 12:00" || materia.Horario==="8:00 a 10:00")});
        const materiasMiercolesT = materiasInscriptas.find(materia => {return materia.Dia==="Miercoles" && materia.Horario==="16:00 a 18:00"});
        const materiasLunesN = materiasInscriptas.find(materia => {return materia.Dia==="Lunes y Viernes" && materia.Horario==="18:00 a 22:00"});
        const materiasMartesN = materiasInscriptas.find(materia => {return materia.Dia==="Martes y Jueves" && materia.Horario==="18:00 a 22:00"});
        const materiasMiercolesN = materiasInscriptas.find(materia => {return materia.Dia==="Miercoles" && materia.Horario==="18:00 a 22:00"});
        //{materiasLunes && <td style={{background:"red"}}></td>}
        return (
            <div>
                <table className="cursada">
                    <thead>
                        <tr>
                            <th></th>
                                <th>lu</th>
                                <th>ma</th>
                                <th>mi</th>
                                <th>ju</th>
                                <th>vi</th>
                                <th>sa</th>
                                <th>do</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8:00 a 12:00</td>
                                {materiasLunes && <td style={{background:"#FB493D"}}></td>}
                                {!materiasLunes &&<td></td>}
                                {materiasMartes && <td style={{background:"#0088FF"}}></td>}
                                {!materiasMartes &&<td></td>}
                                {materiasMiercoles && <td style={{background:"#FB6C3D"}}></td>}
                                {!materiasMiercoles &&<td></td>}
                                {materiasMartes && <td style={{background:"#0088FF"}}></td>}
                                {!materiasMartes &&<td></td>}
                                {materiasLunes && <td style={{background:"#FB493D"}}></td>}
                                {!materiasLunes &&<td></td>}
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>12:00 a 18:00</td>
                                <td></td>
                                <td></td>
                                {materiasMiercolesT && <td style={{background:"#FFFA00"}}></td>}
                                {!materiasMiercolesT &&<td></td>}
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>18:00 a 22:00</td>
                                {materiasLunesN && <td style={{background:"#FF6200"}}></td>}
                                {!materiasLunesN &&<td></td>}
                                {materiasMartesN && <td style={{background:"#00C6FF"}}></td>}
                                {!materiasMartesN &&<td></td>}
                                {materiasMiercolesN && <td style={{background:"#FF8F00"}}></td>}
                                {!materiasMiercolesN &&<td></td>}
                                {materiasMartesN && <td style={{background:"#00C6FF"}}></td>}
                                {!materiasMartesN &&<td></td>}
                                {materiasLunesN && <td style={{background:"#FF6200"}}></td>}
                                {!materiasLunesN &&<td></td>}
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="listaCursada">
                        {materiasInscriptas.map(materias => {
                            return(
                                <div>
                                    {(materias.Dia==="Lunes y Viernes" && materias.Horario==="8:00 a 12:00") && <li style={{"--color-box":"#FB493D"}}>{materias.nombre}</li>}
                                    {(materias.Dia==="Martes y Jueves" && materias.Horario==="8:00 a 12:00") && <li style={{"--color-box":"#0088FF"}}>{materias.nombre}</li>}
                                    {(materias.Dia==="Miercoles" && (materias.Horario==="8:00 a 12:00" || materias.Horario==="8:00 a 10:00")) && <li style={{"--color-box":"#FB6C3D"}}>{materias.nombre}</li>}
                                    {(materias.Dia==="Miercoles" && materias.Horario==="16:00 a 18:00") && <li style={{"--color-box":"#FFFA00"}}>{materias.nombre}</li>}
                                    {(materias.Dia==="Lunes y Viernes" && materias.Horario==="18:00 a 22:00") && <li style={{"--color-box":"#FF6200"}}>{materias.nombre}</li>}
                                    {(materias.Dia==="Martes y Jueves" && materias.Horario==="18:00 a 22:00") && <li style={{"--color-box":"#00C6FF"}}>{materias.nombre}</li>}
                                    {(materias.Dia==="Miercoles" && materias.Horario==="18:00 a 22:00") && <li style={{"--color-box":"#FF8F00"}}>{materias.nombre}</li>}
                                </div>
                            )
                        })}
                    </ul>
                </div>
                )
            }         
}

export default DiasCursada;