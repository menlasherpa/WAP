class Product {
  constructor(id, name, price, description) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._description = description;
  }
  getName() {
    return this._name;
  }
  setName(name) {
    this._name = name;
  }
  getId() {
    return this._id;
  }
  setId(id) {
    this._id = id;
  }
  getPrice() {
    return this._price;
  }
  setPrice(price) {
    this._price = price;
  }
  getDescription() {
    return this._description;
  }
  setDescription(decription) {
    this._description = description;
  }
  static getAllProducts() {
    return products;
  }
}
products = [];
const hp = new Product(0, "Laptop", 10, "HP Brand new Laptop");
const samsung = new Product(1, "mobile", 30, "Samsung  mobile");
const mac = new Product(2, "Laptop", 2, "MacBook Pro 2017");
const car = new Product(3, "Laptop", 10, "Tesla 202");
const book = new Product(4, "Book", 11, "this is a book");
products = [hp, samsung, mac, car];

module.exports = Product;
