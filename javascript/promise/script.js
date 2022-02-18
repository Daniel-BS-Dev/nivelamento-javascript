function f(g, h){
  setTimeout(() => {
    if(10 > 0){
      g("P");
    }else{
      h("Q");
    }
  }, 3000);
}

const myPromise = new Promise(f);

myPromise.then(result => {
  console.log("Resolveu com valor "+ result)

})
.catch(result => {
  console.log("Rejeitado com o valor "+ result);
})


console.log(myPromise);