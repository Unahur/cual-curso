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
       .catch(error => console.error('Error:', error))
       .then(response => console.log('Success:', response));
    });



    function formatearDato(dato) {
                    document.getElementById('hiddenId').value=dato[i].id;
    
            // cuando no encuentra el dni avisa
            if (forDni != document.getElementById('dni').value) {
                alert("No existe el DNI")
            }
        
        
        document.getElementById('id01').addEventListener('click', function(evt){
            console.log(" cierro modal ");
            evt.preventDefault();
            close();
        });
    }
