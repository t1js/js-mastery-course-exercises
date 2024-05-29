import BankAccountConstructor from '../bank-account/bankAccountConstructor.js';

let testInstance = new BankAccountConstructor("Test User", 50);

testInstance.deposit(500);
testInstance.withdraw(80);
testInstance.deposit(-2);
testInstance.withdraw(1000);
testInstance.getBalance();
