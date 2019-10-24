function modificarDatos(formId, yesNo) {
    var f = document.getElementById(formId), s, opacity;
    s = f.style;
    opacity = yesNo? '40' : '100';
    s.opacity = s.MozOpacity = s.KhtmlOpacity = opacity/100;
    s.filter = 'alpha(opacity='+opacity+')';
    for(var i=0; i<f.length; i++) f[i].disabled = yesNo;
 }
 window.onload=function(){modificarDatos('f_1',true)};
 
 function alerta()
     {
     var mensaje;
     var opcion = confirm("Deseas dar baja tu usuario? Aceptar o Cancelar");
     if (opcion == true) {
         mensaje = "ir a borrado de la api";
     } else {
         mensaje = "Dar de Baja";
     }
     document.getElementById("baja").innerHTML = mensaje;
 };
 
 function buscar(){
         
 
 }




