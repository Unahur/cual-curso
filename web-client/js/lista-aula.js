const url = 'http://localhost:3001/aulas';
const containerList = document.querySelector('#listaU');

const listarAula = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => res.forEach(e => {
            containerList.innerHTML += `<li>Edificio: ${e.edificio} N° de aula: ${e.numero_aula+" "}Cursada: ${e.cursada_id} 
            <button onclick="borrarAula(${e.id})">Borrar</button> <a href="#">Modificar</a></li><br>`

        }));

}

const borrarAula= id =>{

    fetch(url + "/" + id, {
        method: 'DELETE'
      }).then(() => {
         console.log('removed id '+  id)
         window.location.reload();
      }).catch(err => {
        console.error(err)
      });
     } ;
    



