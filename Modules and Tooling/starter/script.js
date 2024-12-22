// Importing module
// import './shoppingCart.js'; // imports will be hoisted and executed first
// console.log(`line from importing module`)

// named import
import { shippingCost, basket } from './shoppingCart.js';

// default import
import cart from './shoppingCart.js';

// renaming imports
import { totalPrice as total } from './shoppingCart.js';

// creating an import object
import * as ShoppingCart from './shoppingCart.js';

console.log(shippingCost);
console.log(total);
cart('fountain pens', 20);
cart('notebooks', 12);

console.dir(ShoppingCart);
console.log(ShoppingCart.totalPrice);
ShoppingCart.default('ink bottles', 10);

// imports are a live connection to the exported feature
console.log(basket);

// Using an ES module from an npm repository
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const shallowState = Object.assign({}, state);
const deepState = cloneDeep(state);

state.user.loggedIn = false;

console.log(shallowState);
console.log(deepState);

// Hot module reloading
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

// Checking if new JS features are transpiled by preset-env

const gautam = new Person('Gautam');
console.log(undefined ?? null);

const arr = [1, 2, 3, 4, 6, 7, 8];
console.log(arr.at(-1));
console.log(basket.find(el => el.quantity === 20));

const foo = () => {
  console.log(`hi`);
};

foo();

Promise.resolve('test').then(x => console.log(x));

import 'core-js/stable';

// Polyfilling async functions
import 'regenerator-runtime/runtime.js';
