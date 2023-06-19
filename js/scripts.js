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
  const size = document.querySelectorAll("input[name=size]:checked").value;
}

window.addEventListener("load", function () {
  document
    .querySelector("form#pizza-toppings")
    .addEventListener("submit", getToppings);
  document.getElementById("pizza-size").addEventListener("submit", getSize);
});
