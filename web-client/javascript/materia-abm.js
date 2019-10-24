console.log("andando")
function getMethod(){
    url = 'https://localhost:3001/materia';
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("----------------");
            var salida = {};

            for (var i = 0; i < data.length; i++) {
                salida["id"] = data[i].id;
                salida["name"] = data[i].name;
                salida["description"] = data[i].description;
                salida["duration"] = data[i].duration;
                salida["totalHours"] = data[i].totalHours;
                
                insertNewData(salida)
            }
        });
}

function insertNewData(data) {

    var table = document.getElementById("contenido").getElementsByTagName('tbody')[0]

    var editarEliminar = `<buttom class="buttom buttom-tabla" onclick="onEdit(${data.id})">Editar</buttom>
            <buttom class="buttom buttom-tabla" onclick="onDelete(${data.id})">Eliminar</buttom>`
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.duration;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.totalHours;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = editarEliminar;

}
const ocultarMaterias = () => {
    div=document.getElementById("divMaterias");
    div.style.display = (div.style.display == 'none') ? 'block' : 'none';
}
function readForm() {
    var formData = {};

    formData["name"] = document.getElementById('materia').value;
    formData["description"] = document.getElementById('description').value;
    formData["duration"] = document.getElementById('duracion').value;
    formData["totalHours"] = document.getElementById('horasT').value;
    return formData;
}

function edit(id) {
    event.preventDefault();
    const recargar = () => {
        location.reload();
    }
    var formData = readForm();
    
    const request = new Request(`https://localhost:3001/materia${id}`,
        { method: 'PUT', 
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
    
    const name = document.createElement('input');
    name.setAttribute("type","text");
    name.setAttribute("id","materia");
    name.setAttribute("class", "input");
    name.setAttribute("value", "materia");
    const description = document.createElement('input');
    description.setAttribute("type","text");
    description.setAttribute("id","description");
    description.setAttribute("class", "input");
    description.setAttribute("value","descripcion");
    const duration = document.createElement('input');
    duration.setAttribute("type","number");
    duration.setAttribute("id","duracion");
    duration.setAttribute("class", "input");
    const totalHours = document.createElement('input');
    totalHours.setAttribute("type","number");
    totalHours.setAttribute("id","horasT"); 
    totalHours.setAttribute("class", "input");    
    var button = `<buttom class="buttom buttom-tabla" id="btn-form" onclick="edit(${id})">Editar</buttom>`;
    url = `https://localhost:3001/materia${id}`;
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            
            name.value = data.name;
            description.value = data.description;
            duration.value = data.duration;
            totalHours.value = data.totalHours;
            document.getElementById('editMateria').innerHTML = button;
            document.getElementById('editMateria').appendChild(name);
            document.getElementById('editMateria').appendChild(description);
            document.getElementById('editMateria').appendChild(duration);
            document.getElementById('editMateria').appendChild(totalHours);
        });
}

function onDelete(id) {
    url = `https://localhost:3001/materia${id}`;
    
    const recargar = () => {
        location.reload();
    }

    if (confirm('Seguro que quiere eliminar esta Materia? ')) {
        fetch(url, {
            method: 'DELETE'
        }).then(recargar);
    }
}
