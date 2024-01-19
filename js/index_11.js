// checked-property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    subResult.textContent = `You are NOT subscribed!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You're paying with Visa`;
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = `You're paying with MasterCard`;
  } else if (payPalBtn.checked) {
    paymentResult.textContent = `You're paying with PayPal`;
  } else {
    paymentResult.textContent = `You haven't chosen any of payment options`;
  }
};
