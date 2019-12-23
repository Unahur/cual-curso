import React, { Component } from 'react';
class CorrelativaOptions extends Component {
    constructor(props){
        super(props)
        this.state = {
            idMateria: "",
            count: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            idMateria: e.target.value
        })
        this.setCorrelativa(e.target.value)
    }
    setCorrelativa(correlativa){
        if(!this.props.idCorrelativas.includes(correlativa) && this.state.count < 1){
            this.props.idCorrelativas.push(correlativa)
            console.log(this.props.idCorrelativas)
            this.setState({
                count: this.state.count+1
            })
        }
    }
    render(){
        return (
            <div className={`custom-select ${this.props.put ? 'custom-select-margin-cero': 'custom-select-margin'}`}>
                <select value={this.state.idMateria} onChange={this.handleChange}>
                    <option></option>
                    {this.props.correlativa.map(materia => {
                        let idMateria=materia.id;
                        return(
                            <option value={idMateria}>{materia.name}</option>
                        )
                    })}
                </select>
            </div>
        )
    }
}
export default CorrelativaOptions;