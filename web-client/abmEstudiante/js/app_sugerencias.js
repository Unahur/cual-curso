var url_materiasAprob = 'http://localhost:3001/materia_aprobadas';
//var url_materias = 'http://localhost:3001/materias'; Se puede hacer listado con esto?????


//Todas las materias estan cargadas con el id del plan de estudio de la pagina.


var idEstudiante = document.getElementById('hiddenId').value;

document.getElementById('buscarDni').addEventListener('click', function(evt){
    evt.preventDefault();
    var idEstudiante = document.getElementById('hiddenId').value;
    console.log("Obtengo el ID del estudiante  "+idEstudiante);

    fetch(url_materiasAprob, 
        {
        method: 'GET' 
        }
        ).then(res => res.json())
            .then(datos => verDatos(datos)) 
            .catch(error => console.error('Error:', error));
    fetch(url_materias, 
                {
                method: 'GET' 
                }
                ).then(res => res.json())
                    .then(lista => ListadoMaterias(lista)) 
                    .catch(error => console.error('Error:', error));
// se encarga de recorrer el json 
function verDatos(datos) {
    var cantMaterias = datos.length;
    console.log("Ver todo el JSON datos "+datos);
    console.log("CAntidad de materias aprobadas222222 "+cantMaterias);
   // document.getElementById('cantMaterias').value=cantMaterias;
    

   // var forId = document.getElementById('hiddenId').value; // guardo el ID que se carga con el usuario para comparar
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
};


//if tengo aprobada la 1(mate1) puedo cursar basedeDatos,
if ((matAprobadas.includes(1)) && (!(matAprobadas.id_materia.includes(7)))){
    matSugeridas.push(7);
    console.log("----------Que materias puede cursar (bases) " +matSugeridas); 
}

//if tengo aprobada la 1(mate1) puedo cursar mate2,
if ((matAprobadas.includes(1)) && (!(matAprobadas.includes(9)))){
    matSugeridas.push(9);
}

//if tengo aprobada la 2(intro) puedo cursar estructura 
if ((matAprobadas.includes(2)) && (!(matAprobadas.includes(5)))){
    matSugeridas.push(5);
    console.log("----------Que materias puede cursar (estructura) " +matSugeridas); 
}
//if tengo aprobada la 2 (intro) puedo cursar estructura, objetos1,
if ((matAprobadas.includes(2)) && (!(matAprobadas.includes(6)))){
    matSugeridas.push(6);
}

//if tengo aprobada la 3 (organiz)puedo cursar redes
if ((matAprobadas.includes(3)) && (!(matAprobadas.includes(11)))){
    matSugeridas.push(11);
    console.log("++++REDES++++++Que materias puede cursar (sugeridas) " +matSugeridas); 
}

//if tengo aprobada la 2 (intro) y la 3(organiz) puedo cursar sistemasoperativos
if ((matAprobadas.includes(2)) && (matAprobadas.includes(3)) && (!(matAprobadas.includes(12)))){
    matSugeridas.push(12);
}

   
console.log("++++++++++Que materias puede cursar (sugeridas) " +matSugeridas); 

var materia = [];
     
    if (matSugeridas.includes(1)) {
        materia.push("Matemática I");
        }
    if (matSugeridas.includes(2)) {
        materia.push("Introducción a la Programación");
    }
    if (matSugeridas.includes(3)) {
        materia[j] = "Organización de Computadoras";
    }
    if (matSugeridas.includes(4)) {
        materia.push("Nuevos Entornos y Lenguajes");
    }
    if (matSugeridas.includes(5)) {
        materia.push("Estructuras de Datos");
    }
    if (matSugeridas.includes(6)) {
        materia.push("Programación con Objetos I");
    }
    if (matSugeridas.includes(7)) {
        materia.push("Bases de Datos");
    }
    if (matSugeridas.includes(8)) {
        materia.push("Inglés I");
    }
    if (matSugeridas.includes(9)) {
        materia.push("Matemática II");
    }
    if (matSugeridas.includes(10)) {
        materia.push("Programación con Objetos II");
    }
    if (matSugeridas.includes(11)) {
        materia.push("Redes de Computadoras");
    }
    if (matSugeridas.includes(12)) {
        materia.push("Sistemas Operativos");
    }
    console.log("++++++++++Sugerencia " +materia); 
document.getElementById('sugerida1').value=materia[0];
document.getElementById('sugerida2').value=materia[1];
document.getElementById('sugerida3').value=materia[2];
document.getElementById('sugerida4').value=materia[3];
document.getElementById('sugerida5').value=materia[4];
document.getElementById('sugerida6').value=materia[5];







} //cierra la funcion verDatos

});

/*
//if tengo aprobada la 1 puedo cursar basedeDatos, mate2, 
//if tengo aprobada la 2 puedo cursar estructura, objetos1, 
//if tengo aprobada la 3 puedo cursar redes
//if tengo aprobada la 2 y la 3 puedo cursar sistemasoperativos

Esto esta hecho hasta 3er cuatrimestre, no segui agregando correlativas
JSON con las correlatividades

para cursar bases tengo que tener aprobada la 1 (mate1)



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
                       { 'idMateria': 22}];
                       
Por ahi es mejor que cada materia sepa de cual es correlativa,
si tengo aprobada programacion1 (2), se que puedo ofrecer estructura, objetos1
y si tambien tengo organizacion puedo ofrecer sistemas operativos

var intProgramacion = [{'puedoCursar': 5}
                       {'puedoCursar': 6}
                      ];

                       */