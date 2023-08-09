const dozens = 6;
const maxValue = 60;

function pickNumber() {
  return Math.floor(Math.random() * maxValue) + 1;
}

function pickDozens() {
  const pickedNumbers = new Set();

  while (pickedNumbers.size < dozens) {
    const number = pickNumber();
    pickedNumbers.add(number);
  }

  return [...pickedNumbers].sort((a, b) => a - b);
}

const pickedResult = pickDozens();
console.log('Números sorteados:', pickedResult);

////

/* const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} 

console.log(i); */

////

/* const alunos = [
  { nome: 'Carlos', idade: 18 },
  { nome: 'Julia', idade: 28 },
  { nome: 'Pedro', idade: 19 },
  { nome: 'Aline', idade: 25 },
  { nome: 'Joana', idade: 32 },
  { nome: 'Maisa', idade: 30 },
];

for (let i = 0; i < alunos.length; i++) {
  console.log(`O aluno ${alunos[i].nome} tem ${alunos[i].idade} anos de idade`);
} */

////

/* const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = [];
const impares = [];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] % 2 === 0) {
    pares.push(lista[i]);
  } else {
    impares.push(lista[i]);
  }
}

console.log('Pares: ', pares);
console.log('Ímpares: ', impares); */

/* const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = lista.filter((n) => n % 2 === 0);
const impares = lista.filter((n) => n % 2 !== 0);

console.log('Pares: ', pares);
console.log('Ímpares: ', impares); */

////

/* const alunos = [
  { nome: 'Carlos', idade: 18 },
  { nome: 'Julia', idade: 28 },
  { nome: 'Pedro', idade: 19 },
  { nome: 'Aline', idade: 25 },
  { nome: 'Joana', idade: 32 },
  { nome: 'Maisa', idade: 30 },
]; */

/* const aluno = alunos[2];
console.log(aluno);

for (const prop in aluno) {
  //console.log(prop);
  console.log(`aluno.${prop} = ${aluno[prop]}`);
}

for (const index in alunos) {
  console.log(`${aluno[index].nome} = ${alunos[index].idade}`);
} 

alunos.forEach((aluno, index) => {
  console.log(`${index} - O aluno ${aluno.nome} tem ${aluno.idade} anos`);
});
*/

/* for (const aluno of alunos) {
  console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos`);
} */

/* for (const { nome } of alunos) {
  console.log(`O aluno ${nome}`);
} */

////

/* const listaDeAlunos = [
  { nome: 'João', nota1: 8, nota2: 7 },
  { nome: 'Maria', nota1: 9, nota2: 8 },
  { nome: 'Carlos', nota1: 6, nota2: 5 },
  { nome: 'Ana', nota1: 7, nota2: 6 },
  { nome: 'Pedro', nota1: 10, nota2: 9 },
  { nome: 'Lúcia', nota1: 8, nota2: 7 },
  { nome: 'Fernando', nota1: 7, nota2: 6 },
  { nome: 'Camila', nota1: 9, nota2: 8 },
  { nome: 'Rafael', nota1: 6, nota2: 5 },
  { nome: 'Juliana', nota1: 10, nota2: 9 },
];

for (const aluno of listaDeAlunos) {
  const notaMedia = (aluno.nota1 + aluno.nota2) / 2;
  console.log(`A média do aluno ${aluno.nome} é: ${notaMedia}`);
} */

////

/* const listaDeAlunos = [
  { nome: 'João', nota1: 8, nota2: 7 },
  { nome: 'Maria', nota1: 9, nota2: 8 },
  { nome: 'Carlos', nota1: 6, nota2: 5 },
  { nome: 'Ana', nota1: 7, nota2: 6 },
  { nome: 'Pedro', nota1: 10, nota2: 9 },
  { nome: 'Lúcia', nota1: 8, nota2: 7 },
  { nome: 'Fernando', nota1: 7, nota2: 6 },
  { nome: 'Camila', nota1: 9, nota2: 8 },
  { nome: 'Rafael', nota1: 6, nota2: 5 },
  { nome: 'Juliana', nota1: 10, nota2: 9 },
];

let i = 0;

while (i < listaDeAlunos.length) {
  console.log(`O aluno ${listaDeAlunos[i].nome}`);
  i++;
}

do {
  console.log(`O aluno ${listaDeAlunos[i].nome}`);
  i++;
} while (i < listaDeAlunos.length);
 */
