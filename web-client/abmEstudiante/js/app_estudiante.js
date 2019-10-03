var url = 'http://localhost:3001/estudiantes';
var formulario =  {
    nombre_apellido:('nombre_apellido'),
    dni:('dni')
}// document.getElementById('creacionEstudiante');


//formulario.addEventListener('submit', function (evt) 
{
  //  evt.preventDefault();


    //var datos = new FormData(formulario);
   // var data = {
  //      nombre_apellido: datos.get('nombre_apellido'),
 //       dni: datos.get('dni')
  //  }
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: {
                nombre_apellido: ('nombre_apellido'),
                dni: ('1')
            },
           // body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

}
//)
;