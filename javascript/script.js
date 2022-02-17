//types 1 aula
const a = 10       //number
const b = 10.5     //number
const c = 'Maria'  //string
const d = 'a'      //string
const e = false    // boolean
const f = {name: 'Maria', age: 25}   //object
const g = ['a', 15, false, 'maria'] //object
const h = null                     // object
const i = undefined                // underfined

console.log(typeof a) 
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
console.log(typeof i)

//var/let/const 2 aula
const x = 10;

if (x > 0) {
  var a2 = 100;
  let b2 = 200;
  const c2 = 300;
  console.log("Imprimindo dentro do if:");
  console.log(a2);
  console.log(b2);
  console.log(c2);
}

console.log("Imprimindo fora do if:");
console.log(a2);  // vaza escopo
//console.log(b);
//console.log(c);

console.log("Imprimindo resultado do for: ");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//console.log(i);


//string 3 aula
console.log("Um string literal pode ficar entre aspas duplas");
console.log('Um string literal pode ficar entre aspas simples');
console.log(`Um string literal pode ficar entre crases`);

console.log("Concatenação e interpolação");
const num = 14.5;
console.log("O valor do produto é " + num);
console.log('O valor do produto é ' + num);
console.log(`O valor do produto é ${num}`);

console.log("Conversão entre number e string");
const str1 = num.toString();
console.log(`Tipo de ${str1}: ${typeof str1}`);

const str2 = num.toFixed(2); // duas casa depois da virgula
console.log(`Tipo de ${str2}: ${typeof str2}`);

const num1 = Number("14.5");
console.log(`Tipo de ${num1}: ${typeof num1}`);

const num2 = parseInt("21", 10); // decimal
console.log(`Tipo de ${num2}: ${typeof num2}`);

const num3 = parseInt("21", 16); // hexadecimal
console.log(`Tipo de ${num3}: ${typeof num3}`);

const num4 = parseFloat("21.34", 10);
console.log(`Tipo de ${num4}: ${typeof num4}`);

// string 2 aula 4
console.log("Funções de string");

const str = "Maria Silva  ";

console.log(`toLowerCase: ${str.toLowerCase()}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);
console.log(`charAt: ${str.charAt(3)}`); // pegando a quarta letra
console.log(`charAt: ${str[3]}`);        // pegando a quarta letra
console.log(`replace (primeiro): ${str.replace("i", "$", )}`); // trocando o primeiro i por $
console.log(`replace (todos): ${str.replace(/i/g, "$", )}`); // trocando o todos os i por $
console.log(`replace (todos): ${str.replaceAll('i', "$", )}`); // trocando o todos os i por $
console.log(`length: ${str.length}`);
console.log(`indexOf: ${str.indexOf("i")}`);
console.log(`lastIndexOf: ${str.lastIndexOf("i")}`);
console.log(`subtring: ${str.substring(3, 8)}`); // primeiro numero, onde o corte começa, segundo numero final do corte
console.log(`trim: ${str.trim()}`);

//operadores
console.log("Operadores aritméticos");
console.log(`3 + 4 = ${3 + 4}`);
console.log(`3 - 4 = ${3 - 4}`);
console.log(`3 * 4 = ${3 * 4}`);
console.log(`19 / 3 = ${19 / 5}`);
console.log(`19 % 3 = ${19 % 5}`); // reto da divisão
console.log(`3 ** 4 = ${3 ** 4}`); // numero vezes ele tres vezes

console.log("Operadores comparativos");
console.log(`10 > 5 = ${10 > 5}`);
console.log(`10 < 5 = ${10 < 5}`);
console.log(`10 >= 5 = ${10 >= 5}`);
console.log(`10 <= 5 = ${10 <= 5}`);

console.log("Operadores comparativos de igualdade");
console.log(`"" == false: ${"" == false}`);
console.log(`"" === false: ${"" === false}`);
console.log(`"17" == 17: ${"17" == 17}`);
console.log(`"17" === 17: ${"17" === 17}`);

console.log("Operadores comparativos de igualdade");
const x3 = "Maria";
const y3 = "Maria";
const a3 = new String("Maria");
const b3 = new String("Maria");
console.log(`const x = "Maria"`);
console.log(`const y = "Maria"`);
console.log(`const a = new String("Maria")`);
console.log(`const b = new String("Maria"`);
console.log(`x === y: ${x3 === y3}`);
console.log(`a === b: ${a3 === b3}`);
console.log(`typeof x: ${typeof x3}`);
console.log(`typeof a: ${typeof a3}`);

console.log("Operadores lógicos");
console.log(`(10 > 5) && (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`(10 > 5) && (10 < 20): ${(10 > 5) && (10 < 20)}`);
console.log(`(10 > 5) || (10 > 20): ${(10 > 5) || (10 > 20)}`);
console.log(`(10 < 5) || (10 > 20): ${(10 > 5) && (10 > 20)}`);
console.log(`!(10 > 5): ${!(10 > 5)}`);

//estrutura de repetição
const time = 19;

if (time < 12) {
  console.log("Bom dia");
} else if (time < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

const week = 3;
switch (week) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor inválido");
}

let count = 4;
while (count > 0) {
  console.log(`COUNT = ${count}`);
  count--;
}

for (let i = 0; i < 4; i++) {
  console.log(`I = ${i}`);
}

let test = 4;
do {
  console.log(`TEST = ${test}`);
  test--;
} while (test > 0);