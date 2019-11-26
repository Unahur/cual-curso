import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Abm from './Componentes/abm-materias';
import Sugerencia from './Componentes/Sugerencias';
class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/materias" component={Abm} />
            <Route path="/Sugerencias" component={Sugerencia} />
          </Switch>
        </div>
      </BrowserRouter>
      )
  }
}

export default App;
