import React, { Component } from 'react';

const titulo = <h3>ABM</h3>;

class Home extends Component {
    render() {
        return (
            <main>
              <div className="row">
                <div className="col-md-3">
                  <div className="row" id="titulo">                  
                    <h3>ABM<br></br>
                    <span>Docentes</span></h3>
                  </div> 
                  <div className="row d-none d-md-block" id="divFotoTecno">
                    <a href="http://www.unahur.edu.ar/es/instituto-tecnologia-e-ingenieria">
                      <img src="images/tecnologia.png" className="img-fluid rounded "/>
                    </a>
                  </div>
                </div>                                  
                <div className="col-md-9" id="divFotoPrincipal">
                  <img src="images/index.png" className="img-fluid rounded" alt=""/>
                </div>              
              </div>
          </main>
        )
    }
}

export default Home;