var selectedRow = null; 

function saved(){
    event.preventDefault();
    var formData = readForm();
    
    if (selectedRow == null){
        insertNewData(formData); 
    }else{
        updateData(formData);
    }

    resetForm();   
}

function readForm(){
    var formData = {};

    formData["nombreCursada"] = document.getElementById('nombreCursada').value;
    formData["descripcion"] = document.getElementById('descripcion').value;
    return formData;
}



function resetForm(){
    document.getElementById('nombreCursada').value = "";
    document.getElementById('descripcion').value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombreCursada").value = selectedRow.cells[0].innerHTML;
    document.getElementById("descripcion").value = selectedRow.cells[1].innerHTML;
}

function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.nombreCursada;
    selectedRow.cells[1].innerHTML = formData.descripcion;
}

function onDelete(td){
    if(confirm('Seguro que quiere eliminar esta cursada? ')){
    row = td.parentElement.parentElement;
    document.getElementById('list-cursadas').deleteRow(row.rowIndex);
    resetForm();
    }
}


