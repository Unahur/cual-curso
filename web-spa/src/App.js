import React from 'react';
import './App.css';

import Nav from './components/navigator/Nav';
import Home from './components/main/Home';
import Lista from './components/main/Lista';
import Registro from './components/main/Registro';
import Modificacion from './components/main/Modificacion';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Route
            component={Home}
            path="/"
        />
        <Route
            component={Lista}
            path="/listar"
        />
        <Route
            component={Registro}
            path="/registrar"
        />
        <Route
            component={Modificacion}
            path="/modificar"
        />
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
