import React from 'react'
import './acctCard.css'
import useBankStore from '../../store/bankStore'
function AcctCard() {
    const { username } = useBankStore()
    let user = JSON.parse(localStorage.getItem("user"))
    return (
        <div className="credit-card">
            <div className="chip"></div>
            <div className="card-number">1234 5678 9012 3456</div>
            { user?.isLoggedIn && (<div className="card-holder">{username}</div>)}
            
            <div className="expiry">12/26</div>
        </div>
    )
  
}

export default AcctCard