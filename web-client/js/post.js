'use strict'

/* url solo se carga en este archivo y se va a utilizar en todos los archivos con cada metodo
PUT, DELETE, GET */
var url = 'http://localhost:3001/docentes';
var formulario = document.getElementById('formulario');

/* Registramos un docente a partir del POST pasandole los datos desde data(nombre, apellido, dni) */
formulario.addEventListener('submit', function (e) {
e.preventDefault();

var datos = new FormData(formulario);
var data = {
    nombre: datos.get('nombre'),
    apellido: datos.get('apellido'),
    dni: datos.get('dni'),    
}
fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: { 'Content-Type': 'application/json'  }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .then(document.getElementById('formulario').reset());
}); 
