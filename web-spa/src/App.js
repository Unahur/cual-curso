import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstExample from './example';
import Golondrina from './Golondrina';
import Equipo from './Equipo'

function App() {


var formacion=[

  {nombre:"Charly"},
  {nombre:"Juan"},
  {nombre:"Grone"},
  {nombre:"Agustin"},
  {nombre:"Pepe"}
 

];
 
  return (
    
    <div className="App">


         <Equipo nombre="Riber" dt="patricio" formacion={formacion}  />
         
         <Equipo nombre="Voca" dt="Gaston" formacion={formacion}/>
        
         

  </div>

  )


  
}

export default App;
