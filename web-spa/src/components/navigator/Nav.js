import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="index.html">
                    <img src="images/logoSolo.png" width="30" height="30" alt="Logounahur"/>
                </a>         
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNAme="navbar-toggler-icon"></span>
                </button>        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/listar">Listar</Link>
                        </li>
                        <li classNAme="nav-item">
                            <Link className="nav-link" to="/registrar">Registrar</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav;
