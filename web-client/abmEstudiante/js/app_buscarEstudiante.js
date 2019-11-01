var url = 'http://localhost:3001/estudiantes';
                    
document.getElementById('buscarDni').addEventListener('click', function(evt){
    evt.preventDefault();
    console.log(" Entro al evento ");

    fetch(url, 
        {
        method: 'GET' 
        }
        ).then(res => res.json())
            .then(dato => formatearDato(dato)) 
            .catch(error => console.error('Error:', error));
});
// se encarga de recorrer el json 
function formatearDato(dato) {
    var forDni = document.getElementById('dniIngresado').value; // para guardar el dni que carga el usuario y luego comparar
    
    // recorro el json para encontrarlo por dni y poder devolver dichos valores
    for(var i =0 ;i<dato.length;i++){ 
        if(forDni==dato[i].dni){
            document.getElementById('nombre_apellido').value=dato[i].nombre_apellido;
            document.getElementById('dni').value=dato[i].dni;
            document.getElementById('hiddenId').value=dato[i].id;
        }
    }
    // cuando no encuentra el dni avisa
    if (forDni != document.getElementById('dni').value) {
        alert("No existe el DNI")
    }
}


