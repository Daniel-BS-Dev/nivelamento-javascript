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


