
var url = 'http://localhost:3001/aulas';
var formulario = document.querySelector("form");
var ob = [];
var select = document.querySelector("#numAula");
var select2 = document.querySelector("#selEdi");
var i ;
    fetch(url, {
        method: 'GET', // or 'PUT' 
        headers: {
              'Content-Type': 'application/json'
        }
    }).then(res =>  res.json())
    .catch(error => console.error('Error:', error))
    .then(response => response.forEach(e=> {

        var option = document.createElement("option");
        var option2 = document.createElement("option");

        select.appendChild(option).innerHTML = e.numero_aula;
        option.value = e.numero_aula;
        select2.appendChild(option2).innerHTML = e.edificio ;
        option2.value = e.edificio ;
        ob.push(e);
    }));
 
    var id;
    function cambiar(){
        if(select.value != select[0].value){
              console.log("num au "+ select.value);
           id = ob.find(e=> e.numero_aula == select.value).id;
           console.log(id);

        }
    }
   
formulario.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var validar =confirm("Esta a punto de borrar un registro de manera PERMANENTE");
        if(validar){
fetch(url + "/" + id, {
    method: 'DELETE'
  }).then(() => {
     console.log('removed id '+  id);
  }).catch(err => {
    console.error(err)
  });

  } });

