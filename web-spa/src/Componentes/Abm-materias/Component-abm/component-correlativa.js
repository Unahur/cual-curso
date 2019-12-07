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
                paginasEnTotal: Math.ceil(data[1].paginas)
            })
        })
    }
    handleAgregarInput(){
        if(this.props.count<7){
            this.props.handleIncrement();
        }
    }
    render(){
        var selects = Array(this.props.count).fill(null); 
        return(
            <div onLoad={()=>{this.componentDidMount()}}>
                <div>
                    {selects.map(() => {
                        return(
                            <CorrelativaOptions
                                idCorrelativas={this.props.idCorrelativas}
                                correlativa={this.state.correlativa}
                            />
                        )})
                    }
                </div>
                <input className="buttom buttom-correlativa" type="button" value="+" onClick={()=>{this.handleAgregarInput()}}/>
            </div>
        )
    }
}
export default Correlativa;