// Banks
let bankBalances = {
  "UBA Bank": 1000, // Balance in uba
  "Access Bank": 500, // Balance in access
  "Keystone Bank": 800, // Balance in keystone
};
// user pin
let Userpin = {
  "UBA Bank": "1234",
  "Access Bank": "3344",
  "Keystone Bank": "1998",
};

// List of banks
let fromBank = prompt(
  "Select the bank to transfer FROM:\n1.UBA Bank \n2. Access Bank\n3. Keystone Bank"
);

// Convert selection to bank name
fromBank =
  fromBank === "1"
    ? "UBA Bank"
    : fromBank === "2"
    ? "Access Bank"
    : fromBank === "3"
    ? "Keystone Bank"
    : null;

if (!fromBank || !bankBalances[fromBank]) {
  alert("Invalid bank.");
} else {
  //  user account number
  let fromAccountNumber = prompt(`Enter your account number for ${fromBank}:`);

  if (fromAccountNumber.length < 10) {
    alert("Invalid account number.");
  } else {
    // bank you are transferring it to
    let toBank = prompt(
      "Select the bank to transfer TO:\n1. UBA Bank\n2. Access Bank\n3. Keystone Bank"
    );

    // Convert selection to bank name
    toBank =
      toBank === "1"
        ? "UBA Bank"
        : toBank === "2"
        ? "Access Bank"
        : toBank === "3"
        ? "Keystone Bank"
        : null;

    if (!toBank || !bankBalances[toBank]) {
      alert("Invalid bank .");
    } else if (toBank === fromBank) {
      alert("Cannot transfer to the same bank.");
    } else {
      //  amount to transfer
      let amount = prompt("Please enter the amount you want to transfer:");

      // Ensure the amount is a valid number and there are sufficient funds
      if (isNaN(amount) || amount <= 0) {
        alert("Please enter from 50naira above.");
      } else if (amount > bankBalances[fromBank]) {
        alert("Insufficient funds in your account.");
      } else {
        //  Confirm the transfer details
        let confirmTransfer = confirm(
          `You are about to transfer ${amount} from ${fromBank} to ${toBank}. Click OK to proceed`
        );
        //  user to enter their PIN
        let enteredPin = prompt("Enter your 4-digit PIN:");

        // Validate the PIN
        if (enteredPin !== Userpin[fromBank]) {
          alert("Incorrect PIN. Transaction cancelled.");
        } else {
          if (confirmTransfer) {
            // Simulate the transfer process
            bankBalances[fromBank] -= amount;
            bankBalances[toBank] += amount;

            // Display the new balances
            alert(
              `Success! ${amount} has been transferred from ${fromBank} to ${toBank}.\n\nCurrent Balances:\n${fromBank}: ${bankBalances[fromBank]}\n${toBank}: ${bankBalances[toBank]}`
            );
          } else {
            // Display a cancellation message
            alert("Transfer cancelled.");
          }
        }
      }
    }
  }
}
