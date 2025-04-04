import { useEffect, useState } from 'react'
import './transaction.css'
import useBankStore from '../../store/bankStore'
import { useLocation} from 'react-router-dom'

const Transaction = function(){
    // const types = ['withdraw', 'deposit']
    const location = useLocation()
    // const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const { balance, withdraw, deposit, message } = useBankStore()


    const type = location.pathname.split('/').slice(-1)
    

    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }

    const handleTransaction = () => {
        try {

            if(type == 'withdraw'){
                withdraw(parseFloat(amount))
                setAmount('')
                
            }
            else if (type == 'deposit') {
                deposit(parseFloat(amount))
                setAmount('')
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