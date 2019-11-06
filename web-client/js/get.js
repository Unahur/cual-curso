'use strict'

const url = 'http://localhost:3001/docentes';
const containerList = document.querySelector('#lista');

const listarDocentes = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => res.forEach(e => {
            containerList.innerHTML +=
            `<li>Nombre: ${e.nombre} Apellido: ${e.apellido} DNI: ${e.dni}</li><br>`
    }));

}