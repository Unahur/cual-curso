

var promesa = (num=13) => {
    let promesaQueTarda = new Promise((resolve, reject) => {
     
            if(num==13){

            resolve("nmo me gusdta");

        } else{
   reject("MORITE CRISTIAN TE ODIO");
        }});

      promesaQueTarda.then((successMessage) => {
        console.log("¡Sí! " + successMessage);
      });
}




var promesa2 = () => {
    let promesaQueNoTarda = new Promise((resolve, reject) => {
   
        setTimeout(function(){
          resolve("No espere NADA"); // ¡Todo salió bien!
        }, 0);
      });
      promesaQueNoTarda.then((successMessage) => {

        console.log("¡Sí! " + successMessage);
      });
}

