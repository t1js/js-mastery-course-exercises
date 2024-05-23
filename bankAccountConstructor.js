/* Create a BankAccount constructor function that models a real-world bank account, allowing
for deposits, withdrawals, and balance inquiries. The key is to ensure that the
balance cannot be directly accessed or modified outside of the designated
methods, encapsulating the balance within the constructor function. */

/* Define the Constructor:
The constructor should accept two parameters: owner (the name of the
account holder) and initialBalance (the starting balance of the account).
The balance should be a private variable, not accessible outside the
constructor directly. */


/* Implement Deposit Method:
Add a deposit method that takes an amount as an argument.
The method should check if the amount is positive. If it is, add it to the
balance and print a confirmation message with the deposited amount and
the new balance.
If the amount is not positive, print an error message stating that the
deposit amount must be positive. */


/* Implement Withdrawal Method:
Add a withdraw method that takes an amount as an argument.
The method should check if the balance is sufficient for the withdrawal. If
it is, subtract the amount from the balance and print a confirmation
message with the withdrawn amount and the new balance.
If there isn’t enough balance, print an error message indicating insufficient
funds. */


/* Implement Get Balance Method:
Add a getBalance method that allows checking the current balance.
This method should simply return the current balance without allowing any
modifications to it. */


/* Testing and Validation:
Create an instance of BankAccount with a sample owner name and initial
balance.
Test all methods to ensure they handle various scenarios correctly, such
as valid and invalid deposit and withdrawal amounts, and checking
balance. */
