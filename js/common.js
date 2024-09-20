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
  document.getElementById("transaction-section").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

function transaction(section, amount, image) {
  const div = document.createElement("div");
  div.classList.add("div");
  
  
  const img = document.createElement("img");
  img.src = image;
  img.alt = "image";
  img.width = 30;
  img.height = 30;

  div.innerText = `${section}: ${amount}TK. Balance: ${currentAmountNumber}TK.`;
  
  div.appendChild(img);

  document.getElementById("transaction").appendChild(div);
}
