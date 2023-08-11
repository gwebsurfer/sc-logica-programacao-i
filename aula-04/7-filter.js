const alunos = [
  { nome: 'Ana', idade: 20 },
  { nome: 'Pedro', idade: 18 },
  { nome: 'Maria', idade: 22 },
  { nome: 'João', idade: 17 },
  { nome: 'Lucas', idade: 19 },
  { nome: 'Julia', idade: 21 },
];

const maioresDe18Anos = alunos.filter(({ idade }) => idade >= 18);
console.log('Alunos com idade maior ou igual a 18 anos:', maioresDe18Anos);

const menoresDe20Anos = alunos.filter(({ idade }) => idade < 20);
console.log('Alunos com idade menor que 20 anos:', menoresDe20Anos);

const nomeComJ = alunos.filter(({ nome }) => nome.startsWith('J'));
console.log('Alunos cujo nome começa com a letra J:', nomeComJ);
