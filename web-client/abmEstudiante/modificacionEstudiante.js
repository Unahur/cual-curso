<script type="text/javascript">
function modificarDatos(formId, yesNo) {
   var f = document.getElementById(formId), s, opacity;
   s = f.style;
   opacity = yesNo? '40' : '100';
   s.opacity = s.MozOpacity = s.KhtmlOpacity = opacity/100;
   s.filter = 'alpha(opacity='+opacity+')';
   for(var i=0; i<f.length; i++) f[i].disabled = yesNo;
}
window.onload=function(){modificarDatos('f_1',true);}; // disabled by default
</script>