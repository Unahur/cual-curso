'use strict'

function modificar(){
    var data = {
        nombre: document.getElementById('nombreM').value,
        apellido: document.getElementById('apellidoM').value,
        dni: document.getElementById('dniM').value,    
    }
    fetch(url+"/"+document.getElementById('idM').value, {
        method: 'PUT',
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => res.forEach(e => {        
       
    })); 
}

function loadForm (id,nombre,apellido,dni){
    document.getElementById('nombreM').value=nombre
    document.getElementById('apellidoM').value=apellido
    document.getElementById('dniM').value=dni
    document.getElementById('idM').value=id
};

function modifyDocente(id, nombre, apellido, dni) {
    hideList();
    loadForm(id, nombre, apellido, dni);
    showForm();
}