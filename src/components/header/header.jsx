import React from 'react'
import './header.css'
import { Link, useNavigate } from "react-router-dom";
import useBankStore from '../../store/bankStore';
function Header() {
    const { isLoggedin, logout } = useBankStore()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        let user = JSON.parse(localStorage.getItem("user"))
        localStorage.setItem('user', JSON.stringify({...user, isLoggedIn: false}))
    }

    

    let user = JSON.parse(localStorage.getItem("user"))
    return (
        <div className='header'>
            <h1 onClick={() => navigate('/')} className='header_title'>NuBank</h1>
            <nav className='header_links'>
                {user?.isLoggedIn && (
                    <>
                        <Link to='/transactions/deposit' className='link deposit'>Deposit</Link>
                        <Link to='/transactions/withdraw' className='link withdraw'>Withdraw</Link>
                        <Link onClick={handleLogout} className='link logout'>Logout</Link>
                    </>
                )}
                {!user?.isLoggedIn && (
                    <Link to='/login' className='link login'>Login</Link>
                )}
            </nav>
        </div>
    )
}

export default Header