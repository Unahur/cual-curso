const frase = "La ruta nos aporto otro paso natural";
const fraseLowerCase = frase.toLowerCase().replace(/ /g, "").split("");

var arrayAux = [];
const esPalindromo = (fraseCorr) => {
    
    var indexAux=0;
    for (let index = frase.length-1; index >= 0; index++) {
        
        arrayAux[indexAux] = fraseCorr[index]
        indexAux++; 
        console.log(arrayAux[indexAux])
    }

    return (arrayAux.length == fraseCorr.length);
}

esPalindromo(fraseLowerCase);

