function modificarDatos(formId, yesNo) {
    var f = document.getElementsByClassName(formId), s, opacity;
    opacity = yesNo? '40' : '100';
    f.filter = 'alpha(opacity='+opacity+')';
    for(var i=0; i<f.length; i++) f[i].disabled = yesNo;
    f.disabled = yesNo;
 }
 window.onload=function(){modificarDatos('bloquear',true)};
 
 function alerta()
     {
     var mensaje;
     var opcion = confirm("Deseas dar baja al alumno? Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Dar de Baja";
        modificarDatos('bloquear', true); // para que quede en negrita luego de eliminar un alumno
    } else {
        mensaje = "Dar de Baja";
    } 
     document.getElementById("baja").innerHTML = mensaje;
 };

 //Funcion para que busque el dni al hacer enter
 function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('buscarDni').click();
        
    }
}
 