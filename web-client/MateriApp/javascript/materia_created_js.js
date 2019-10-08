
fetch('localhost:3001/materia')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
    });

const getMaterias = () => {
    return fetch('localhost:3001/materia')
    .then (res => res.json())
    .then(materias => console.log(materias) )
}
const materia = {
    name: 'Math',
    description: 'hate and pain',
    id: 1 
}

const newMateria = materia => {
    const options = {
        method: 'Post',
        body: JSON.stringify(materia),
        headers: new Headers({
            'Contect-Type': 'application/json'
        })
    }
    return fetch('localhost:3001/materia',options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => console.error('Error:',error))
}

newMateria(materia)
