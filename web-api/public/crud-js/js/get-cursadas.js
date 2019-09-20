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

function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open("GET","http://localhost:8084/cursadas", true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var respuesta = JSON.parse(xhttp.responseText);
            //console.log(respuesta);
            //cursadas = respuesta.cursos;
            var salida = {}; 
            for (var i = 0; i < respuesta.length; i ++){   
                salida["descripcion"] = respuesta[i].descripcion;
                salida["nombre"] = respuesta[i].nombre;
                console.log(salida);
                insertNewData(salida)
            }
        }       
    }
}