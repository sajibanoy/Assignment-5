// card-01
document.getElementById("btn-donate-1").addEventListener("click", function () {
  // Get current flood donation amount
  const floodDonationNumber = document.getElementById("flood-amount").innerText;
  const floodDonationAmount = parseFloat(floodDonationNumber);

  // Get current main balance
  const mainBalanceNumber = document.getElementById("main-balance").innerText;
  const mainBalanceAmount = parseFloat(mainBalanceNumber);

  // Get the donation input value
  const donationNumber = document.getElementById("input-donation-1").value;
  const donationAmount = parseFloat(donationNumber);

  // Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Failed To Donate: Please enter a valid donation amount");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Failed To Donate: Insufficient balance");
  } else {
    // Update flood donation amount
    const newFloodDonationAmount = floodDonationAmount + donationAmount;
    document.getElementById("flood-amount").innerText = newFloodDonationAmount;

    // Deduct from main balance
    const newMainBalanceAmount = mainBalanceAmount - donationAmount;
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
  const reliefDonationNumber =
    document.getElementById("relief-amount").innerText;
  const reliefDonationAmount = parseFloat(reliefDonationNumber);

  // Get current main balance
  const mainBalanceNumber = document.getElementById("main-balance").innerText;
  const mainBalanceAmount = parseFloat(mainBalanceNumber);

  // Get the donation input value (unique to this card)
  const donationNumber = document.getElementById("input-donation-2").value;
  const donationAmount = parseFloat(donationNumber);

  // Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Failed To Donate: Please enter a valid donation amount");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Failed To Donate: Insufficient balance");
  } else {
    // Update relief donation amount
    const newReliefDonationAmount = reliefDonationAmount + donationAmount;
    document.getElementById("relief-amount").innerText =
      newReliefDonationAmount;

    // Deduct from main balance
    const newMainBalanceAmount = mainBalanceAmount - donationAmount;
    document.getElementById("main-balance").innerText = newMainBalanceAmount;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
  }
});

// card-03
document.getElementById("btn-donate-3").addEventListener("click", function () {
  // Get current aid donation amount
  const aidDonationNumber = document.getElementById("aid-amount").innerText;
  const aidDonationAmount = parseFloat(aidDonationNumber);

  // Get current main balance
  const mainBalanceNumber = document.getElementById("main-balance").innerText;
  const mainBalanceAmount = parseFloat(mainBalanceNumber);

  // Get the donation input value (unique to this card)
  const donationNumber = document.getElementById("input-donation-3").value;
  const donationAmount = parseFloat(donationNumber);

  // Validation
  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Failed To Donate: Please enter a valid donation amount");
  } else if (donationAmount > mainBalanceAmount) {
    alert("Failed To Donate: Insufficient balance");
  } else {
    // Update aid donation amount
    const newAidDonationAmount = aidDonationAmount + donationAmount;
    document.getElementById("aid-amount").innerText = newAidDonationAmount;

    // Deduct from main balance
    const newMainBalanceAmount = mainBalanceAmount - donationAmount;
    document.getElementById("main-balance").innerText = newMainBalanceAmount;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");
  }
});

// document.querySelectorAll(".btn-donate-now").forEach(function (button, index) {
//   button.addEventListener("click", function () {
//     const donationInput = button.previousElementSibling.value;
//     const donationAmount = parseFloat(donationInput);

//     // Select the corresponding flood amount and update it
//     const donationAmountId = button.parentElement.querySelector(".donation-amount");
//     const floodDonationNumber = donationAmountId.innerText;
//     const floodDonationAmount = parseFloat(floodDonationNumber);

//     // Get the current main balance
//     const mainBalanceNumber = document.getElementById("main-balance").innerText;
//     const mainBalanceAmount = parseFloat(mainBalanceNumber);

//     // Validation and Deduction Process
//     if (validateDonation(donationAmount, mainBalanceAmount)) {
//       updateDonationAmount(donationAmountId, floodDonationAmount, donationAmount);
//       deductFromBalance(mainBalanceAmount, donationAmount);
//       showSuccessModal();
//     }
//   });
// });

// document.getElementById("closeModal").addEventListener("click", function () {
//   document.getElementById("successModal").classList.add("hidden");
// });

// // Common function to update donation amount for each card
// function updateDonationAmount(donationAmountId, currentAmount, donationAmount) {
//   const newAmount = currentAmount + donationAmount;
//   donationAmountId.innerText = newAmount;
// }

// // Common function to deduct donation from the main balance
// function deductFromBalance(currentBalance, donationAmount) {
//   const newBalance = currentBalance - donationAmount;
//   document.getElementById("main-balance").innerText = newBalance;
// }

// // Function to validate donation input
// function validateDonation(donationAmount, mainBalanceAmount) {
//   if (isNaN(donationAmount) || donationAmount <= 0) {
//     alert("Failed To Donate: Please enter a valid donation amount");
//     return false;
//   } else if (donationAmount > mainBalanceAmount) {
//     alert("Failed To Donate: Insufficient balance");
//     return false;
//   }
//   return true;
// }

// // Function to show success modal
// function showSuccessModal() {
//   document.getElementById("successModal").classList.remove("hidden");
// }
