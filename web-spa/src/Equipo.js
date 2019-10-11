import React, { Component } from 'react'

export default class Equipo extends Component {

        state={

            mostrarFormacion:false,
            boton:"Mostrar formacion"
        }
    


   /*  mostrarF=()=>{

        if(this.state.mostrarFormacion==true)                              
       return this.props.formacion.map((e,i)=>
        <li key={i}>{e.nombre}</li>) 


    }
 */
mostrarEquipo(){
(this.state.mostrarFormacion==false)? 
    this.setState({mostrarFormacion:true,boton:"Ocultar formacion"}):
    this.setState({mostrarFormacion:false,boton:"Mostrar formacion"})


}


    

    render() {


        return (
            <div id="containerEquipo">
             <span>Equipo: {this.props.nombre}</span>
             <br/>
             <span>Director Tecnico: {this.props.dt}</span>
         
             <ul>

             {
                     (this.state.mostrarFormacion==true)?
                                    
                    this.props.formacion.map((e,i)=>
                    <li key={i}>{e.nombre}</li>)  : ""
                     
                    

              }
             </ul>
             <button onClick={()=>this.mostrarEquipo()}>{this.state.boton}</button>
             <br/>
             
            
            </div>
        )
    }
}
