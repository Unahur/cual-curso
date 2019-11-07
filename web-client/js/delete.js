 
'use strict'

function deleteDocente(id) {
         
    if (confirm("Desea eliminar al docente?")) {
        fetch(url+"/"+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            location.reload();
        })
        .catch(error => console.error('Error:', error));    
    }    
}