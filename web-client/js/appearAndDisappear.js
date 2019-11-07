const appearList = () => {
    document.getElementById("docentesList").style.display = "block"; 
};
const disappearList = () => {
    document.getElementById("docentesList").style.display = "none";    
}; 


const appearEditForm = () => {
    document.getElementById("editForm").style.display = "block";  
};

const disappearEditForm = () => {
    document.getElementById("editForm").style.display = "none";  
};


function showModification (id,nombre,apellido,dni){
    document.getElementById('nombreM').value=nombre
    document.getElementById('apellidoM').value=apellido
    document.getElementById('dniM').value=dni
    document.getElementById('idM').value=id
};
