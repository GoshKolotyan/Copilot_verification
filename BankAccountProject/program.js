const BankAccount = require("./bankAccount");
const InsufficientFundsException = require("./insufficientFundsException");

function main() {
    // Create two bank accounts
    const account1 = new BankAccount("ACC123", 1000);
    const account2 = new BankAccount("ACC456", 500);

    console.log("Initial Balances:");
    console.log(`Account ${account1.accountNumber}: ${account1.balance}`);
    console.log(`Account ${account2.accountNumber}: ${account2.balance}`);

    // Perform deposit on account1
    account1.deposit(200);

    // Attempt withdrawal on account2 (should throw error if insufficient funds)
    try {
        account2.withdraw(600); // This should trigger an exception for insufficient funds.
    } catch (ex) {
        console.log(`Error during withdrawal: ${ex.message}`);
    }

    // Perform transfer from account1 to account2
    try {
        account1.transfer(account2, 300);
    } catch (ex) {
        console.log(`Error during transfer: ${ex.message}`);
    }

    console.log("Final Balances:");
    console.log(`Account ${account1.accountNumber}: ${account1.balance}`);
    console.log(`Account ${account2.accountNumber}: ${account2.balance}`);
}

main();
