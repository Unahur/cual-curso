'use strict'

var url = 'http://localhost:3001/docentes';
var formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (e) {
e.preventDefault();
console.log("Me diste click")

var datos = new FormData(formulario);
console.log(datos);

var data = {
    nombre: datos.get('nombre'),
    apellido: datos.get('apellido'),
    dni: datos.get('dni'),    
}
fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: { 'Content-Type': 'application/json'  }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
    .then(document.getElementById('formulario').reset());
});


/* const docentes = [{id: 1, nombre: "materia 1", apellido:"esta", dni:"30"},
{id: 2, nombre: "materia 3", apellido:"esta", dni:"0"},
{id: 3, nombre: "materia 2", apellido:"esta", dni:"20"},]

function llenarMiDiv() {
  console.log("llenando mi div...")
  let miDiv = document.getElementById("miDiv");
  let miListDeDocentes = document.createElement("ol");
  docentes.forEach(miDocenteDeLaApi => {
    let miDocente = document.createElement("li");
    miListDeDocentes.appendChild(miDocente);
    let miLink = document.createElement("a");
    miLink.innerText = miDocenteDeLaApi.nombre
    miLink.href = `docente-edicion.html?id=${miDocenteDeLaApi.id}`
    miDocente.appendChild(miLink)
    let miBoton = document.createElement("button");
    //miBoton.textContent = "Clickeame"
    //miBoton.onclick = () => alert(`me clickearon desde la materia con id: ${miDocenteDeLaApi.id}`)
    let losDatosDeMiDocente = document.createElement("span")
    losDatosDeMiDocente.textContent = `el id es ${miDocenteDeLaApi.id} y el nombre es ${miDocenteDeLaApi.nombre}`;
    //miDocente.appendChild(miBoton);
    miDocente.appendChild(losDatosDeMiDocente)
  })
  miDiv.appendChild(miListDeDocentes)
} */


