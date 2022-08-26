//es5 constructor function
// module.exports = function Product() {

// }

//es6 by creating a class
const products = [];

module.exports = class Product {
  constructor(t) {
    // this.title = title;
    this.title = t;
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
