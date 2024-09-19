function inputValues(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function innerText(id) {
  const text = document.getElementById(id).innerText;
  const textNumber = parseFloat(text);
  return textNumber;
}

function showSection(id) {
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("withdraw-money-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
