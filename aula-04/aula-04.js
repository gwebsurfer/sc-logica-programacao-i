/* const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

console.log(fruits.at(1)); */

/* const arr1 = [1, 2, 3];
const arr2 = ['1', '2', '3', () => {}];
const arr3 = [1, 2, 3];
const newArr = [];

console.log(newArr.concat(arr1, arr2, arr3)); */

/* const words = ['apple', 'banana', 'cherry', 'date'];
const longEnough = words.every((word) => word.length >= 2);
console.log(longEnough); // true

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [ 2, 4 ]

const filterNumber = (valor, index) => {
  console.log({
    valor,
    index,
    condition: valor % 2 === 1,
  });
  return valor % 2 === 1;
};

const evenNumbers2 = numbers.filter(filterNumber);
console.log(evenNumbers2); // [ 1, 3, 5 ]
 

const pessoas = [
  {
    name: 'João',
    idade: 23,
  },
  {
    name: 'Maria',
    idade: 19,
  },
  {
    name: 'Bruno',
    idade: 10,
  },
  {
    name: 'André',
    idade: 49,
  },
];

const testeFind = pessoas.find((item) => item.idade <= 20);
const testeFilter = pessoas.filter((item) => item.idade <= 20);

console.log('Find', testeFind); // Maria 19
console.log('Filter', testeFilter); // Maria 19, Bruno 10

const arr = pessoas.map((pessoa) => {
  console.log(pessoa);
  return {
    ...pessoa,
    isGreaterThan: pessoa.idade >= 20,
  };
});

console.log(arr);

////

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur, curIndex) => {
  console.log({
    curIndex,
    acc,
    cur,
  });
  const result = acc * cur;
  console.log('Resultado: ', result);
  return result;
}, 1);

console.log(sum);

const even = numbers.some((num) => {
  console.log(num);
  return num % 2 === 0;
});

console.log(even);

////

const produtos = [
  {
    nome: 'Carro',
    valor: 'R$ 2.000,00',
  },
  {
    nome: 'Moto',
    valor: 'R$ 1.000,00',
  },
  {
    nome: 'Bicicleta',
    valor: 'R$ 600,00',
  },
];

produtos.forEach(({ nome, valor }) =>
  console.log(`${nome} tem o valor de ${valor}`)
);

console.log(produtos.filter((item) => item.valor === 'R$ 600,00'));

console.log(produtos.map((item) => 'R$ 1,00')); */
