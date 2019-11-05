var url_materias = 'http://localhost:3001/materia_aprobadas';

//Todas las materias estan cargadas con el id del plan de estudio de la pagina.


var idEstudiante = document.getElementById('hiddenId').value;

document.getElementById('buscarDni').addEventListener('click', function(evt){
    evt.preventDefault();
    var idEstudiante = document.getElementById('hiddenId').value;
    console.log("Obtengo el ID del estudiante  "+idEstudiante);

    fetch(url_materias, 
        {
        method: 'GET' 
        }
        ).then(res => res.json())
            .then(datos => verDatos(datos)) 
            .catch(error => console.error('Error:', error));

// se encarga de recorrer el json 
function verDatos(datos) {
    var cantMaterias = datos.length;
    console.log("Ver todo el JSON datos "+datos);
    console.log("CAntidad de materias aprobadas222222 "+cantMaterias);
   // document.getElementById('cantMaterias').value=cantMaterias;
    

    var forId = document.getElementById('hiddenId').value; // guardo el ID que se carga con el usuario para comparar
    var cantAprob= 0;
    var matAprobadas = [];
    var matSugeridas = [];
    // recorro el json para encontrarlo por dni y poder devolver dichos valores
    for(var i =0 ;i<datos.length;i++){ 
        
        var forId = document.getElementById('hiddenId').value;
                
        console.log(" Veo de trae forID "+forId)
    //Recorre todas las materias por ID de estudiantes
        if(forId==datos[i].id_estudiante){
           
            cantAprob++;
            
            matAprobadas.push(datos[i].id_materia);
            
        }
        
    }

console.log("cantidad de materias por IDDDDD  " +cantAprob);  
console.log("Que materias tiene aprobadas " +matAprobadas);     
document.getElementById('cantMaterias').value=cantAprob;
//Del id 1 al 4 no tienen correlativas. Podria probar con mapear el JSON sinCorrelativas por id pero se me seco el cerebro
for(var k =1 ;k<5;k++) { 
    if (!(matAprobadas.includes(k))){
        matSugeridas.push(k)
    }
}
/*
//if tengo aprobada la 1(mate1) puedo cursar basedeDatos,
if ((matAprobadas.id_materia == 1) && (!(matAprobadas.id_materia.includes(7)))){
    matSugeridas.push(7)
}


//if tengo aprobada la 1(mate1) puedo cursar mate2,
if ((matAprobadas = 1) && (!(matAprobadas.includes(9)))){
    matSugeridas.push(9);
};*/

//if tengo aprobada la 2(intro) puedo cursar estructura 
if ((matAprobadas == 2) && (!(matAprobadas.includes(5)))){
    matSugeridas.push(5)
}
console.log("++++++++++Que materias puede cursar " +matSugeridas); 
/*
//if tengo aprobada la 2 puedo cursar estructura, objetos1,
if ((matAprobadas = 2) && (!(matAprobadas.includes(6)))){
    matSugeridas.push(6);
};

//if tengo aprobada la 3 puedo cursar redes
if ((matAprobadas = 3) && (!(matAprobadas.includes(11)))){
    matSugeridas.push(11);
};

//if tengo aprobada la 2 y la 3 puedo cursar sistemasoperativos
if ((matAprobadas = 2) && (matAprobadas = 3) && (!(matAprobadas.includes(12)))){
    matSugeridas.push(12);
};

*/
}

});

//if tengo aprobada la 1 puedo cursar basedeDatos, mate2, 
//if tengo aprobada la 2 puedo cursar estructura, objetos1, 
//if tengo aprobada la 3 puedo cursar redes
//if tengo aprobada la 2 y la 3 puedo cursar sistemasoperativos


/*JSON con las correlatividades
var EstructuraDeDatos = [{'correlativa': 2 }];

var ProgramacionConObjetosI = [{'correlativa': 2 }];

var BasesDeDatos =  [{'correlativa': 1 }];

var MatematicaII = [{'correlativa': 1 }];
    
var ProgramacionConObjetosII = [{'correlativa': 6 }];

var RedesDeComputadoras = [{'correlativa': 3 }];

var SistemasOperativos = [{'correlativa': 3}, 
                         {'correlativa': 2}];

var sinCorrelativas = [{ 'idMateria': 1},
                       { 'idMateria': 2},
                       { 'idMateria': 3},
                       { 'idMateria': 4},
                       { 'idMateria': 8},
                       { 'idMateria': 22}];*/