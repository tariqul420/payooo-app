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
  showSection("add-money-section");
});

document.getElementById("payment2").addEventListener("click", function () {
  showSection("withdraw-money-section");
});

let currentAmountNumber = innerText("current-amount");

// ? add money section start hear
document.getElementById("add-money").addEventListener("click", function (event) {
  event.preventDefault();
  const amountNumber = inputValues("add-money-amount");
  const pin = inputValues("add-pin-number");
  if (pin === 1234) {
    currentAmountNumber = currentAmountNumber + amountNumber;
    document.getElementById("current-amount").innerText = currentAmountNumber;
  } else {
    alert("Failed Add Money! Please Try Again.");
  }

  document.getElementById("add-money-amount").value = "";
  document.getElementById("add-pin-number").value = "";
});

// ? withdraw money section start hear
document.getElementById("withdraw-money").addEventListener("click", function (event) {
  event.preventDefault();
  const amountNumber = inputValues("withdraw-money-amount");
  const pin = inputValues("withdraw-pin-number");
  if (pin === 1234) {
    if (currentAmountNumber >= amountNumber) {
      currentAmountNumber = currentAmountNumber - amountNumber;
      document.getElementById("current-amount").innerText = currentAmountNumber;
    } else {
      alert("Your not available Balance.");
    }
  } else {
    alert("Failed Cash Out! Please Try Again.");
  }

  document.getElementById("withdraw-money-amount").value = "";
  document.getElementById("withdraw-pin-number").value = "";
});
