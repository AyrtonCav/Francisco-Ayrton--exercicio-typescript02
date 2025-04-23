const aluno = {
    nome: "Ayrton",
    idade: 20,
    curso: "Análise e Desenvolvimento de Sistemas"
  };

for (const chave in aluno) {
    console.log(`- ${chave}: ${aluno[chave as keyof typeof aluno]}`);
}