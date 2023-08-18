/* function soma(n1, n2) {
  if (n1 < 0 || n2 < 0) {
    throw RangeError(
      'Números informados precisam ser maiores ou iguais a zero'
    );
  }
  return n1 + n2;
}

console.log(soma(2, -10)); */

/* function soma(n1, n2) {
  return n1 + n2 + n3;
}

try {
  console.log(soma(35, 87));
} catch (err) {
  console.log('Erro:', err.name);
  console.log('Erro:', err.message);
} */

/* function soma(n1, n2) {
  setTimeout(() => {
    throw Error();
  }, 2000);
  return n1 + n2;
}

try {
  console.log(soma(35, 87));
} catch (err) {
  console.log('Erro:', err.name);
  console.log('Erro:', err.message);
} finally {
  console.log('finalizando');
} */

const num = 4;

try {
  console.log(num.toUppercase());
} catch (err) {
  console.log('Erro:', err.name);
  console.log('Erro:', err.message);
}
