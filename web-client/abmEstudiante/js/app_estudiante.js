var url = 'http://localhost:3001/estudiantes';
var formuv = document.getElementsByClassName('form');
//var formulario = document.getElementById('formCreate');


formuv.addEventListener('submit', function (evt) {
    evt.preventDefault();


    var datos = new FormData(formulario);
    var data = {
        nombre_apellido : datos.put(nombre_apellido),
        dni: datos.put(dni)
    }
    fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

});