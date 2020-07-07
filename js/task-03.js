"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const passwordRequest = prompt("Please enter your password!");
if (passwordRequest === null) {
  message = "Cancelled by user";
  alert(message);
} else if (passwordRequest === ADMIN_PASSWORD) {
  message = "You are welcome";
  alert(message);
} else {
  message = "Access denied, wrong password";
  alert(message);
}
