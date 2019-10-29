console.log("funciona")
window.onload=function(){

var materia = document.getElementById('materia');
//Cuando se detecta la accion submit se manda el formulario y se previene que se haga la accion por default.
materia.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("click");
    var formData = readForm();
    //despues de leer el formulario, se crea el request.
    const request = new Request('https://localhost:3001/materia',
        { method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(formData)
        });

    fetch(request)
        //se manda el request y se hace una promesa la cual debe devolver una respuesta.
        //en el caso de que el request pueda realizarse, se hace el POST, en caso contrario, se devuelve el error.
        .then(response => {
            if (response.status === 201) {
               
               return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => {
            console.debug(response);
        }).catch(error => {
            console.error(error);
        });
    
    resetForm();
})}
function readForm() {
    var formData = {};
    //aca se toma cada uno de los valores del formulario y se lo convierte en un objeto.
    formData["nombreMateria"] = document.getElementById('nombreMateria').value;
    formData["descripcion"] = document.getElementById('descripcion').value;
    formData["duracion"] = document.getElementById('duracion').value;
    formData["horasT"] = document.getElementById('horasT').value;
    return formData;
}

function resetForm() {
    //se resetea cada uno de los valores del formulario.
    document.getElementById('nombreMateria').value = "";
    document.getElementById('descripcion').value = "";
    document.getElementById('duracion').value = "";
    document.getElementById('horasT').value = "";
}

