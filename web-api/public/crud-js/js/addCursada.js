var selectedRow = null; 

function saved(){
    event.preventDefault();
    /*var formData = readForm();
    
    insertNewData(formData);

    resetForm();   */
}

function resetForm(){
    document.getElementById('nombreCursada').value = "";
    document.getElementById('descripcion').value = "";
}

function insertNewData(data){

    var table = document.getElementById("list-cursadas").getElementsByTagName('tbody')[0]
    
    var editarEliminar = `<a class"a" onclick="onEdit(this)">Editar</a>
            <a class="a" onclick="onDelete(this)">Eliminar</a>`
    var newRow = table.insertRow(table.length);
    
          
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.descripcion;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = editarEliminar;
}

function readForm(){
    var formData = {};

    formData["nombreCursada"] = document.getElementById('nombreCursada').value;
    formData["descripcion"] = document.getElementById('descripcion').value;
    return formData;
}
