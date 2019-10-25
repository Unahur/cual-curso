const url = 'http://localhost:3001/aulas';
const formulario = document.getElementById('formCreate');

var cursadasSel=document.getElementById('listCursadas');


const cursadas = [{
    nombre: "Taller de robotica",
    descripcion: "Taller de robotica",
    docente: "Vadim"
},
{
    nombre: "Taller de C#",
    descripcion: "Taller de C#",
    docente: "Vadim"
},
{
    nombre: "Taller de JavaScript",
    descripcion: "Taller de JavaScript",
    docente: "Vadim"
}];


const cargarCursadas = () => {
    cursadas.forEach(e => {

        fetch('http://localhost:3001/cursadas', {
            method: 'POST',
            body: JSON.stringify(e),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    })

    listarCursadas();

}


const listarCursadas = () => {
    fetch('http://localhost:3001/cursadas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => res.forEach(e => {
            cursadasSel.innerHTML += `<option value=${e.id}>${e.id}</option><br>`
             console.log(e.nombre)
        }));

}

formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();
    
    var datos = new FormData(formulario);
    var data = {
        edificio: datos.get('edificio'),
        numero_aula: datos.get('numero_aula'),
        cursada_id: cursadasSel.value
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

});

