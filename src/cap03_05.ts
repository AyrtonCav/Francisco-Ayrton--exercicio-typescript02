interface Aluno {
    nome: string;
    notas: number[];
}

function verificarAprovacao(alunos: Aluno[]): void {
    for (const {nome, notas} of alunos) {
        let soma: number = 0;
        let media: number;

        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        media = soma / notas.length;
        
        console.log(`${nome} - Média: ${media} Situação: ${media >= 7 ? 'Aprovado' : 'Reprovado'}`)
    }

}

const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
  ];