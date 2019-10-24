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
