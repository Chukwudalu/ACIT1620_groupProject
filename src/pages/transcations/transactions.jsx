import { useState } from "react"
import Transaction from "../../components/transaction/transaction"
import './transactions.css'



const Transactions = function(){
    return(
        <section className="transactions">
            <Transaction/>
        </section>
    )
}

export default Transactions