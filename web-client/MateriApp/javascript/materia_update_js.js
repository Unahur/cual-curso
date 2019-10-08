const materias = [{id: 1, nombre: "materia 1"}, {id: 2, nombre: "materia 2"}]

function llenarMiDiv() {
  console.log("llenando mi div...")
  let miDiv = document.getElementById("miDiv");
  let miListDeMaterias = document.createElement("ol");
  materias.forEach(materias => {
    let miMateria = document.createElement("li");
    miListDeMaterias.appendChild(miMateria);
    let miLink = document.createElement("a");
    miLink.innerText = materias.nombre
    miLink.href = `materia-edicion.html?id=${materias.id}`
    miMateria.appendChild(miLink)
    let miBoton = document.createElement("button");
    miBoton.textContent = "Modificar"
    miBoton.onclick = () => alert(`me clickearon desde la materia con id: ${materias.id}`)
    let losDatosDeMiMateria = document.createElement("span")
    losDatosDeMiMateria.textContent = `el id es ${materias.id} y el nombre es ${materias.nombre}`;
    miMateria.appendChild(miBoton);
    miMateria.appendChild(losDatosDeMiMateria)
  })
  miDiv.appendChild(miListDeMaterias)
}
