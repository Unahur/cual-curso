import React, { Component } from "react";

class ListaAulas extends Component {
  state = {
    aulas: [],
    paginaActiva: 0,
    paginasEnTotal: 0
  };
  componentDidMount = () => {
    fetch(" http://localhost:3001/aulas/")
      .then(res => res.json())
      .then(data => {
        this.setState({ aulas: data[0], paginasEnTotal: Math.ceil(data[1].paginas) });
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

  cambiarPagina = index => {
    if (index != this.state.paginasEnTotal && index >= 0) {
      this.setState({ paginaActiva: index });
      console.log(index);
      fetch(" http://localhost:3001/aulas/" + index)
        .then(res => res.json())
        .then(data => {
          this.setState({ aulas: data[0], paginasEnTotal: Math.ceil(data[1].paginas) });
        })
        .catch(console.log);
    }
  };
  mostrarPag = () => {
    var paginas = Array(this.state.paginasEnTotal).fill(null);

    return paginas.map((e, i) => (
      <li class="page-item" key={i}>
        <button class="page-link" onClick={() => this.cambiarPagina(i)}>
          {i}
        </button>
      </li>
    ));
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

        <br />
        <br />
        <div className="row justify-content-md-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <button
                  class="page-link"
                  onClick={() =>
                    this.cambiarPagina(this.state.paginaActiva - 1)
                  }
                >
                  Anterior
                </button>
              </li>

              {this.mostrarPag()}

              <li class="page-item">
                <button
                  class="page-link"
                  onClick={() =>
                    this.cambiarPagina(this.state.paginaActiva + 1)
                  }
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default ListaAulas;
