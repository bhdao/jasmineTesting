window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

let amount, years, rate, finalOutput;
let initVals = { amount: 2000, years: 2, rate: 0.05 };

// Get the inputs from the DOM. ✅
// Put some default values in the inputs ✅
// Call a function to calculate the current monthly payment ✅
function setupInitialValues() {
  amount = document.getElementById("loan-amount");
  years = document.getElementById("loan-years");
  rate = document.getElementById("loan-rate");
  finalOutput = document.getElementById("monthly-payment");

  amount.value = initVals["amount"];
  years.value = initVals["years"];
  rate.value = initVals["rate"];

  calculateMonthlyPayment(getCurrentUIValues());
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currVals = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(currVals);
  console.log(monthlyPayment);
  finalOutput.textContent = monthlyPayment;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = values["rate"] / 12;
  let numPayments = values["years"] * 12;

  console.log(`Yearly Rate: ${values["rate"]} \nMonthly Rate: ${monthlyRate}`);
  let top = values["amount"] * monthlyRate;
  let bottom = 1 - Math.pow(1 + monthlyRate, -numPayments);
  
  const paymentValue =  Math.round(top / bottom *100) /100;
  console.log(paymentValue.toString());
  return paymentValue.toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {

}
