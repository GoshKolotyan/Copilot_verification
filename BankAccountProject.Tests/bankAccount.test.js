const BankAccount = require('../BankAccountProject/bankAccount');

describe('BankAccount', () => {
    test('Deposit_WithPositiveAmount_IncreasesBalance', () => {
        // Arrange
        const account = new BankAccount('ACC789', 100);
        const depositAmount = 50;
        
        // Act
        account.deposit(depositAmount);
        
        // Assert
        expect(account.balance).toBe(150);
    });

    test('Deposit_WithNegativeAmount_ThrowsException', () => {
        // Arrange
        const account = new BankAccount('ACC789', 100);
        const depositAmount = -50;
        
        // Act & Assert
        expect(() => account.deposit(depositAmount)).toThrow(Error);
    });

    test('Deposit_WithZeroAmount_ThrowsException', () => {
        // Arrange
        const account = new BankAccount('ACC789', 100);
        const depositAmount = 0;
        
        // Act & Assert
        expect(() => account.deposit(depositAmount)).toThrow(Error);
    });
});
