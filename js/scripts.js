// Business Logic
function Pizza(size, toppings, orderTotal) {
  this.toppings = toppings;
  this.size = size;
  this.orderTotal = orderTotal;
}

Pizza.prototype.chooseSize = function () {
  return this.size;
};

Pizza.prototype.chooseToppings = function () {
  return this.toppings;
};

// UI Logic

let myPizza = new Pizza();

function getToppings() {
  let toppings = document.getElementById("pizza-toppings").value;
  for (i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      txt = txt + toppings[i].value + " ";
    }
  }
  return (document.getElementById("pizza-order").value =
    "You ordered a pizza with: " + txt);
}
