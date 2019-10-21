window.onload=function(){
var contenido = document.getElementById('contenido')
var materia = document.getElementById('materia');
materia.addEventListener('submit', function(e){
    e.preventDefault();
    fetch('tabla.json',{
        method: 'GET',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
                tabla(data)
            })
            window.location="./materia-abm.html";
    function tabla(datos) {
        // console.log(datos)
        contenido.innerHTML = ''
        for(let valor of datos){
            // console.log(valor.nombre)
            contenido.innerHTML += `
        
            <tr>
                <th scope="row">${ valor.id }</th>
                <td>${ valor.nombre }</td>
                <td>${ valor.email }</td>
                <td>${ valor.estado ? "Activo" : "Eliminado" }</td>
            </tr>
        
            `
        }
    }
})}