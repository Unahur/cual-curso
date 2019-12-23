import React, { Component } from 'react';
import CorrelativaOptions from './correlativa';
class Correlativa extends Component {
    constructor(props){
        super(props);
        this.state = {
            correlativa: [],
            paginasEnTotal: ""
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3001/materia`, {
            method: 'GET'
        })
          .then(response => response.json())
          .then(data => {
            this.setState({
                correlativa: data[0],
                paginasEnTotal: data[1].paginas
            })
        })
    }
    handleQuitarInput(){
        if(this.props.count>=1){
            this.props.handleDecrement()
        }
    }
    handleAgregarInput(){
        if(this.props.count<7){
            this.props.handleIncrement();
        }
    }
    render(){
        var selects = Array(this.props.count).fill(null); 
        return(
            <div>
                <div>
                    {selects.map(() => {
                        return(
                            <CorrelativaOptions
                                put={this.props.put}
                                idCorrelativas={this.props.idCorrelativas}
                                correlativa={this.state.correlativa}
                            />
                        )})
                    }
                </div>
                <input className={`buttom ${this.props.put ? 'buttom-edit': 'buttom-correlativa'}`} type="button" value="+" onClick={()=>{this.handleAgregarInput()}}/>
                <input className={`buttom ${this.props.put ? 'buttom-edit': 'buttom-correlativa'}`} type="button" value="-" onClick={()=>{this.handleQuitarInput()}}/>
            </div>
        )
    }
}
export default Correlativa;