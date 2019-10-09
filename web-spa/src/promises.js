var promesaQueTarda = () => {

    var promesaConTimeOut=new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Espere 15 segundos y termine');
        }, 15000);
    }).then(function (value) {
        console.log(value);

    });
}


var promesaQueNoTarda = () =>{

    var numero=parseInt(prompt("Ingrese un numero"));
    
    

new Promise(function (resolve, reject) {
     if(numero!=13){
        resolve('No espere nada y termine');
     }else{

        reject("No me gusta");
     }


    }).then(function (value) {
        
        console.log(numero);
        
    
    });
};





