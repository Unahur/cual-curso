import React from 'react';

class Equipo extends React.Component{
constructor(props){
    super(props);


this.state={
    mostrarFormacion:false,
    texto: "Ocultar"
}



}

mostrar(){
 if(this.state.mostrarFormacion){
 this.setState({texto:"Mostrar",mostrarFormacion:false});

 
}
 else{ 
    
    this.setState({mostrarFormacion:true,texto:"Ocultar"})

 }

}
 

    render(){

        const { nombre, dt, formacion } = this.props
 
        return(
            <div>
                <h1> {nombre}  </h1>
            <h3>DT: {dt} </h3>
            <div>
                Formacion:
                     {
                         formacion.map(index => <li> {index.nombre }</li>)
                     }
                
            </div>

            <button onClick={()=>this.mostrar()}>  {this.state.texto}  </button>
             </div>
            
        );
    }





}


export default Equipo;