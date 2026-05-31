function BankAccount(accNo, holder, balance) {
    this.accNo = accNo;
    this.holder = holder;
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance += amount;
        console.log(`${amount}  is deposited to ${this.accNo}`);
        console.log(`Available Balance: ${this.balance} `);
    }
    this.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${this.accNo} is debited by ${amount} `);
            console.log(`Available Balance: ${this.balance} `);
        }else{
            console.log("No sufficient balance");
        }
    }
    this.checkBalance= function(){
        console.log(`Available Balance is ${this.balance}`);
    }
}

let acc1 = new BankAccount("SBI0012345", "Sarvjeet", 15000);
let acc2 = new BankAccount("HDFC0012345", "Deepak", 20000);
let acc3 = new BankAccount("ICICI0012345", "Priyesh", 25000);
acc1.deposit(2000);
acc1.checkBalance();
acc2.withdraw(10000);
acc2.checkBalance();
acc3.withdraw(7000);
acc3.checkBalance();