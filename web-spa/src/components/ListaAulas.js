import React, { Component } from "react";

class ListaAulas extends Component {
  state = {
    aulas: []
  };
  componentDidMount = () => {
    fetch(" http://localhost:3001/aulas")
      .then(res => res.json())
      .then(data => {
        this.setState({ aulas: data });
      })
      .catch(console.log);
  };
  deleteAula = (id, numAula) => {
    var newList = [];
    if (
      window.confirm("Esta seguro que quiere borrar el aula n°" + { numAula })
    ) {
      fetch("http://localhost:3001/aulas/" + id, {
        method: "DELETE"
      })
        .then(() => {
          console.log("removed id " + id);
        })
        .catch(err => {
          console.error(err);
        });
      newList = this.state.aulas.filter(aula => aula.id !== id);
      this.setState({ aulas: newList });
    }
  };
  render() {
    return (
      <div className="container-fluid" id="containerList">
        <h1>Aulas</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre del edificio</th>
              <th scope="col">Numero de aula</th>
              <th scope="col">Cursada</th>
              <th scope="col">Borrar</th>
            </tr>
          </thead>

          {this.state.aulas.map((aula, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{aula.id}</th>
                <td>{aula.edificio}</td>
                <td>{aula.numero_aula}</td>
                <td>{aula.cursada_id}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.deleteAula(aula.id, aula.numero_aula)}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
export default ListaAulas;
