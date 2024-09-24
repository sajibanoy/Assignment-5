// Add click event listeners to each donate button
const button1 = document.getElementById("btn-flood-donate");
const button2 = document.getElementById("btn-relief-donate");
const button3 = document.getElementById("btn-aid-donate");

button1.addEventListener("click", function () {
  handleDonation("input-donation-1", "donation-amount-1");
});
button2.addEventListener("click", function () {
  handleDonation("input-donation-2", "donation-amount-2");
});
button3.addEventListener("click", function () {
  handleDonation("input-donation-3", "donation-amount-3");
});

// Handle the donation process for each button
function handleDonation(inputId, donationAmountId) {
  // Get the donation input value
  const donationInput = document.getElementById(inputId).value;
  const donationAmount = parseFloat(donationInput);

  // Get the corresponding flood amount
  const floodDonationText = document.getElementById(donationAmountId).innerText;
  const floodDonationAmount = parseFloat(floodDonationText);

  // Get the current main balance
  const mainBalanceText = document.getElementById("main-balance").innerText;
  const mainBalanceAmount = parseFloat(mainBalanceText);

  // Validation and Deduction Process
  if (donationAmount > 0 && donationAmount <= mainBalanceAmount) {
    const newFloodAmount = floodDonationAmount + donationAmount;
    document.getElementById(donationAmountId).innerText = newFloodAmount;

    const newBalance = mainBalanceAmount - donationAmount;
    document.getElementById("main-balance").innerText = newBalance;

    document.getElementById("successModal").classList.remove("hidden");
  } else if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Insufficient balance.");
  }
}

// Close the success modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("successModal").classList.add("hidden");
});
