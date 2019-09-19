const materias = [{id: 1, nombre: "materia 1"}, {id: 2, nombre: "materia 2"}]

function llenarMiDiv() {
  console.log("llenando mi div...")
  let miDiv = document.getElementById("miDiv");
  let miListDeMaterias = document.createElement("ol");
  materias.forEach(miMateriaDeLaApi => {
    let miMateria = document.createElement("li");
    miListDeMaterias.appendChild(miMateria);
    let miLink = document.createElement("a");
    miLink.innerText = miMateriaDeLaApi.nombre
    miLink.href = `materia-edicion.html?id=${miMateriaDeLaApi.id}`
    miMateria.appendChild(miLink)
    let miBoton = document.createElement("button");
    miBoton.textContent = "Clickeame"
    miBoton.onclick = () => alert(`me clickearon desde la materia con id: ${miMateriaDeLaApi.id}`)
    let losDatosDeMiMateria = document.createElement("span")
    losDatosDeMiMateria.textContent = `el id es ${miMateriaDeLaApi.id} y el nombre es ${miMateriaDeLaApi.nombre}`;
    miMateria.appendChild(miBoton);
    miMateria.appendChild(losDatosDeMiMateria)
  })
  miDiv.appendChild(miListDeMaterias)
}
