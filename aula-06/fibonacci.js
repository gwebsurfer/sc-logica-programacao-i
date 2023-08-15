/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/

function fibonacci(termo) {
  let arr = [0, 1];

  let numero,
    penultimo = 0,
    ultimo = 1;

  if (termo <= 2) {
    arr = arr.slice(0, termo);
  } else {
    for (let count = 2; count <= termo - 1; count++) {
      numero = ultimo + penultimo;
      arr.push(numero);
      penultimo = ultimo;
      ultimo = numero;
    }
  }

  console.log(arr);
}

fibonacci(10);
