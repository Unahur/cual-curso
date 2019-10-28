var url = 'http://localhost:3001/estudiantes';
       
                    
document.getElementById('baja').addEventListener('click', function(){
    console.log(" Entro al evento ");

    fetch(url + "/" + document.getElementById('hiddenId').value, {
        method: 'DELETE',
        body: JSON.stringify(),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    
});