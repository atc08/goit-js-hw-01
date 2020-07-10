"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const passwordRequest = prompt("Please enter your password!");
if (passwordRequest === null) {
  message = "Cancelled by user";
} else if (passwordRequest === ADMIN_PASSWORD) {
  message = "You are welcome";
} else {
  message = "Access denied, wrong password";
}
alert(message);
