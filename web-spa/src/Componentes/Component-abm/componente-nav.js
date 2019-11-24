import React, { Component } from 'react';
class Nav extends Component {
    mostrarPag(){
        var paginas = Array(this.props.paginasEnTotal).fill(null);
    
        return paginas.map((e, i) => (
          <li key={i}>
            <a onClick={() => this.props.cambiarPagina(i)}>
              {i+1}
            </a>
          </li>
        ));
    };
    render(){
        return(
            <div className="center">
                <nav>
                <ul className="nav-bar">
                <li>
                    <a
                        onClick={() =>
                        this.props.cambiarPagina(this.props.paginaActiva - 1)
                    }
                    >
                    «
                    </a>
                </li>
                {this.mostrarPag()}
                <li>
                    <a
                        onClick={() =>
                        this.props.cambiarPagina(this.props.paginaActiva + 1)
                     }
                    >
                    »
                    </a>
                </li>
                </ul>
                </nav>
            </div>
        );
    }
}
export default Nav;