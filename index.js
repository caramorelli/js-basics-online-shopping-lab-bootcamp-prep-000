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
 var price = Math.floor(Math.random()*(100 - 1+1)+ 1);
 var item_obj = { itemName: item, itemPrice: price};
 cart.push(item_obj);
 return item + ' has been added to your cart.'
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
  if (!cart.include(item)) {
    return 'That item is not in your cart.';
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
