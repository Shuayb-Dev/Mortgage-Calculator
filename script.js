// Function to calculate user input values
function calculate() {
  // Takes User Inputs
  let userInput = parseFloat(document.getElementById("mortgage-amount").value);
  let terms = parseFloat(document.getElementById("terms").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let result = document.getElementById("result");

  // Turns final rate into percentage
  let finalrate = rate / 100;

  // Return an object with the inputs
  return { userInput, terms, finalrate, result };
}

// Function to check mortgage type and perform calculation
function checkMortgageType() {
  result.style.display = "none";
  let selectedTypeText = document.getElementById("selectedTypeText");

  // Call the calculate function to get user input values
  let { userInput, terms, finalrate } = calculate();

  if (isNaN(userInput) || isNaN(terms) || isNaN(finalrate)) {
    selectedTypeText.innerHTML = "Please provide valid inputs!";
    return;
  }

  const selectedType = document.querySelector(
    'input[name="mortgage-type"]:checked'
  );

  if (!selectedType) {
    selectedTypeText.innerHTML = "Please select a mortgage type!";
    return;
  }

  let sum = 0;

  // Check if interest-only or repayment type
  if (selectedType.value === "intrest-only") {
    // Interest-only mortgage calculation
    sum = (userInput * finalrate) / 12;
    selectedTypeText.style.display = "block";
    selectedTypeText.innerHTML = `Monthly Interest Only Payment:
    <br />
    £${sum.toFixed(2)} per month`;
  } else if (selectedType.value === "repayment") {
    // Repayment mortgage calculation
    let monthlyRate = finalrate / 12;
    let numPayments = terms * 12;
    sum =
      (userInput * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));

    selectedTypeText.style.display = "block";
    selectedTypeText.innerHTML = `Repayment Amount: 
    <br />
    £${sum.toFixed(2)} per month`;
  } else {
    selectedTypeText.innerHTML = "Please select a valid mortgage type";
  }
}
