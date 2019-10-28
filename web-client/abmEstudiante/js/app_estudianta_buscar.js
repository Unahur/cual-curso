var url = 'http://localhost:3001/estudiantes';
//var formulario = document.getElementById('buscarPersona');
//var persona = document.getElementsByClassName('modal-content');
                    
document.getElementById('buscarDni').addEventListener('click', function(){
   console.log(" Entro al evento ");
                       
    fetch(url, 
        {
            method: 'GET' 
        }
        ).then(res => res.json())
         .then(dato => formatearDato(dato)) 
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response));
});
                    
function formatearDato(dato) {
    var forDni = document.getElementById('dniIngresado').value;
                            
    for(var i =0 ;i<dato.length;i++){ 
        if(forDni==dato[i].dni){
            document.getElementById('nombre_apellido').value=dato[i].nombre_apellido;
            document.getElementById('dni').value=dato[i].dni;
            document.getElementById('hiddenId').value=dato[i].id;
        }
    }
}