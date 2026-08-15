

function Bank(){
    let total = 0
    function bankops(balance){
        total += balance
        console.log(`your balance is ${total}`)
    }
    return { bankops }
}

const bank = Bank()

bank.bankops(2000)


