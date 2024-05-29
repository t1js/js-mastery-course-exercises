export default function BankAccountConstructor(owner, initialBalance) {
    this.owner = owner;
    this.balance = initialBalance;
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposit successful. Deposited ${amount}. New balance: ${this.balance}`);
        } else { 
            console.error("The deposit amount must be positive.")
        }
    };
    this.withdraw = function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful. Withdrawed ${amount}. New balance: ${this.balance}`);
        } else {
            console.error("Insufficient funds. The withdrawal amount exceeds balance.")
        }
    };
    this.getBalance = function() {
        return this.balance;
    }
}