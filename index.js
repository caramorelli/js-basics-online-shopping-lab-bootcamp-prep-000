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
    var cart_str = 'In your cart, you have '
    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i];
      if ((i === cart.length - 1) && cart.length > 1) {
        cart_str += 'and '
      }
      cart_str += (obj.itemName + ' at $' + obj.itemPrice);
      if ((cart.length > 1) && (i !== cart.length - 1)) {
        cart_str += ', ';
      }
    }
    return cart_str + '.';
  }
}

function total() {
  // write your code here
  var total_amount = 0;
  for (var i = 0; i < cart.length; i++) {
    var obj = cart[i];
    total_amount += obj.itemPrice;
  }
  return total_amount;
}

function removeFromCart(item) {
  // write your code here
  for 
}

function placeOrder(cardNumber) {
  // write your code here
}
