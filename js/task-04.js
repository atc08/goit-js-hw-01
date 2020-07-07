"use strict";

let credits = 23580;
const pricePerDroid = 3000;

let quantity = prompt("How many droids do you want to buy?");
let totalPrice = quantity * pricePerDroid;

if (quantity === null) {
  console.log("Cancelled by user!");
} else if (quantity <= 0) {
  alert("Enter only digits above 0");
} else if (totalPrice > credits) {
  console.log("Not enough credits!");
} else {
  credits -= totalPrice;
  alert(`You bought ${quantity} droids, ${credits} credits remain.`);
}
