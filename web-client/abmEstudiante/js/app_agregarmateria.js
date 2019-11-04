var url = 'http://localhost:3001/estudiantes';
                          
document.getElementById('botonAgregar').addEventListener('click', function(evt){
    evt.preventDefault();
    console.log(" Entro al evento ");

    // creo un array con los datos cargados para introducir en la db
    var data = {
        dni: document.getElementById('nombre_materia').value,
        
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

    const recargarFormulario =  document.getElementById("creacionMateria");

    recargarFormulario.reset();

   
});