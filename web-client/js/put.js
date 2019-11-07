'use strict'

const mostrarLista = () => {
    document.getElementById("listadoDocente").style.display = "block"; 
};

const ocultarLista = () => {
    document.getElementById("listadoDocente").style.display = "none";    
};    

function mostrarModificacion (id,nombre,apellido,dni){
    document.getElementById('nombreM').value=nombre
    document.getElementById('apellidoM').value=apellido
    document.getElementById('dniM').value=dni
    document.getElementById('idM').value=id
};

const ocultarModificacion = () => {
    document.getElementById("modificacion").style.display = "none";  
};

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

function readForm() {
    var formData = {};

    formData["nombre"] = document.getElementById('nombreM').value;
    formData["apellido"] = document.getElementById('apellidoM').value;
    formData["dni"] = document.getElementById('dniM').value;
    return formData;
}  



function modificarDocente(id, nombre, apellido, dni) {
    ocultarLista();
    mostrarModificacion(id, nombre, apellido, dni);
}