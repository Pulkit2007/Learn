
class Bank{
    constructor(account, balance){
        this.account = account;
        this.balance = balance;
    }

    set account(new_account){
        this.account = _new_account

    }
    set account(new_balance){
        this.account = _new_balance

    }

    get account(){
        return this._new_account;
    }

    get balance(){
        return this._new_balance;
    }
}

const b = new Bank("1322", "10000")

console.log(b.account)
console.log(b.balance)

