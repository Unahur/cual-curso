import React, { Component } from 'react';


class ListarEstudiantes extends Component {

/*
  constructor(props) {
    super(props);*/
    state = {
      estudiantes: [],
      dataValue: false
    };
  

  componentDidMount() {    
    this.getEstudiantes()
      .then(estudiantes => this.setState({ estudiantes }));
  }

  getEstudiantes = () => {
    return fetch("http://localhost:3001/estudiantes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    }

   
    filasEstudiantes() {
      return this.state.estudiantes.map(e => (
        <thead key={e.id}>
          <tr>    
            <th><p className="text-center">{e.id}</p></th>
            <th><p className="text-justify">{e.nombre_apellido}</p></th> 
            <th><p className="text-center">{e.dni}</p></th> 

          </tr>
        </thead>
      ))
    }

    render() {
        return (
          <main className="container">
            <div id="listadoEstudiante">
              <div className="row" >
                <div className="col text-center">
                  <h3 className="titulo" id="titulo" >Listado <span>Estudiantes</span></h3>
                </div>
              </div>
 
              <div className="row">
                <div className="table-responsive">            
                  <table className="table table-striped" id="table">
                    <thead className="thead-dark"> 
                      <tr>
                        <th><p className="text-center">#ID</p></th>
                        <th><p className="text-center">Nombre y Apellido</p></th>
                        <th><p className="text-center">DNI</p></th>

              
                      </tr>
                    </thead>
                    {this.filasEstudiantes()}
                  </table>
                </div>
              </div>
            </div>
          </main>
        )
    }  

}
export default ListarEstudiantes;



/*
<script type="text/javascript" src="html-table-search.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $('table.search-table').tableSearch({
      searchText:'Buscar: ',
      searchPlaceHolder:'Escriba aquí...'
    });
  });
</script>

echo "<table class=\"table search-table table-sm table-bordered table-hover table-active table-list-search table-responsive glyphicon-hover\" width=\"100%\" align=\"center\">\n";


<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="html-table-search.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $('table.search-table').tableSearch({
      searchText:'Buscar: ',
      searchPlaceHolder:'Escriba aquí...'
    });
  });
</script>


********************************************************************************

             <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
              <script type="text/javascript" src="html-table-search.js"></script>
<script type="text/javascript">
  $(document).ready(function(){
    $('table.search-table').tableSearch({
      searchText:'Buscar: ',
      searchPlaceHolder:'Escriba aquí...'
    })
  });
</script>





*/