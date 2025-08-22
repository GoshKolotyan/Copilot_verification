/**
 * Custom error to indicate insufficient funds.
 */
class InsufficientFundsException extends Error {
    /**
     * Creates a new InsufficientFundsException.
     * @param {string} message - The error message.
     */
    constructor(message) {
        super(message);
        this.name = "InsufficientFundsException";
    }
}

module.exports = InsufficientFundsException;
