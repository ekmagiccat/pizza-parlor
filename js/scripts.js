// Business Logic
function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.orderTotal = 0;
}

Pizza.prototype.chooseSize = function () {
  let sizePrice = 0;
  const size = document.querySelector("input[name=size]:checked");

  if (size) {
    sizePrice = parseFloat(size.getAttribute("data-price"));
  }

  return sizePrice;
};

Pizza.prototype.chooseToppings = function () {
  const toppings = document.querySelectorAll("input[name=toppings]:checked");
  let toppingsPrice = 0;

  toppings.forEach(function (topping) {
    toppingsPrice += parseFloat(topping.getAttribute("data-price"));
  });

  return toppingsPrice;
};

// UI Logic

let myPizza = new Pizza();

function getToppings(event) {
  event.preventDefault();
  const toppings = document.querySelectorAll("input[name=toppings]:checked");
  if (toppings) {
    myPizza.toppings = toppings.value;
  }
}

function getSize(event) {
  event.preventDefault();
  const size = document.querySelector("input[name=size]:checked");

  if (size) {
    myPizza.size = size.value;
  }
}

function calculateOrderTotal(event) {
  event.preventDefault();
  const sizePrice = myPizza.chooseSize();
  const toppingsPrice = myPizza.chooseToppings();
  const totalPrice = sizePrice + toppingsPrice;

  console.log("Order Total: $" + totalPrice.toFixed(2));
  document.querySelector("h3#order-total").innerText =
    "Success! Your order total will be $" + totalPrice + ".";
  document.querySelector("p#order-info").innerText =
    "Thank you for your business!";
  setTimeout(function () {
    window.location.reload();
  }, 5000);
}

window.addEventListener("load", function () {
  document
    .getElementById("pizzaSelections")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      getSize(event);
      getToppings(event);
      calculateOrderTotal(event);
    });
});
