"use strict";
let country = "";
let shippingCost = 0;

const china = "China";
const chile = "Chile";
const australia = "Australia";
const india = "India";
const jamaica = "Jamaica";
const userCountry = prompt("Enter your country for shipping");

if (userCountry !== null) {
  const trueUserCountry =
    userCountry[0].toUpperCase() + userCountry.slice(1).toLowerCase();
  switch (trueUserCountry) {
    case china:
      country = "China";
      shippingCost = 100;
      alert(`Price for shipping to ${country} is ${shippingCost} credits`);
      break;
    case chile:
      country = "Chile";
      shippingCost = 250;
      alert(`Price for shipping to ${country} is ${shippingCost} credits`);
      break;
    case australia:
      country = "Australia";
      shippingCost = 170;
      alert(`Price for shipping to ${country} is ${shippingCost} credits`);
      break;
    case india:
      country = "India";
      shippingCost = 80;
      alert(`Price for shipping to ${country} is ${shippingCost} credits`);
      break;
    case jamaica:
      country = "Jamaica";
      shippingCost = 120;
      alert(`Price for shipping to ${country} is ${shippingCost} credits`);
      break;
    default:
      alert("Shipping to your country is unavailable!");
  }
} else {
  userCountry === null;
  console.log("Cancelled by user!");
}
