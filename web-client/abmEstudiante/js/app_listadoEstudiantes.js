var url = 'http://localhost:3001/estudiantes';

    params = {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
        } 
    };     
 
var request = new Request( url, params );

 
fetch( request )
.then(res => res.json())   
.then( data => paraProbar( data ) )
.catch( e => console.error( 'Fallo!!!!' ) );
 
        
 function paraProbar(data){

            var pag = 1;
            var totales = data.length;
            var xPag = 4;
            var nPag = Math.ceil(totales / xPag);
            var offset = (pag - 1) * xPag;
            var hasta = pag * xPag;

                    

        function mostrarLista(offset,hasta){
            var separacion = "|";
            var lista = '';
            for(var i = offset; i < hasta; i++){
                var fila = '';
                if (data[i]) {
                    fila += "<tr>";
                        fila += "<td>"+data[i].dni+"</td>";
                        fila += "<td>"+separacion+data[i].nombre_apellido+"</td>";
                        fila += "</tr>";
                        lista += fila;
                        }
            }
            $('#listado').html(lista);
        }
        
        function mostrarBotones(t){
            var botones = '';
            for(var i = 0; i < t; i++){
                var cada = '';
                cada = "<button type='button' "+
                    "class='btn btn-info'>"+(i+1)+
                    "</button>";
                botones += cada;
            }
            
            $('#botonesPaginacion').append(botones);
        }
        
        function quitarActivo(){
            var losBotones = document.querySelectorAll('#botonesPaginacion button');
            for(var i = 0; i < losBotones.length; i++){
                $(losBotones[i]).removeClass('active');
            }
        }
        
        mostrarLista(offset,hasta);
        mostrarBotones(nPag);
        
        $( document ).ready(function(){
            // Activar el primer botón
            $('#botonesPaginacion button:first-child').addClass('active');
            
            // Poner oyentes a cada botón
            var losBotones = document.querySelectorAll('#botonesPaginacion button');
            for(var i = 0; i < losBotones.length; i++){
                losBotones[i].addEventListener('click',function(){
                    quitarActivo();
                    var indice = parseInt(this.textContent);
                    var o = (indice -1) * xPag;
                    var h = indice * xPag;
                    mostrarLista(o,h);
                    $(this).addClass('active');
                });
            }
})}
//Funciones para ocultar y mostrar el listado total de Estudiantes
function mostrarListado(){
    document.getElementById('mostrarListado').style.display = 'block';
    }

function ocultar(){
    document.getElementById('mostrarListado').style.display = 'none';
    }
; 
