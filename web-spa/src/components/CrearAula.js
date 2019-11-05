import React, { Component } from "react";
class CrearAula extends Component {
  state = {
    edificio: "",
    numeroAula: null
  };
  /* 
  cargarCursadas = () => {
    const cursadas = [
      {
        nombre: "Taller de robotica",
        descripcion: "Taller de robotica",
        docente: "Vadim"
      },
      {
        nombre: "Taller de C#",
        descripcion: "Taller de C#",
        docente: "Vadim"
      },
      {
        nombre: "Taller de JavaScript",
        descripcion: "Taller de JavaScript",
        docente: "Vadim"
      }
    ];
    cursadas.forEach(e => {
      fetch("http://localhost:3001/cursadas", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
    });

    this.listarCursadas();
  };

  listarCursadas = () => {
 fetch("http://localhost:3001/cursadas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(res =>
        res.forEach((e,index)=> {
          <option key={index} value={e.id}>{e.id}</option>;
        })
      );
  }; */
  createAula = () => {
    var data = {
      edificio: this.state.edificio,
      numero_aula: this.state.numeroAula
    };
    fetch("http://localhost:3001/aulas", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    console.log(this.state.edificio);
    console.log(this.state.numeroAula);
  };
  render() {
    return (
      <div className="row justify-content-md-center">
        <div
          className="col-md-4"
          style={{ backgroundColor: "rgb(240, 240, 240)" }}
        >
          <br />
          <form>
            <div className="form-group">
              <label for="nEdificio">Nombre del edificio:</label>
              <input
                type="text"
                className="form-control"
                name="edificio"
                id="nEdificio"
                placeholder="Ingrese el nombre del edificio"
                onChange={this.onChange}
                value={this.state.edificio}
                required
              />
            </div>
            <div className="form-group">
              <label for="nAula">Numero de aula:</label>
              <input
                type="number"
                className="form-control"
                name="numeroAula"
                id="nAula"
                placeholder="Ingrese el numero de aula"
                onChange={this.onChange}
                value={this.state.numeroAula}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
              onClick={() => this.createAula()}
            >
              Crear
            </button>
          </form>
          <br />
        </div>
      </div>
    );
  }
}
export default CrearAula;
