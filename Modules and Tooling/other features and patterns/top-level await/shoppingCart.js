// Exporting module
// console.log(`line from exporting module`);

// named export
export const shippingCost = 10;
const cart = [];

const totalPrice = 237;

// const addToCart = function (product, quantity) {
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
// export default addToCart;

// also a named export
export { totalPrice, cart as basket };
