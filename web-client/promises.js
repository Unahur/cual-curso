function Main() {
  console.log("-----------Empezamos");
  const miPromesaQueTarda = promesaQueTarda(10);
  console.log("-------mi promesa que tarda", miPromesaQueTarda);
  miPromesaQueTarda.then(res =>
    console.log("-------resultado  promesa que tarda:", res)
  );
  const miPromesaQueNoTarda = promesaQueNoTarda(10);
  console.log("-------mi promesa que NO tarda", miPromesaQueNoTarda);
  miPromesaQueNoTarda.then(res =>
    console.log("-------resultado promesa que NO tarda:", res)
  );
  const miPromesaQueTardaFalla = promesaQueTarda(13);
  console.log("-------mi promesa que tarda y falla", miPromesaQueTarda);
  miPromesaQueTardaFalla
    .then(res =>
      console.log("-------resultado promesa que tarda y falla:", res)
    )
    .catch(error =>
      console.log("-------error promesa que tarda y falla::", error)
    );
  const miPromesaQueNoTardaFalla = promesaQueNoTarda(13);
  console.log("-------mi promesa que NO tarda y falla", miPromesaQueNoTarda);
  // Esto va a fallar feo porque no tiene CATCH
  miPromesaQueNoTardaFalla.then(res =>
    console.log("-------resultado promesa que NO tarda y falla:", res)
  );
  console.log("-----------Terminamos");
}

function promesaQueTarda(unNumeroQueGeneraUnError) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (unNumeroQueGeneraUnError == 13) reject("no me gusta el 13");
      resolve("espere 15 segundos y termine");
    }, 15000);
  });
}

function promesaQueNoTarda(unNumeroQueGeneraUnError) {
  return new Promise(function(resolve, reject) {
    if (unNumeroQueGeneraUnError == 13) reject("no me gusta el 13");
    resolve("no espere nada y termine");
  });
}
