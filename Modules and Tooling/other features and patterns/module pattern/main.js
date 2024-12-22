// Module Pattern

const ShoppingCart = (function () {
  // private features
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const basket = function () {
    console.log(
      cart.map((item) => `${item.product}: ${item.quantity}`).join(', ')
    );
  };

  return {
    addToCart,
    totalPrice,
    totalQuantity,
    basket,
  };
})();

console.dir(ShoppingCart);
ShoppingCart.addToCart('notebooks', 10);
ShoppingCart.addToCart('pens', 12);
ShoppingCart.addToCart('apples', 2);
ShoppingCart.basket();
