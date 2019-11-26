import React, { Component } from 'react';
class Header extends Component {
    render() {
        //esta clase recibe el metodo cambio de render, el cual modifica el estado de la clase app, haciendo que se cambie lo que se esta renderizando.
        return (
            <div>
                <div className="contenedor-logo">
                    <div className="row-fluid">
                        <img className="logo-Unahur" type="img" src={this.props.logo}></img>
                    </div>
                </div>
                <div className="contenedor-header">
                    <header className="header">
                        <ul className="contenedor-header-buttoms header-buttom">
                            <li className="header-center-buttom"><a>Inscripcion a Materias</a></li>
                            <li className="header-center-buttom"><a>Inscripcion a Examenes</a></li>
                            <li className="header-center-buttom"><a>Reportes</a></li>
                            <li className="header-center-buttom"><a>Tramites</a></li>
                            <li className="header-center-buttom"><a>Cursos</a></li>
                        </ul>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;