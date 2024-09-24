// card-01
document.getElementById("btn-donate-1").addEventListener("click", function () {
  // Get current flood donation amount
  let floodDonationNumber = document.getElementById("flood-amount").innerText;
  let floodDonationAmount = parseFloat(floodDonationNumber);

  // Get current main balance
  let mainBalanceNumber = document.getElementById("main-balance").innerText;
  let mainBalanceAmount = parseFloat(mainBalanceNumber);

  // Get the donation input value
  let donationNumber = document.getElementById("input-donation-1").value;
  let donationAmount = parseFloat(donationNumber);

  // Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Failed To Donate: Please enter a valid donation amount");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Failed To Donate: Insufficient balance");
  } else {
    // Update flood donation amount
    let newFloodDonationAmount = floodDonationAmount + donationAmount;
    document.getElementById("flood-amount").innerText = newFloodDonationAmount;

    // Deduct from main balance
    let newMainBalanceAmount = mainBalanceAmount - donationAmount;
    document.getElementById("main-balance").innerText = newMainBalanceAmount;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
  }
});

// Close the modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("successModal").classList.add("hidden");
});

// card-02
document.getElementById("btn-donate-2").addEventListener("click", function () {
  // Get current relief donation amount
  let reliefDonationNumber = document.getElementById("relief-amount").innerText;
  let reliefDonationAmount = parseFloat(reliefDonationNumber);

  // Get current main balance
  let mainBalanceNumber = document.getElementById("main-balance").innerText;
  let mainBalanceAmount = parseFloat(mainBalanceNumber);

  // Get the donation input value (unique to this card)
  let donationNumber = document.getElementById("input-donation-2").value;
  let donationAmount = parseFloat(donationNumber);

  // Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Failed To Donate: Please enter a valid donation amount");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Failed To Donate: Insufficient balance");
  } else {
    // Update relief donation amount
    let newReliefDonationAmount = reliefDonationAmount + donationAmount;
    document.getElementById("relief-amount").innerText =
      newReliefDonationAmount;

    // Deduct from main balance
    let newMainBalanceAmount = mainBalanceAmount - donationAmount;
    document.getElementById("main-balance").innerText = newMainBalanceAmount;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
  }
});

// card-03
document.getElementById("btn-donate-3").addEventListener("click", function () {
  // Get current aid donation amount
  let aidDonationNumber = document.getElementById("aid-amount").innerText;
  let aidDonationAmount = parseFloat(aidDonationNumber);

  // Get current main balance
  let mainBalanceNumber = document.getElementById("main-balance").innerText;
  let mainBalanceAmount = parseFloat(mainBalanceNumber);

  // Get the donation input value (unique to this card)
  let donationNumber = document.getElementById("input-donation-3").value;
  let donationAmount = parseFloat(donationNumber);

  // Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Failed To Donate: Please enter a valid donation amount");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Failed To Donate: Insufficient balance");
  } else {
    // Update aid donation amount
    let newAidDonationAmount = aidDonationAmount + donationAmount;
    document.getElementById("aid-amount").innerText = newAidDonationAmount;

    // Deduct from main balance
    let newMainBalanceAmount = mainBalanceAmount - donationAmount;
    document.getElementById("main-balance").innerText = newMainBalanceAmount;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
  }
});

// History Button functionality
let historyButton = document.getElementById("btn-history");
let donationButton = document.getElementById("btn-donation");
historyButton.addEventListener("click", function () {
  historyButton.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  historyButton.classList.remove("bg-gray-100");
  donationButton.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  donationButton.classList.add("bg-gray-100");

  document.getElementById("donation-page").classList.add("hidden");
});
