var pessoas = [
  { nome: 'João', idade: 22 },
  { nome: 'Maria', idade: 17 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Ana', idade: 22 },
  { nome: 'Carlos', idade: 16 },
];

function verificarIdade({ idade }) {
  return idade >= 18;
}

function verificarTamanhoNome({ nome }) {
  return nome.length > 3;
}

let todasPessoasTemNomeEIdade = pessoas.every(
  ({ nome, idade }) => nome !== undefined && idade !== undefined
);

console.log('Idade maior ou igual a 18 anos:', pessoas.every(verificarIdade));
console.log(
  'Nome com mais de 3 caracteres:',
  pessoas.every(verificarTamanhoNome)
);

if (todasPessoasTemNomeEIdade) {
  console.log('Todas as pessoas têm nome e idade definidos!');
} else {
  console.log('Algumas pessoas não têm nome ou idade definidos!');
}
