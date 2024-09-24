// Function to add donation to history
function addToHistory(cardName, donationAmount) {
  const historyList = document.getElementById("history-list");
  const historyItem = document.createElement("div");
  historyItem.className = "p-2 bg-white rounded mt-2 shadow";
  const now = new Date();
  historyItem.innerHTML = `Donated ${donationAmount} BDT for <strong>${cardName}</strong> on ${now.toLocaleString()}`;
  historyList.appendChild(historyItem);
}

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

    // Add donation to history
    addToHistory("Flood at Noakhali, Bangladesh", donationAmount);

    // Clear the input field
    document.getElementById("input-donation-1").value = "";
  }
});

// History Button functionality
document.getElementById("btn-history").addEventListener("click", function () {
  // Hide the donation section
  document.getElementById("donation-page").classList.add("hidden");

  // Show the history section
  document.getElementById("history-section").classList.remove("hidden");
});

// Close the success modal
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

  // Get the donation input value
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

    // Add donation to history
    addToHistory("For flood relief in Feni, Bangladesh", donationAmount);

    // Clear the input field
    document.getElementById("input-donation-1").value = "";
  }
});

// History Button functionality
document.getElementById("btn-history").addEventListener("click", function () {
  // Hide the donation section
  document.getElementById("donation-page").classList.add("hidden");

  // Show the history section
  document.getElementById("history-section").classList.remove("hidden");
});

// Close the success modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("successModal").classList.add("hidden");
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

    // Add donation to history
    addToHistory("Aid for injured in the Quota movement", donationAmount);

    // Clear the input field
    document.getElementById("input-donation-1").value = "";
  }
});

// Function to show donation page and hide history
function showDonationPage() {
  document.getElementById("donation-page").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document
    .getElementById("btn-donation")
    .classList.add(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );
  document
    .getElementById("btn-donation")
    .classList.remove("bg-gray-100", "text-black");
  document
    .getElementById("btn-history")
    .classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );
  document
    .getElementById("btn-history")
    .classList.add("bg-gray-100", "text-black");
}

// Function to show history section and hide donation page
function showHistoryPage() {
  document.getElementById("donation-page").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
  document
    .getElementById("btn-history")
    .classList.add(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );
  document
    .getElementById("btn-history")
    .classList.remove("bg-gray-100", "text-black");
  document
    .getElementById("btn-donation")
    .classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-purple-600",
      "text-white"
    );
  document
    .getElementById("btn-donation")
    .classList.add("bg-gray-100", "text-black");
}

// Add event listener to donation button
document
  .getElementById("btn-donation")
  .addEventListener("click", showDonationPage);

// Add event listener to history button
document
  .getElementById("btn-history")
  .addEventListener("click", showHistoryPage);
