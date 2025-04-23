export {};
const nomeAluno: string = 'Ayrton Cavalcante';
const notas: number[] = [10, 7, 4];
const frequencia: number = 70 //Porcentagem

let media: number;
let soma: number = 0;

for (const nota of notas) {
    soma += nota;
}

media = soma / notas.length;

if (frequencia < 75) {
    console.log('Reprovado por falta')
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
