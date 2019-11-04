import React, { Component } from 'react';
import Logo from './images/logo-transparente.png';
class Header extends Component {
    render() {
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
                            <li className="header-center-buttom"><a>Crear</a></li>
                            <li className="header-center-buttom"><a>Materias</a></li>
                        </ul>
                    </header>
                </div>
            </div>
        )
    }
}

export default Header;