const url = 'http://localhost:3001/aulas';
const formulario = document.getElementById('formCreate');

var cursadasSel=document.getElementById('listCursadas');

var url_string = window.location.href
var urlO = new URL(url_string);
var idAula =  urlO.searchParams.get("idAula")
console.log(idAula)


const confirmar = ()=>{
    alert("Se moodifico el registro")
      document.forms[0].reset()
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
          
        }));
         
}

listarCursadas();

formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();


    var datos = new FormData(formulario);
    var data = {
        edificio: datos.get('edificio'),
        numero_aula: datos.get('numero_aula'),
        cursada_id: cursadasSel.value
    }
    fetch(url+"/"+ idAula, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

        .then(res => console.log('Success:', res))
        .catch(err => console.error('Error:', err));

});

