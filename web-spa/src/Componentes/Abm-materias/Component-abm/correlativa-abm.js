import React, { Component } from 'react';
import ComponentCorrelativaABM from './Component-correlativa-abm.js';
class CorrelativaABM extends Component {
    render(){
        const materiasConCorrelativa = this.props.materias.filter(materia => {return materia.correlativas.length>0})
        return(
            materiasConCorrelativa.map(materia => {
                return(
                    <div className="target">
                        <div className="subtitulo-edit">{materia.name}</div>
                        {materia.correlativas.map(correlativa=>{ 
                            return(
                                <ComponentCorrelativaABM
                                    correlativa={correlativa}
                                    materias={this.props.materias}
                                    handleGet={this.props.handleGet}
                                    changePaginaActiva={this.props.changePaginaActiva}
                                />
                            )})
                        }
                    </div>
                )
            })
        )
    }
}
export default CorrelativaABM;