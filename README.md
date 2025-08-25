# BankAccountExercise

## Project Purpose
This project demonstrates a simple bank account system implemented in JavaScript, featuring deposit, withdrawal, and transfer operations. It is designed for educational purposes, focusing on best practices in validation, error handling, and unit testing.

## Summary of Changes
- Implemented the `BankAccount` class with robust validation and error handling for all operations.
- Added detailed inline documentation and JSDoc comments for all public properties and methods.
- Created comprehensive unit tests for the `deposit` method using Jest, covering positive, zero, and negative deposit scenarios.
- Ensured all code is clear, maintainable, and robust against edge cases such as insufficient funds and invalid input.

## Project Structure
```
BankAccountExercise/
├── BankAccountProject/
│   ├── bankAccount.js
│   ├── insufficientFundsException.js
│   └── package.json
├── BankAccountProject.Tests/
│   ├── bankAccount.test.js
│   └── package.json
└── README.md
```

## Running the Application
This project is focused on the `BankAccount` class logic and its unit tests. To run the tests:

1. Open a terminal and navigate to the `BankAccountProject.Tests` folder:
   ```sh
   cd BankAccountProject.Tests
   ```
2. Install dependencies (if not already done):
   ```sh
   npm install
   ```
3. Run the unit tests:
   ```sh
   npm test
   ```

## Notes
- The `BankAccount` class is thoroughly documented with inline comments and JSDoc.
- All edge cases, such as invalid deposit/withdrawal amounts and null references in transfers, are handled.
- The test suite uses Jest and can be extended to cover additional methods and scenarios.
