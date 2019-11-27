import React, { Component } from 'react';
import ListaMaterias from './component-contenido-sugerencias/Lista-Materias.js';
import Sugerencia from './component-contenido-sugerencias/Sugerencia-materia.js';
import TargetaMaterias from './component-contenido-sugerencias/Targeta-materias.js';
import MateriasInscriptas from './component-contenido-sugerencias/Materias-inscriptas.js';
import DiasCursada from './component-contenido-sugerencias/DiasCursada.js';

class Contenido extends Component {
    constructor(props){
        super(props)
        this.state = {
            materia:"",
            materias: [
                {nombre:"Matematica 2", docente: "Rogelio Buendia", Aula:"Origone 202", Dia:"Miercoles", Horario:"18:00 a 22:00", HorasTotales: "120", inscripta: false},
                {nombre:"Matematica 2", docente: "Rogelio Buendia", Aula:"Origone 202", Dia:"Miercoles",Horario:"8:00 a 12:00", HorasTotales: "120", inscripta: false},
                {nombre:"Programacion de objetos", docente: "Rogelio Buendia", Dia:"Martes y Jueves", Aula:"Origone 202", Horario:"18:00 a 22:00", HorasTotales: "120", inscripta: false},
                {nombre:"Programacion de objetos", docente: "Rogelio Buendia", Dia:"Martes y Jueves", Aula:"Origone 202", Horario:"8:00 a 12:00", HorasTotales: "120", inscripta: false},
                {nombre:"Redes", docente: "Rogelio Buendia", Aula:"Origone 202", Dia:"Lunes y Viernes", Horario:"18:00 a 22:00", HorasTotales: "120", inscripta: false},
                {nombre:"Redes", docente: "Rogelio Buendia", Aula:"Origone 202", Dia:"Lunes y Viernes", Horario:"8:00 a 12:00", HorasTotales: "120", inscripta: false},
                {nombre:"Ingles 2", docente: "Rogelio Buendia", Dia:"Miercoles", Aula:"Origone 202", Horario:"16:00 a 18:00", HorasTotales: "120", inscripta: false},
                {nombre:"Ingles 2", docente: "Rogelio Buendia", Dia:"Miercoles", Aula:"Origone 202", Horario:"8:00 a 10:00", HorasTotales: "120", inscripta: false},
                {nombre:"Bases de datos", docente: "Rogelio Buendia", Dia:"Miercoles", Aula:"Origone 202", Horario:"18:00 a 22:00", HorasTotales: "120", inscripta: false},
                {nombre:"Bases de datos", docente: "Rogelio Buendia", Dia:"Miercoles", Aula:"Origone 202", Horario:"8:00 a 12:00", HorasTotales: "120", inscripta: false},
                {nombre:"Estructura de datos", docente: "Rogelio Buendia", Dia:"Lunes y Viernes", Aula:"Origone 202", Horario:"18:00 a 22:00", HorasTotales: "120", inscripta: false},
                {nombre:"Estructura de datos", docente: "Rogelio Buendia", Dia:"Lunes y Viernes", Aula:"Origone 202", Horario:"8:00 a 12:00", HorasTotales: "120", inscripta: false},
                {nombre:"Robotica", docente: "Rogelio Buendia", Aula:"Origone 202", Dia:"Martes y Jueves", Horario:"18:00 a 22:00", HorasTotales: "120", inscripta: false},
                {nombre:"Robotica", docente: "Rogelio Buendia", Aula:"Origone 202", Dia:"Martes y Jueves", Horario:"8:00 a 12:00", HorasTotales: "120", inscripta: false}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }
    inscribirMateria(materia){
        if(this.validacion(materia)){
            materia.inscripta=true
            this.setState({materia:""})
        }
    }
    validacion(materia){
        if(this.state.materias.find(m=>{return m.inscripta && m.nombre === materia.nombre})){
            alert("Materia ya inscripta")
            return false
        }else if(this.state.materias.find(m=>{return m.inscripta && m.Dia === materia.Dia && m.Horario === materia.Horario})){
            alert("Superposicion de dias")
            return false
        }else{
            return true
        }
    }
    darDeBaja(materia){
        materia.inscripta=false
        this.setState({materia:""})
    }
    setMateria(materia){
        console.log(materia)
        this.setState({materia})
    }
    handleChange(e){
        this.setState({
          materia: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="contenedor-titulo">
                    <div className="titulo">Inscripcion de Materias</div>
                </div>
                <div className="contenedor-grid-sugerencias">
		            <div className="contenido">
                        {this.state.materia!== "" && <TargetaMaterias
                            materia={this.state.materia}
                            materias={this.state.materias}
                            inscribirMateria={this.inscribirMateria.bind(this)}
                            darDeBaja={this.darDeBaja.bind(this)}
                        />}
                        {this.state.materia=== "" && <MateriasInscriptas
                            materias={this.state.materias}
                            inscribirMateria={this.inscribirMateria.bind(this)}
                            darDeBaja={this.darDeBaja.bind(this)}
                        />}
                    </div>
                    <aside className="sidebarSugerencia">
                        <label className="subtitulo-edit">Materias</label>
                        <div>
                            <ListaMaterias
                                setMateria={this.setMateria.bind(this)}
                            />
                        </div>
                    </aside>
                    <aside className="cuatrimestre">
                        <DiasCursada
                            materias={this.state.materias}
                        />
                    </aside>
                    <aside className="sidebar">
                        <label className="subtitulo-edit">Materias Sugeridas</label>
                        <div className="custom-select">
                            <select value={this.state.materia} onChange={this.handleChange}>
                                <Sugerencia/>
                            </select>
                        </div>
                    </aside>
		            <footer className="footer">
                        <input className="buttom" type="submit" value="Aceptar"/>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Contenido;