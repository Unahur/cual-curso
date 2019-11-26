const containerList = document.querySelector('#table');

/* Con listarDocentes listamos mediante el metodo GET todos los docentes ingresados en la 
Base de Datos Docentes.
Se crearon dos botones (Modificar y Borrar) para activar dichas acciones con las funciones 
modifyDocente (en put.js) y deleteDocente (en delete.js)*/

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