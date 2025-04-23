"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const idade = 21;
if (idade < 16) {
    console.log('Não vota');
}
else if (idade >= 16 && idade <= 17 || idade > 70) {
    console.log('Voto facultativo');
}
else {
    console.log('Voto Obrigatório');
}
