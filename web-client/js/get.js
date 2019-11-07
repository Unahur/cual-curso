 
'use strict'

const url = 'http://localhost:3001/docentes';
const containerList = document.querySelector('#table');

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
            `<tr>   
                <th>${e.id}</th>
                <th>${e.nombre}</th> 
                <th>${e.apellido}</th> 
                <th>${e.dni}</th>
                <th>
                    <button class="btn btn-warning btn-lg" 
                    onclick="modifyDocente(
                        ${e.id},'${e.nombre}','${e.apellido}','${e.dni}')">
                </th> 
                <th>
                    <button class="btn btn-danger btn-lg" 
                    onclick="deleteDocente(${e.id})">
                </th>
            </tr>`
    })); 
}