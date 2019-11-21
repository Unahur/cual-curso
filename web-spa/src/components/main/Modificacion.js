import React, { Component } from 'react';

class Modificacion extends Component {
  state = {
    id: 0,
    nombre: "",
    apellido: "",
    dni: 0
  };

  componentDidMount = () => {
    const id = this.obtenerID();
    fetch("http://localhost:3001/docentes/" + id)
      .then(res => res.json())
      .then(data => {
        this.setState({
          id: data.id,
          nombre: data.nombre, 
          apellido: data.apellido,
          dni: data.dni
        });
      })
      .catch(console.log);
    }

  obtenerID(){
  var a = this.props.location.search;
    var id=a.split("=");
    return(id[1]);
  }


  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }; 



modificarDocente = () => {
  const data = {
    nombre: this.state.nombre,
    apellido: this.state.apellido,
    dni: this.state.dni
  }

  fetch("http://localhost:3001/docentes/" + this.state.id, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(() => this.props.history.push('/listar'))
    .catch(error => console.error("Error:", error))
    .then(response => console.log("Success:", response));

}

  


  render() {
    if (!this.state.id) {
      return "No existe"
    }  
    return (
      <main className="container">          
        <div id="formulario">
          <h3 className="titulo">Modificar <span>Docente</span></h3>
          <div className="form-group">
          <label for="">Nombre</label>
            <input type="text" class="form-control" name="nombre"
                    value={this.state.nombre}
                    onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label for="">Apellido</label>
            <input type="text" class="form-control" name="apellido"
                    value={this.state.apellido}
                    onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label for="">DNI</label>
            <input type="text" class="form-control" name="dni"
                    value={this.state.dni}
                    onChange={this.onChange}/>
          </div>
          
          <button className="btn btn-primary" id="btn-Modificar"
                  
                  onClick={() => this.modificarDocente()} >Modificar</button>
                 
        </div>
      </main>
    )
  }
}

export default Modificacion;