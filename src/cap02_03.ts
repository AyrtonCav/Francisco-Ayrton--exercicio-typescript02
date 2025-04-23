const opcao: number = 3;
let nomeLinguagem: string;

switch(opcao) {
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
