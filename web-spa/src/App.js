import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstExample from './FirstExample';
import Golindrina from './Golondrina';
import Equipo from './Equipo';


function App() {

  var formacion=[{nombre:"Carlos"},{nombre:"Dario"},{nombre:"Vadim"},{nombre:"fede"},{nombre:"andi"},{nombre:"pablo"}]
  return (
    <div className="App">
    <Equipo nombre="Moron" dt="Arnaldo Sialle" formacion={formacion} />
    <br/>
    <Equipo nombre="Chicago" dt="Jonathan Freire" formacion={formacion}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <Golindrina/>
    </div>
  );
}

export default App;
