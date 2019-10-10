const url = 'http://localhost:3001/aulas';
const containerList=document.querySelector('#listaO');

const listarAula = () =>{

   

    fetch(url, {
        method: 'GET', // or 'PUT' 
        headers: {
              'Content-Type': 'application/json'
        }
    }).then(res =>  res.json())
    .catch(error => console.error('Error:', error))
    .then(res => res.forEach(e=> {

     console.log('hola');
 
        containerList.innerHTML += `<li>${e}</li>`;
     
    }));

}

