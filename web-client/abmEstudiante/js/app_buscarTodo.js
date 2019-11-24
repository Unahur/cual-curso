var url = 'http://localhost:3001/estudiantes';
                    
document.getElementById('listado').onload('', function(evt){
    evt.preventDefault();
    console.log(" Entro al evento ");

    fetch(url, 
        {
        method: 'GET' 
        }
        ).then(res => res.json())
         .catch(error => console.error('Error:', error));
});

function mostrarLista(desde,hasta){
    var lista = '';
    for(var i = desde; i < hasta; i++){
        var fila = '';
        fila += "<tr>";
        fila += "<td>"+res[i].dni+"</td>";
        fila += "<td>"+json[i].paterno+"</td>";
        fila += "<td>"+json[i].materno+"</td>";
        fila += "</tr>";
        lista += fila;
    }
    $('#listado').html(lista);
}

