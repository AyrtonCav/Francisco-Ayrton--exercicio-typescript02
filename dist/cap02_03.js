"use strict";
const opcao = 3;
let nomeLinguagem;
switch (opcao) {
    case 1:
        nomeLinguagem = 'TypeScript';
        break;
    case 2:
        nomeLinguagem = 'JavaSript';
        break;
    case 3:
        nomeLinguagem = 'Python';
    default:
        nomeLinguagem = 'Linguagem não cadastrada';
}
console.log(nomeLinguagem);
