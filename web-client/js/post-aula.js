var url = 'http://localhost:3001/aulas';
var formulario = document.getElementById('formCreate');


formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();


    var datos = new FormData(formulario);
    var data = {
        edificio: datos.get('edificio'),
        numero_aula: datos.get('numero_aula')
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