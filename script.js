function calculate() {
  //Shows the result
  let showresult = document.getElementById("calculated-result");

  //This is a placeholder

  //Takes User Inputs
  let userInput = document.getElementById("mortgage-amount").value;
  let terms = document.getElementById("terms").value;
  let rate = document.getElementById("rate").value;

  document.getElementById("result").style.display = "none";
  showresult.style.display = "block";
  showresult.innerHTML = userInput;
}

function checkMortgageType() {
  let selectedTypeText = document.getElementById("selectedTypeText");

  const selectedType = document.querySelector(
    'input[name="mortgage-type"]:checked'
  );

  if (selectedType.value === "intrest-only") {
    selectedTypeText.style.display = "block";
    selectedTypeText.innerHTML = "Interest Only";
  } else if (selectedType.value === "repayment") {
    selectedTypeText.style.display = "block";
    selectedTypeText.innerHTML = "Repayment";
  } else {
    selectedTypeText.style.innerHTML = "Please select a type";
  }
}
