// tipo de dado 
// booleano


// conversao implicita
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString);
// conversao explicita
//Number()
//String()
console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);

