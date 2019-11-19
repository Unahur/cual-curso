import React from 'react';
import './App.css';

import Nav from './components/navigator/Nav';
import Home from './components/main/Home';
import Lista from './components/main/Lista';
import Registro from './components/main/Registro';
import Modificacion from './components/main/Modificacion';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (

    <Router>        
        
        <div className="container-fluid">
            <Nav />
        </div>

        <div className="container">
            <Switch>
                <Route exact path="/home" component = {Home} />
                <Route exact path="/listar" component = {Lista} />
                <Route exact path="/registrar" component = {Registro} />
                <Route exact path="/modificar/${e.id}" component = {Modificacion} />
            </Switch>
        </div>
        
        <div className="container-fluid">
            <Footer />
        </div>

    </Router>

  );
}

export default App;
