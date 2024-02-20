// class = provides a more structured and cleaner way to work with objects (compared to constructor functions )
// ex. static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  totalPrice(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const product1 = new Product("T-shirt", 25);
const product2 = new Product("Pants", 20.69);
const product3 = new Product("Underwear", 100);

product3.displayProduct();

const total = product3.totalPrice(salesTax);
console.log(`Total price (with taxes): $${total.toFixed(2)}`);
