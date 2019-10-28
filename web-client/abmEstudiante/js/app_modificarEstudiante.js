document.getElementById('guardarModificacion').addEventListener('click', function(){
    console.log(" Entro al evento ");

    // creo un array con los datos cargados a modificar
    var data = {
        dni: document.getElementById('dni').value,
        nombre_apellido: document.getElementById('nombre_apellido').value,
    }     

    console.log(data);

    var url = 'http://localhost:3001/estudiantes/' + document.getElementById('hiddenId').value;
    fetch(url, { // concateno la direccion con el id obtenido y guardado en un imput hidden
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
   
});