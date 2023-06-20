// Business Logic
function Pizza(size, toppings, orderTotal) {
  this.toppings = toppings;
  this.size = size;
  this.orderTotal = orderTotal;
}

Pizza.prototype.chooseSize = function () {
  this.size = document.querySelectorAll("input[name=size]:checked");
};

Pizza.prototype.chooseToppings = function () {
  this.toppings = document.querySelectorAll("input[name=toppings]:checked");
};

Pizza.prototype.orderTotal = function () {
  let total = 0;
  const toppings = document.querySelectorAll("input[name=toppings]:checked");

  toppings.forEach(function (topping) {
    const toppingPrice = parseFloat(topping.getAttribute("data-price"));
    total += toppingPrice;
  });
};

/* 

      let toppingsPrice = document.querySelectorAll("input[name=toppings]:checked").getAttribute("data-price").value;
    const toppingsPriceArray = Array.from(toppingsPrice);
    toppingsPriceArray.forEach(function(number) {
  return number + total;
});

 window.totalIt= function(name) {
  if(name == "product"){

  var input = document.getElementsByName("product");
  var total = 0;
      for (var i = 0; i < input.length; i++) {
        if (input[i].checked) {
          total += 1;
        }
      }
  if(total>=3){ total1 =  (total*29).toFixed(2);}
  else{total1 =  (total*39).toFixed(2);}
  }

if(name == "dessert"){

  var input = document.getElementsByName("dessert");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }

  total2 =  total.toFixed(2);
  }
  grndTotal = parseInt(total2) + parseInt(total1);
  document.getElementById("total").value = "$"+grndTotal ;

} */

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
