// Business Logic
function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.chooseSize = function () {
  this.size;
};

Pizza.prototype.chooseToppings = function () {

};

// UI Logic

let myPizza = new Pizza

function getToppings (myPizza) {
    let toppings = document.querySelectorAll("form#pizza-toppings").checked;
    
}