var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item_obj = {};
 item_obj[itemPrice] = item;
 var price = Math.random(1, 100);
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  if (!cart.include?(item)) {
    return 'That item is not in your cart'
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
