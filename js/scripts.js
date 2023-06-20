// Business Logic
function Pizza(size, toppings, orderTotal) {
  this.toppings = toppings;
  this.size = size;
  this.orderTotal = orderTotal;
}

Pizza.prototype.chooseSize = function () {
  document.querySelectorAll("input[name=size]:checked") = this.size;
};

Pizza.prototype.chooseToppings = function () {
  return this.toppings;
};

Pizza.prototype.orderTotal = function () {
  return this.toppings + this.size;
};

// UI Logic

let myPizza = new Pizza();

function getToppings(event) {
  event.preventDefault();
  const toppings = document.querySelectorAll("input[name=toppings]:checked");
  const toppingsArray = Array.from(toppings);
  toppingsArray.forEach(function (element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}

function getSize(event) {
  event.preventDefault();
  const size = document.querySelectorAll("input[name=size]:checked");
  const sizeArray = Array.from(size);
  sizeArray.forEach(function (element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    document.body.append(paragraph);
  });
}
  
/* function calculateOrderTotal(event) {
    let price = document.querySelectorAll("input[data-price]").value;
    const size = document.querySelectorAll("input[name=size]:checked");
    const toppings = document.querySelectorAll("input[name=toppings]:checked");
    let totalPrice = 0;

    if (size) {
      const sizePrice = parseFloat(size.dataset.price);
      totalPrice += sizePrice;
    }

    toppings.forEach(function(topping) {
      const toppingPrice = parseFloat(topping.dataset.price);
      totalPrice += toppingPrice;
    });

    return totalPrice;
  }
*/ 
window.addEventListener("load", function (event) {
     event.preventDefault();
  document
    .getElementById("pizzaSelections")
    .addEventListener("submit", function (event) {
      getSize(event);
      getToppings(event);
    });
   
});
