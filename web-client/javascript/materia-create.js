console.log("funciona")
window.onload=function(){

var materia = document.getElementById('materia');

materia.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("click")
    var datos = new FormData(materia);
    console.log(datos.get('materia'))
    console.log(datos.get('descripcion'))
    console.log(datos.get('duracion'))
    console.log(datos.get('horasT'))
    console.log(datos.get('horasC'))

    fetch('http://localhost:3001/materia' ,{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(JSON.stringify(data))
        })
    }
)}