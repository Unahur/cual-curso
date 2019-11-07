'use strict'

var url = 'http://localhost:3001/docentes';
var formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (e) {
e.preventDefault();
console.log("Me diste click")

var datos = new FormData(formulario);
console.log(datos);

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

