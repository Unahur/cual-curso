import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <main>
              <div class="row">
                <div class="col-md-3">
                  <div class="row" id="titulo">                  
                    <h3>ABM<br></br>
                    <span>Docentes</span></h3>
                  </div> 
                  <div class="row d-none d-md-block" id="divFotoTecno">
                    <a href="http://www.unahur.edu.ar/es/instituto-tecnologia-e-ingenieria">
                      <img src="images/tecnologia.png" class="img-fluid rounded "/>
                    </a>
                  </div>
                </div>                                  
                <div class="col-md-9" id="divFotoPrincipal">
                  <img src="images/index.png" class="img-fluid rounded" alt=""/>
                </div>              
              </div>
          </main>
        )
    }
}

export default Home;