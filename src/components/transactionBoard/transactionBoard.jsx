import './transactionBoard.css'
import React, { useEffect } from 'react'
import useBankStore from '../../store/bankStore'


function TransactionBoard() {
    const { balance, transactions, deposit } = useBankStore()
    let user = JSON.parse(localStorage.getItem("user"))
    
    return (
        <div className='transactionboard'>
            <h2>Transactions</h2>
            {
                user?.isLoggedIn && (
                    <>
                         <div className='balance'>
                            <p>Balance</p>
                            <p>{balance}</p>
                        </div>
                        <div className='all_transactions'>
                            { transactions.map((transaction, index) => (
                                
                                    <div key={index} className='trans'>
                                        <p>{transaction.type}</p>
                                        <p>{transaction.amount}</p>
                                    </div>
                            ))}
                        </div>
                    </>
                )
            }
           
        </div>
    )
}

export default TransactionBoard