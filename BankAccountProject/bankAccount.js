const InsufficientFundsException = require("./insufficientFundsException");

// This class provides basic deposit, withdraw, and transfer functionality for a bank account.
// Note: Some validation is intentionally missing for exercise purposes.

/**
 * Represents a bank account.
 */
/**
 * Represents a bank account with basic deposit, withdraw, and transfer functionality.
 */
class BankAccount {

    /**
     * Constructs a new BankAccount instance.
     * @param {string|number} accountNumber - The unique identifier for the account.
     * @param {number} initialBalance - The starting balance for the account (default is 0).
     */
    /**
     * The unique identifier for the account.
     * @type {string|number}
     */
    accountNumber;

    /**
     * The current balance of the account.
     * @type {number}
     */
    balance;

    /**
     * Constructs a new BankAccount instance.
     * @param {string|number} accountNumber - The unique identifier for the account.
     * @param {number} initialBalance - The starting balance for the account (default is 0).
     */
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber; // Store the account number for identification.
        this.balance = initialBalance;      // Initialize the account balance.
    }


    /**
     * Deposits a specified amount into the account.
     * @param {number} amount - The amount to deposit. Must be greater than zero.
     * @throws {Error} If the deposit amount is not positive.
     */
    /**
     * Deposits a specified amount into the account.
     * @param {number} amount - The amount to deposit. Must be greater than zero.
     * @throws {Error} If the deposit amount is not positive.
     */
    deposit(amount) {
        // Validate that the deposit amount is positive.
        // This prevents accidental or malicious negative/zero deposits.
        if (amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }
        // Add the validated amount to the balance.
        this.balance += amount;
    }


    /**
     * Withdraws a specified amount from the account if sufficient funds exist.
     * @param {number} amount - The amount to withdraw. Must be greater than zero and less than or equal to the balance.
     * @throws {Error} If the withdrawal amount is not positive.
     * @throws {InsufficientFundsException} If there are not enough funds in the account.
     */
    /**
     * Withdraws a specified amount from the account if sufficient funds exist.
     * @param {number} amount - The amount to withdraw. Must be greater than zero and less than or equal to the balance.
     * @throws {Error} If the withdrawal amount is not positive.
     * @throws {InsufficientFundsException} If there are not enough funds in the account.
     */
    withdraw(amount) {
        // Validate that the withdrawal amount is positive.
        // Prevents nonsensical or malicious withdrawals.
        if (amount <= 0) {
            throw new Error("Withdraw amount must be greater than zero.");
        }
        // Check for sufficient funds before allowing withdrawal.
        // This ensures the account cannot be overdrawn.
        if (amount > this.balance) {
            throw new InsufficientFundsException("Not enough funds to withdraw.");
        }
        // Subtract the validated amount from the balance.
        this.balance -= amount;
    }

    /**
     * Transfers a specified amount from this account to another account.
     * @param {BankAccount} targetAccount - The account to receive the funds. Must not be null or undefined.
     * @param {number} amount - The amount to transfer. Must be greater than zero and less than or equal to the balance.
     * @throws {Error} If the target account is not provided or the amount is not positive.
     * @throws {InsufficientFundsException} If there are not enough funds to transfer.
     *
     * Implementation Note:
     * - Checks for a valid target account reference to avoid runtime errors.
     * - Validates the transfer amount and available funds before proceeding.
     * - If withdraw fails, deposit is not called (ensures atomicity for this simple case).
     *   In real-world scenarios, consider using transactions or try/catch to handle partial failures.
     */
    /**
     * Transfers a specified amount from this account to another account.
     * @param {BankAccount} targetAccount - The account to receive the funds. Must not be null or undefined.
     * @param {number} amount - The amount to transfer. Must be greater than zero and less than or equal to the balance.
     * @throws {Error} If the target account is not provided or the amount is not positive.
     * @throws {InsufficientFundsException} If there are not enough funds to transfer.
     */
    transfer(targetAccount, amount) {
        // Ensure the target account is provided and valid.
        if (!targetAccount) {
            throw new Error("Target account must be provided for transfer.");
        }
        // Validate that the transfer amount is positive.
        if (amount <= 0) {
            throw new Error("Transfer amount must be greater than zero.");
        }
        // Check for sufficient funds before attempting withdrawal.
        if (amount > this.balance) {
            throw new InsufficientFundsException("Not enough funds to transfer.");
        }
        // Withdraw from this account; if this fails, deposit is not attempted.
        this.withdraw(amount);
        // Deposit into the target account.
        targetAccount.deposit(amount);
    }
}

// Suggestion: Add input validation to prevent negative or zero transactions for more robust code.
module.exports = BankAccount;
