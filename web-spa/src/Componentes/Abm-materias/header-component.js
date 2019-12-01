import React, { Component } from 'react';
import Logo from './images/logo-transparente.png';
import Switch from '../../Switch-Theme';
class Header extends Component {
    render() {
        //esta clase recibe el metodo cambio de render, el cual modifica el estado de la clase app, haciendo que se cambie lo que se esta renderizando.
        return (
            <div>
                <div className="contenedor-logo">
                    <div className="row-fluid">
                        <img className="logo-Unahur" type="img" src={Logo}></img>
                    </div>
                </div>
                <div className="contenedor-header">
                    
                    <header className="header">
                        <ul className="contenedor-header-buttoms header-buttom">
                            <li className="header-center-buttom"><a onClick={() => this.props.cambioRender("crear")}>Crear</a></li>
                            <li className="header-center-buttom"><a onClick={() => this.props.cambioRender("materias")}>Materias</a></li>
                            <Switch/>
                        </ul>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;