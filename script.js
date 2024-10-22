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
  // Hide the result initially
  result.style.display = "none";

  // Get references to result display elements
  let selectedTypeText = document.getElementById("selectedTypeText");
  let totalPayment = document.getElementById("totalPayment");
  let totalRepayment = document.getElementById("totalRepayment");
  let finalResult = document.getElementById("finalResult");

  // Clear previous result text
  selectedTypeText.innerHTML = "";
  totalPayment.innerHTML = "";
  totalRepayment.innerHTML = "";

  // Call the calculate function to get user input values
  let { userInput, terms, finalrate } = calculate();

  // Validate inputs
  if (isNaN(userInput) || isNaN(terms) || isNaN(finalrate)) {
    selectedTypeText.innerHTML = "Please provide valid inputs!";
    return;
  } else {
    finalResult.style.display = "block";
  }

  // Get the selected mortgage type
  const selectedType = document.querySelector(
    'input[name="mortgage-type"]:checked'
  );

  // Ensure a mortgage type is selected
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

    // Display total payment
    totalPayment.style.display = "block";
    totalPayment.innerHTML = `
    Total Payment: 
    <br />
    £${(sum * 12 * terms).toFixed(2)} `;
  } else if (selectedType.value === "repayment") {
    // Repayment mortgage calculation
    let monthlyRate = finalrate / 12;
    let numPayments = terms * 12;
    sum =
      (userInput * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));

    selectedTypeText.style.display = "block";
    selectedTypeText.innerHTML = `Monthly Repayment Amount: 
    <br />
    £${sum.toFixed(2)} per month`;

    // Display total payment
    totalRepayment.style.display = "block";
    totalRepayment.innerHTML = `
    Total Payment: 
    <br />
    £${(sum * 12 * terms).toFixed(2)} `;
  } else {
    selectedTypeText.innerHTML = "Please select a valid mortgage type";
  }
}
