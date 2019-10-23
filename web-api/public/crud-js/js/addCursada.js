function saved() {
    event.preventDefault();

    var formData = readForm();
    const request = new Request('http://localhost:8084/cursadas',
        { method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(formData)
        });

    fetch(request)
        .then(response => {
            if (response.status === 201) {
               
               return response.json();
            } else {
                throw new Error('Something went wrong on api server!');
            }
        })
        .then(response => {
            console.debug(response);
        }).catch(error => {
            console.error(error);
        });
    
    resetForm();
}

function readForm() {
    var formData = {};

    formData["nombre"] = document.getElementById('nombreCursada').value;
    formData["descripcion"] = document.getElementById('descripcion').value;
    return formData;
}

function resetForm() {
    document.getElementById('nombreCursada').value = "";
    document.getElementById('descripcion').value = "";
}

function validate(){
    isValid = true;
    if(document.getElementById('nombreCursada').value === null){
        isValid = false;
        document.getElementById("nameValidationError").remove("hide");
    }else{
        isValid = true;
        if(!document.getElementById("nameValidationError").contains("hide"))
            document.getElementById("nameValidationError").add("hide")
        
    }
    return isValid;
}