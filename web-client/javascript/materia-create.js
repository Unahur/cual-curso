console.log("funciona")
window.onload=function(){

var materia = document.getElementById('materia');
var respuesta = document.getElementById('respuesta')

materia.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("click")
    var datos = new FormData(materia);
    console.log(datos.get('materia'))
    console.log(datos.get('descripcion'))
    console.log(datos.get('duracion'))
    console.log(datos.get('horasT'))
    console.log(datos.get('horasC'))

    fetch('/post.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        })
    }
)}