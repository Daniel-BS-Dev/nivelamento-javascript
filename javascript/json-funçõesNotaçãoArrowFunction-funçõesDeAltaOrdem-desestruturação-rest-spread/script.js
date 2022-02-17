// json
const obj1 = {
    "name": "Computador",
    "price": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    name: "Computador",
    price: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.id);
console.log(obj3.client);
console.log(obj3.client.name);


const txt = `{"nome": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

const obj = JSON.parse(txt);

console.log(txt.name);// transformando meu objeto string em json

console.log(obj.nome);

const text = JSON.stringify(obj); // transformando meu objeto json em string


// funções
function soma1(num1, num2) {
    return num1 + num2;
}

const soma2 = function(num1, num2) {
    return num1 + num2; 
}

const soma3 = (num1, num2) => {
    return num1 + num2; 
}

const soma4 = (num1, num2) => num1 + num2; 

const dobro1 = function(num) {
    return num * 2;
}

const dobro2 = num => num * 2;

// Funcao que nao tem retorno definido, retorna undefined

function mostrarPreco(preco) {
    console.log(`PRECO = ${preco}`);
}

// Variaveis definidas dentro da funcao pertencem somente ao escopo da funcao

function areaCirculo(raio) {
    var pi = 3.14;
    return pi * raio * raio;
}
//console.log(pi);

// Function hoisting: declaracoes de funcoes sao "movidas" para cima pelo motor do JavaScript

teste(5);

function teste(x) {
    console.log("TESTE " + x);
}

// Funcoes podem ser passadas como argumento

function triplo(num) {
    return num * 3;
}

function aplicar(f, num) {
    const result = f(num);
    console.log("RESULTADO = " + result);
}

aplicar(dobro1, 10);
aplicar(triplo, 10);


// funções de alta ordem
