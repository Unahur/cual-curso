const cursadasSize = 3;

const showCursadas = () => {
    for (let i = 0; i < cursadasSize; i++) {
        createCursada();
    }
}
 
const createCursada = () => {
    console.log("Corrio")
    
    //creo elementos
    const li = document.createElement("li");
    var divCursada = document.createElement("div");
    const divCursadas = document.getElementById("cursadaList");
    divCursada = divCursadas.appendChild(li).appendChild(divCursada);

    //Incorporo contenido al divCursada
    const id = document.createElement("p"); id.innerText="Id: n";
    
    const nombreCursada = document.createElement("span");
    nombreCursada.innerText="Nombre: Cursada n ";

    const buttonModificar = document.createElement("a");
    buttonModificar.href="/modificar.html";
    buttonModificar.type="button";
    buttonModificar.innerText="Modificar";
    
    divCursada.appendChild(id);
    divCursada.appendChild(nombreCursada);
    divCursada.appendChild(buttonModificar);

}

