import React, { Component } from "react";
class ModificarAula extends Component {
  state = {
    edificio: "",
    numeroAula: 0,
    aulas: [],
    numAula: 0
  };

  componentDidMount = () => {
    fetch(" http://localhost:3001/aulas/todasLasAulas/")
      .then(res => res.json())
      .then(data => {
        this.setState({ aulas: data, numAula: data.id });
      })
      .catch(console.log);
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  verificarNombre = () => {
    return this.state.edificio.length < 16 && this.state.edificio.length > 4;
  };
  modificarAula = () => {
    const aula = {
      edificio: this.state.edificio,
      numero_aula: this.state.numeroAula
    };

    if (
      window.confirm(
        "Estas seguro que desea modificar el aula n°:" + this.state.numAula
      ) &&
      this.verificarNombre()
    ) {
      console.log(this.state.numAula.toString());
      fetch("http://localhost:3001/aulas/" + this.state.numAula, {
        method: "PUT",
        body: JSON.stringify(aula),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json(), console.log("CAMBIADO"))
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response));
    }
  };
  render() {
    console.log(this.state.numAula);
    return (
      <div className="row justify-content-md-center">
        <div
          className="col-md-4"
          style={{ backgroundColor: "rgb(240, 240, 240)" }}
        >
          <br />
          <form>
            <div className="form-group">
              <label for="selAula">Id Aula</label>
              <select
                id="selAula"
                className="form-control form-control-sm"
                name="numAula"
                value={this.state.numAula}
                onChange={this.onChange}
              >
                {this.state.aulas.map(e => (
                  <option key={e.id}>{e.id}</option>
                ))}
                >
              </select>

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
                onClick={() => this.modificarAula()}
              >
                Modificar aula
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ModificarAula;
