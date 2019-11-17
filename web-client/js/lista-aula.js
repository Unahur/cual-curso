const url = 'http://localhost:3001/aulas/';
const containerList = document.querySelector('#listaU');

const listarAula = () => {
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(res => res[0].forEach((aula)=>{
      containerList.innerHTML += `
           
             <tr>
              <th scope="row">${aula.id}</th>
              <td>${aula.edificio}</td>
              <td>${aula.numero_aula}</td>
              <td>${aula.cursada_id}</td>

              <td>
                <button
                  class="btn btn-danger btn-sm"
                  onclick="borrarAula(${aula.id})"
                >
                  Borrar
                </button>

                 
              </td>

              <td>

              <button type="button" 
              onclick ="location.href='http://localhost:81/modificarAula.html?idAula=${aula.id}'"
              class="btn btn-warning btn-sm"
              >
              Modificar
              </button>

               </td>

            </tr>
         
          `}));

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
    



