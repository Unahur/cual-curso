console.log("andando")
$(document).ready(function(){
    document.querySelector('#editMateria').style.display= 'none';//se oculta el div de edicion, ya que aun no hay nada que editar.
    getMethod();//se carga las materias, apenas el documento este listo.
    $("#Buscar").keyup(function(){
    _this = this;//en este evento, apenas se escribe una letra, se empiezan a buscar las coincidencias en la tabla.
    $.each($("#tabla tbody tr"), function() {
        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
        $(this).hide();//si hay una coincidencia, muestra la materia o las materias.
        else
        $(this).show();//en caso de no haber ninguna materia, no muestra ninguna.
        });
    });
});
function getMethod(){
    //apenas se carga la pagina HTML, se realiza un get llamando a todas las materias que estan en la base de datos.
    fetch('https://localhost:3001/materia/', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("----------------");
            var salida = {};

            for (var i = 0; i < data.length; i++) {
                salida["id"] = data[i].id;//aca se captura el id, para mas adelante usarlo en las opciones.
                salida["name"] = data[i].name;
                salida["description"] = data[i].description;
                salida["duration"] = data[i].duration;
                salida["totalHours"] = data[i].totalHours;
                
                insertNewData(salida);//En esta funcion se crean lo que posteriormente van a ser las tablas que vamos a estar viendo en pantalla con toda la informacion.
            }
        });
}

function insertNewData(data) {

    var table = document.getElementById("contenido").getElementsByTagName('tbody')[0]
    //aca se crean los botones con las opciones, que son tanto borrar como activar la edicion.
    var editarEliminar = `<buttom class="buttom buttom-tabla" onclick="onEdit(${data.id})">Editar</buttom>
            <buttom class="buttom buttom-tabla" onclick="onDelete(${data.id})">Eliminar</buttom>`
    var newRow = table.insertRow(table.length);
    //aca se crean las columnas de los atributos que se van a estar mostrando.
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
const MostrarEdit = () => {
    div=document.getElementById("editMateria");
    div.style.display = 'block';
}//cuando se activa la edicion, muestra los elementos que estan en el div.
function readForm() {
    var formData = {};
    //aca se recoge los atributos que fueron editados.
    formData["name"] = document.getElementById('materia').value;
    formData["description"] = document.getElementById('description').value;
    formData["duration"] = document.getElementById('duracion').value;
    formData["totalHours"] = document.getElementById('horasT').value;
    return formData;
}

function edit(id) {
    event.preventDefault();
    //con esto se previene la accion por default de recoger el formulario de html.
    //se recarga la pagina luego del edit y se cambian los datos que fueron modificados anteriormente.
    const recargar = () => {
        location.reload();
    }
    var formData = readForm();
    //nota: Se recoge el id de la anterior etapa, para asi editar la materia correcta.
    const request = new Request(`https://localhost:3001/materia/${id}`,
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
    //en esta funcion se activa la edicion y se crean los inputs que van a traer los atributos modificados.
    //nota: cuando se activa esta funcion, se recoge la ID del objeto que queremos editar.
    MostrarEdit()
    const name = document.createElement('input');
    name.setAttribute("type","text");
    name.setAttribute("id","materia");
    name.setAttribute("class", "input input-edit");
    const description = document.createElement('input');
    description.setAttribute("type","text");
    description.setAttribute("id","description");
    description.setAttribute("class", "input input-edit");
    const duration = document.createElement('input');
    duration.setAttribute("type","number");
    duration.setAttribute("id","duracion");
    duration.setAttribute("class", "input input-edit");
    const totalHours = document.createElement('input');
    totalHours.setAttribute("type","number");
    totalHours.setAttribute("id","horasT"); 
    totalHours.setAttribute("class", "input input-edit");    
    var button = `<buttom class="buttom buttom-edit" id="btn-form" onclick="edit(${id})">Editar</buttom>`;
    fetch(`https://localhost:3001/materia/${id}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            //aca se traen los valores que van a ser modificados.
            //se crean los inputs y el boton de confirmacion de los cambios que van a ser realizados.
            name.value = data.name;
            description.value = data.description;
            duration.value = data.duration;
            totalHours.value = data.totalHours;
            document.getElementById('boton').innerHTML = button;
            document.getElementById('nombre').appendChild(name);
            document.getElementById('descripcion').appendChild(description);
            document.getElementById('duracion').appendChild(duration);
            document.getElementById('horasTotales').appendChild(totalHours);
        });
}

function onDelete(id) {
    //Se toma el id de la materia a ser eliminada.
    //luego de eliminar la materia se recarga la pagina.
    const recargar = () => {
        location.reload();
    }
    //aca se hace una confirmacion, y una vez confirmado elimina la materia.
    if (confirm('Seguro que quiere eliminar esta Materia? ')) {
        fetch(`https://localhost:3001/materia/${id}`, {
            method: 'DELETE'
        }).then(recargar);
    }
}
