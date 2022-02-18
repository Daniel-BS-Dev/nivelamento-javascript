class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  total() {
    return this.price * this.quantity;
  };

  add(amount) {
    this.quantity += amount;
  };

  remove(amount) {
    if (this.quantity >= amount) {
      this.quantity -= amount;
    }
  };

  label() {
    return "Dados do Produto: nome: " + this.name + ", Preço: " + this.price;
  };
}

const p1 = new Product("tv", 2000, 1);

console.log(p1);
