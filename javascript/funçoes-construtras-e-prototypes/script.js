const Product = function(name, price, quantity){
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

Product.prototype.total = function(){
  return this.price * this.quantity;
}

Product.prototype.add = function(amount){
  this.quantity += amount;
}

Product.prototype.remove = function(amount){
  if(this.quantity >= amount){
    this.quantity -= amount;
  }
}

Product.prototype.label = function(){
  return 'Dados do Produto: nome: ' + this.name + ', Preço: ' + this.price;
}

const p1 = new Product('tv', 2000, 1);

console.log(p1);


