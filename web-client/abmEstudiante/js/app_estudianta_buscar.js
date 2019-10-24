var url = 'http://localhost:3001/estudiantes';

    //var formulario = document.getElementById('buscarPersona');
    //var persona = document.getElementsByClassName('modal-content');

    document.getElementById('buscarDni').addEventListener('click', function(){
        console.log(" Entro al evento ");
   
    fetch(url, 
        {
            method: 'GET' 
        }
        ).then(res => res.json())
       .then(dato => formatearDato(dato)) 
       .catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
//      .then(document.getElementById('creacionEstudiante').reset());
    });

    function formatearDato(dato) {
        console.log(dato);
    }














/*
});
function getData (url, {onSuccess}) {
    
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => onSuccess(data)
        )
        .catch((err) => console.log(err));
}
function showDni() {
    getData('http://localhost:3001/estudiantes',
        { onSuccess: (dni) =>
            dni.forEach( dni =>
                addLinkRow(dni)    
            )
        });
}
//--------------------------------------------------
function showEstudiantes() {
    getData('http://localhost:3001/estudiantes',
    { onSuccess: (estudiantes) => estudiantes.forEach(estudiantes => {
        addNavEstudiante(estudiantes)})
    });
    showDni();
}
const addNavEstudiante = (estudiantes) => {
    const aEstudiante = document.createElement('a');
    aEstudiante.setAttribute('id', estudiantes.id);
    aEstudiante.setAttribute('dni', estudiantes.dni);
    aEstudiante.innerText = estudiantes.nombre_apellido;
    const buscar = document.getElementsByClassName('buscar')[0];
    buscar.appendChild(aEstudiante);
    aEstudiante.addEventListener('submit', getEstudiantesXDni)
}
const getEstudiantesXDni = (event) => {
    const idEstudianteCapturada = event.target.id;
    getData('http://localhost:3001/estudiantes',
        { onSuccess: (estudiantes) =>
            estudiantes
            .filter( estudiantes => estudiantes.id == idEstudianteCapturada )
            
        });
        showEstudiantesXDni(estudiantes);
    
}
const showEstudiantesXDni = (estudiantes) => {
    console.log(estudiantes);
}
//-----------------------------------------------------------
/*
formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var validar =confirm("Esta seguro de borrar su registro");
        if(validar){
fetch(url + "/" + dni, {
    method: 'DELETE'
  }).then(() => {
     console.log('removed dni '+  dni);
  }).catch(err => {
    console.error(err)
  });
  } });
}
*/