class Account {
  constructor() {
    this.transaction = []
  }

  get balance () {
    let balance = 0
    for(let t of this.transaction){
      balance += t.value
    }
    return balance
  }

  addTransaction(transaction){
    this.transaction.push(transaction)
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit(){
    if(!this.isAllowed()) return false
    this.time = new Date()
    this.account.addTransaction(this)
    return true
    // this.account.balance =+ this.value
  }

}

class Withdrawal extends Transaction{
  get value() {
    return -this.amount
  }
  isAllowed() {
    //note how it had access to this.account becuase of the parent class
    return (this.account.balance - this.amount >= 0)
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account();

console.log('STARTING BALANCE', myAccount.balance)








t3 = new Deposit(30.89, myAccount)
t3.commit()
t1 = new Withdrawal(8.25, myAccount)
t1.commit()
t4 = new Deposit(90.89, myAccount)
 t4.commit()
 t2 = new Withdrawal(9.99, myAccount)
 t2.commit()

console.log('ENDING BALANCE', myAccount.balance)
console.log('account Transaction History:', myAccount.transaction)


