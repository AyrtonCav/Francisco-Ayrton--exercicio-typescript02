"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nomeAluno = 'Ayrton Cavalcante';
const notas = [10, 7, 4];
const frequencia = 70; //Porcentagem
let media;
let soma = 0;
for (const nota of notas) {
    soma += nota;
}
media = soma / notas.length;
if (frequencia < 75) {
    console.log('Reprovado por falta');
}
else {
    if (notaAluno >= 7) {
        console.log('Aprovado');
    }
    else if (notaAluno >= 5 && notaAluno <= 6.9) {
        console.log('Recuperação');
    }
    else {
        console.log('Reprovado');
    }
}
