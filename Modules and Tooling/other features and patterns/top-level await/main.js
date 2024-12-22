import data from './module.js';

import { shippingCost, basket } from './shoppingCart.js';
import cart from './shoppingCart.js';
import { totalPrice as total } from './shoppingCart.js';
import * as ShoppingCart from './shoppingCart.js';

console.log(data);

console.log(shippingCost);
console.log(total);
cart('fountain pens', 20);
cart('notebooks', 12);

console.dir(ShoppingCart);
console.log(ShoppingCart.totalPrice);
ShoppingCart.default('ink bottles', 10);

console.log(basket); // imports are a live connection to the exported feature

console.log(data);
console.log(`done`);

const getLastPost = async function () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  // console.log(data.at(-1));
  return { title: data.at(-1).title, body: data.at(-1).body };
};

// the async function will return a promise so instead of doing this:
getLastPost().then((data) => console.log(data));
// we can use top-level await 😍
const lastPost = await getLastPost();
console.log(lastPost);
// console.log(await getLastPost());
