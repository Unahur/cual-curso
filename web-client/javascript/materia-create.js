console.log("funciona")
window.onload=function(){

var materia = document.getElementById('materia');

materia.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("click");
    var formData = readForm();
    const request = new Request('https://localhost:3001/materia',
        { method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(formData)
        });

    fetch(request)
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

    formData["nombreMateria"] = document.getElementById('nombreMateria').value;
    formData["descripcion"] = document.getElementById('descripcion').value;
    formData["duracion"] = document.getElementById('duracion').value;
    formData["horasT"] = document.getElementById('horasT').value;
    return formData;
}

function resetForm() {
    document.getElementById('nombreMateria').value = "";
    document.getElementById('descripcion').value = "";
    document.getElementById('duracion').value = "";
    document.getElementById('horasT').value = "";
}

