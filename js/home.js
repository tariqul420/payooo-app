document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "../html/index.html";
});

const items = document.querySelectorAll(".payment");
items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

document.getElementById("payment1").addEventListener("click", function () {
  document.getElementById("add-money-section").classList.remove("hidden");
  document.getElementById("withdraw-money-section").classList.add("hidden");
});

document.getElementById("payment2").addEventListener("click", function () {
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("withdraw-money-section").classList.remove("hidden");
});

const currentAmount = document.getElementById("current-amount").innerText;
let currentAmountNumber = parseFloat(currentAmount);

// ? add money section start hear
document.getElementById("add-money").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = document.getElementById("add-money-amount");
  const amountNumber = parseFloat(amount.value);
  const pin = document.getElementById("pin-number").value;
  if (pin === "1234") {
    currentAmountNumber = currentAmountNumber + amountNumber;
    document.getElementById("current-amount").innerText = currentAmountNumber;
  } else {
    alert("Failed Add Money! Please Try Again.");
  }

  document.getElementById("add-money-amount").value = "";
  document.getElementById("pin-number").value = "";
});

// ? withdraw money section start hear
document.getElementById("withdraw-money").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = document.getElementById("withdraw-money-amount").value;
  const amountNumber = parseFloat(amount);
  const pin = document.getElementById("withdraw-pin-number").value;
  if (pin === "1234") {
    if (currentAmountNumber >= amount) {
      currentAmountNumber = currentAmountNumber - amountNumber;
      document.getElementById("current-amount").innerText = currentAmountNumber;
    } else {
      alert("Your not available Balance.");
    }
  } else {
    alert("Failed Add Money! Please Try Again.");
  }

  document.getElementById("withdraw-money-amount").value = "";
  document.getElementById("withdraw-pin-number").value = "";
});
