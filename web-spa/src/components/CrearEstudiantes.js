import React, { Component } from "react";
class CrearEstudiantes extends Component {
  constructor(props){
      super(props)
      this.state={
              dni: "",
              nombre_apellido: "",
              carreraId: "",
              dataValue: false,
      }//creacion de parametros para el estudiante
      this.handleChange = this.handleChange.bind(this);//metodo para modificar valores(input)
      this.handleSubmit= this.handleSubmit.bind(this);
      this.handlePost= this.handlePost.bind(this);
  };

  resetearForm(){
    this.setState({
        dni: "",
        nombre_apellido: "",
        carreraId: "",
    })//este metodo vacia el formulario para hacer el siguiente post
}
 
  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
}//en este metodo se cambian los valores y se asigna el campo y el valor, para no tener que hacer un metodo para cada input.
handleSubmit(event){
    event.preventDefault()
    this.handlePost()
}//este evento se encarga de hacer el post
handlePost(){
          var data = {
              dni: this.state.dni,
              nombre_apellido: this.state.nombre_apellido,
              carreraId: this.state.carreraId,
          };

          fetch("http://localhost:3001/estudiantes", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .catch(error => console.error("Error:", error))
            .then(response => console.log("Success:", response));
            this.resetearForm()
        
      };
      onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.resetearForm()
      };
    
   

render() {
    return (
        <div>
            <div className="contenedor-titulo">
                <div className="titulo">CREAR NUEVO ESTUDIANTE</div>
            </div>
            <div  className="col-md-4" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
            <form action="" autoComplete="off" className="contenedor-grid contenedor-grid-abm" onSubmit={(e) => this.handleSubmit(e)}>
                <div className="contenido">
                    <div className="texto">Nombre y apellido (*)</div>
                    <input className="input" type="text" name="nombre_apellido" value={this.state.nombre_apellido} onChange={this.handleChange}/>
                    <div className= "texto">Dni(*)</div>
                    <input className="input" type="number" name="dni" value={this.state.dni} onChange={this.handleChange}/>
                    <div className="texto">Carrera(*)</div>
                    <input className="input" type="text" name="carreraId" value={this.state.carreraId} onChange={this.handleChange}/>
                </div>
               <footer className="footer">
                <button type="submit"  className="btn btn-success" onClick={() => this.handlePost()}>
                       Crear
               </button>
             </footer>
           </form>
         </div>
       </div>
    )
}
}

export default CrearEstudiantes;

