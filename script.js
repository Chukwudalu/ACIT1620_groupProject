


let balance = 0

if (localStorage.getItem("Balance") == null){
    localStorage.setItem("Balance", balance)
}



let message = document.getElementById("message")

function deposit(){
    let amountValue = parseFloat(document.getElementById("amount").value)

    if(isNaN(amountValue) || amountValue < 0){
        message.innerText = `Please enter a valid amount`
        return
    }

    let balance = parseFloat(localStorage.getItem("Balance")) ||  0
    balance += amountValue
    localStorage.setItem("Balance", balance)
    message.innerText = `Your balance is ${balance}`
}


function withdraw(){
    // Get the value of the amount
    let amountValue = parseFloat(document.getElementById("amount").value)
    if (isNaN(amountValue) || amountValue < 0){
        message.innerText = `Please enter a valid amount`
        return
    }

    // Get the value of the balance in local storage
    let balance = parseFloat(localStorage.getItem("Balance")) || 0
    if (amountValue > balance){
        message.innerText = `Insufficient balance`
        return
    }

    let new_balance = balance - amountValue
    localStorage.setItem("Balance", new_balance)
    message.innerText = `Your balance is ${new_balance}`
}


function invest(){
    // This function calculates the returns on investments when a customer invests
    // an amount over a period of time, using 7.4% interest rate
    let amount = document.getElementById("amount")
    let time = document.getElementById("time")
    let interestRate = 0.074
    let total = document.getElementById("total")

    if (amount.value == '' || time.value == ''){
        alert("To invest, please enter the amount you wish to invest and the amount of time")
    }
    
    let interest = amount * interestRate * time
    total = amount + interest 

    showTotal.innerText = `$${total}`

}

