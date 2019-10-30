function load() {
    var url = 'http://localhost:3001/estudiantes';
    var formulario = document.getElementById('creacionEstudiante');
    


formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();
    

    var datos = new FormData(formulario);
    var data = {
        dni: datos.get('dni'),
        nombre_apellido: datos.get('nombre_apellido')
    }
    fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: { 'Content-Type': 'application/json'  }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
        .then(document.getElementById('creacionEstudiante').reset());

 });
}