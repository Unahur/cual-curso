// Traer y mostrar Cursadas

function traerDatos(){

    url = 'http://localhost:8084/cursadas';

    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("----------------");
            var salida = {};

            for (var i = 0; i < data.length; i++) {
                salida["id"] = data[i].id; // Capturo el id 
                salida["descripcion"] = data[i].descripcion;
                salida["nombre"] = data[i].nombre;
                
                insertNewData(salida)
            }
        });
}

function insertNewData(data) {

    var table = document.getElementById("list-cursadas").getElementsByTagName('tbody')[0]

    var editarEliminar = `<a class="btn-table" onclick="onEdit(${data.id})">Editar</a>
            <a class="btn-table" onclick="onDelete(${data.id})">Eliminar</a>`
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descripcion;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = editarEliminar;

}

// ---------------------------------------------------^
// Editar cursada

const ocultarCursadas = () => {
    document.getElementById("divCursadas").style.display = "none";
    
}

function readForm() {
    var formData = {};

    formData["nombre"] = document.getElementById('inputNombre').value;
    formData["descripcion"] = document.getElementById('inputDescripcion').value;
    return formData;
}

function edit(id) {
    event.preventDefault();
    const recargar = () => {
        location.reload();
    }
    var formData = readForm();
    
    const request = new Request(`http://localhost:8084/cursadas/${id}`,
        {   method: 'PUT', 
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
        }).then(recargar);
}

function onEdit(id) {
    ocultarCursadas();
    
    const nombre = document.createElement('input');
    nombre.setAttribute("type","text");
    nombre.setAttribute("id","inputNombre");
    const descripcion = document.createElement('input');
    descripcion.setAttribute("type","text");
    descripcion.setAttribute("id","inputDescripcion");
    
    var button = `<a id="btn-form" onclick="edit(${id})">Editar</a>`

    url = `http://localhost:8084/cursadas/${id}`;
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            
            nombre.value = data.nombre;
            descripcion.value = data.descripcion;
            document.getElementById('editCursada').innerHTML = button;
            document.getElementById('editCursada').appendChild(nombre);
            document.getElementById('editCursada').appendChild(descripcion)
            
        });
}

// Elimina Cursada y refresca cambios
function onDelete(id) {
    url = `http://localhost:8084/cursadas/${id}`;
    
    const recargar = () => {
        location.reload();
    }

    if (confirm('Seguro que quiere eliminar esta cursada? ')) {
        fetch(url, {
            method: 'DELETE'
        }).then(recargar);
    }
}


