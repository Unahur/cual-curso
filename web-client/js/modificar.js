const url = 'http://localhost:3001/aulas';
const formulario = document.getElementById('formCreate');

var cursadasSel=document.getElementById('listCursadas');

var url_string = window.location.href
var urlO = new URL(url_string);
var idAula =  urlO.searchParams.get("idAula");
var edificio=document.getElementById('nEdificio');
var aula=document.getElementById('nAula')
var sAula=document.getElementById('listaDeAulas')
console.log(idAula)

console.log(edificio.value)
const confirmar = ()=>{
    alert("Se moodifico el registro")
    setTimeout('document.forms[0].reset()',1000)
}

 const mostrarDatos = () => {
  
     fetch('http://localhost:3001/aulas/'+ idAula, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(res){
        console.log(res)
        edificio.value=res.edificio;
        aula.value=(res.numero_aula);
    }
        );

        cargarSelect();
   
      
}
cargarSelect=()=>{
    fetch('http://localhost:3001/aulas/todasLasAulas/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res=>res.forEach(res => {
        
    if(res.id!==idAula)
       sAula.innerHTML+= `<option value=${res.id}>${res.id}</option>`
    }))
    sAula.innerHTML+= `<option value=${idAula} selected>${idAula}</option>`
}

mostrarDatos();

onChange=()=>
{


    fetch('http://localhost:3001/aulas/'+ sAula.value, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(res){
        console.log(res)
        edificio.value=res.edificio;
        aula.value=(res.numero_aula);
    }
        );

    
}
formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();


    var datos = new FormData(formulario);
    var data = {
        edificio: datos.get('edificio'),
        numero_aula: datos.get('numero_aula'),

       
    
    }
    fetch(url+"/"+ sAula.value, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

        .then(res => console.log('Success:', res))
        .catch(err => console.error('Error:', err));
        

});

