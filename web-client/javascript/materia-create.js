function obtenerFormulario(){
    var materia = document.getElementById("materia").value;
    var descripcion = document.getElementById("descripcion").value;
    var semestre = document.getElementById("semestre").value;
    var horasT = document.getElementById("horasT").value;
    var horasC = document.getElementById("horasC").value;

    var resultados = [materia, descripcion, semestre, horasT, horasC];
    return resultados;
}
const printDatos = () => document.getElementById('resultados').innerHTML= resultados;
