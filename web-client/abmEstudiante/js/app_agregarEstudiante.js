var url = 'http://localhost:3001/estudiantes';
       
                    
document.getElementById('botonAgregar').addEventListener('click', function(){
    console.log(" Entro al evento ");

    // creo un array con los datos cargados para introducir en la db
    var data = {
        dni: document.getElementById('dni').value,
        nombre_apellido: document.getElementById('nombre_apellido').value,
    }     

    console.log(data);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
   
});