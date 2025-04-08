import { useState, useEffect } from 'react'
import './transaction.css'
import useBankStore from '../../store/bankStore'
import { useLocation} from 'react-router-dom'

const Transaction = function(){
    // const types = ['withdraw', 'deposit']
    const location = useLocation()
    // const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const { balance, withdraw, deposit} = useBankStore()
    let user = JSON.parse(localStorage.getItem("user"))

    const type = location.pathname.split('/').slice(-1)
    
    const parseDay = (day) => {
        const weekmap = {
          0: 'Sunday',
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: 'Friday',
          6: 'Saturday'
        };
        return weekmap[day];
      };

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleTransaction = () => {
        try {

            if(type == 'withdraw'){
                if(parseFloat(amount) < parseFloat(balance)){
                    withdraw(parseFloat(amount))
                    let transaction = {type: 'withdrawal', amount: amount, day: parseDay(new Date().getDay())}
                    user.transactions = [...user.transactions, transaction]
                    localStorage.setItem("user", JSON.stringify(user))
                    setAmount('')
                    alert("trransaction successful")
                }else{
                    alert("insufficient balance")
                }
            }
            else if (type == 'deposit') {
                deposit(parseFloat(amount))
                let transaction = {type: 'deposit', amount: amount, day: parseDay(new Date().getDay())}
                user.transactions = [...user.transactions, transaction]
                localStorage.setItem("user", JSON.stringify(user))
                setAmount('')
                alert("transaction successful")
            }
            
        } catch (error) {
            console.log(error)
        }
    }


    
    return(
        <section className="transaction">
            <h1 className="transaction_header">{type}</h1>
            <div className="transaction_container">
                <div className="transaction_container transaction_countainer_amount">
                    <label htmlFor="amount">Amount</label>
                    <input type="text" name="amount" value={amount} onChange={handleAmountChange}/>
                </div>

                <p>Balance : {balance}</p>
                <button className="transaction_button" onClick={handleTransaction}>{type}</button>
            </div>
        </section>
    )
    
}

export default Transaction