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
