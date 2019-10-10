function load() {
    var url = 'http://localhost:3001/estudiantes';
    var formulario = document.getElementById('buscarPersona');
    //var persona = document.getElementsByClassName('modal-content');



formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var datos = new FormData(formulario);
    var data = {
        dni: datos.get('dni'),
        nombre_apellido: datos.get('nombre_apellido')
    }

    
    fetch(url, {
            method: 'GET', 
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))

  //      .then(document.getElementById('creacionEstudiante').reset());

});


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