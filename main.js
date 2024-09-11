let numeroGatti = 27;

let gattiPerFila = 10;

let numeroFile = Math.floor(numeroGatti / gattiPerFila);
 
console.log(numeroFile);

let gattiFuori = numeroGatti % gattiPerFila;

console.log(gattiFuori);

let gattiMancanti = gattiPerFila - gattiFuori;

console.log("Ci sono " + numeroFile + " file di gatti e ne mancano " + gattiMancanti  +" per una nuova fila, con un avanzo di " + gattiFuori
);


