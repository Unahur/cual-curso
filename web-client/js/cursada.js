const cursadasSize = 3;

const showCursadas = () => {
    for (let i = 0; i < cursadasSize; i++) {
        createCursada();
    }
}
 
const createCursada = () => {
    console.log("Corrio")
    
    // creo elementos
    const li = document.createElement("li");
    var divCursada = document.createElement("div");
    const divCursadas = document.getElementById("cursadaList");
    divCursada = divCursadas.appendChild(li).appendChild(divCursada);

    // elementos de cursada
    const id = document.createElement("p"); id.innerText="Id: n";
    
    const nombreCursada = document.createElement("span");
    nombreCursada.innerText="Nombre: Cursada n ";

      
    // creo button y modifico propiedades
    const buttonModificar = document.createElement("a");

    buttonModificar.href="/modificar.html";
    buttonModificar.type="button";
    buttonModificar.innerText="Modificar";
    
    // incorporo contenido de cursada al divCursada
    divCursada.appendChild(id);
    divCursada.appendChild(nombreCursada);
    divCursada.appendChild(buttonModificar);

}

