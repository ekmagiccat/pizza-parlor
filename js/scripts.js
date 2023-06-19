// Business Logic
function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.chooseSize = function () {
  this.size;
};

Pizza.prototype.chooseToppings = function () {};

// UI Logic

let myPizza = new Pizza();

function getToppings(myPizza) {
  let toppings = document.forms[0];
  for (i = 0; i < toppings.length; i++) {
    if (toppings[i].checked) {
      txt = txt + toppings[i].value + " ";
    }
  }
  document.getElementById("pizza-order").value =
    "You ordered a pizza with: " + txt;
}
