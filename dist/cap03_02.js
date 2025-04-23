"use strict";
let contador = 1;
let soma = 0;
while (contador <= 20) {
    if (contador % 2 == 0) {
        soma += contador;
        contador++;
    }
    contador++;
}
console.log("Soma dos pares de 1 a 20:", soma);
