document.getElementById('btnLargo').addEventListener('click', function(){
    console.log(" Entro al evento ")

    // como para borrar solo necesito el id lo tomo del imput hidden!!
    var url = 'http://localhost:3001/estudiantes/'+ document.getElementById('hiddenId').value;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    // para recargar el formulario
    const recargarFormulario =  document.getElementById("f_1");

    recargarFormulario.reset();
    
});