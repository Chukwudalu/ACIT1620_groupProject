import { useState } from 'react'
import './auth.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useBankStore from '../../store/bankStore'
const Auth = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useBankStore()

    const navigate = useNavigate()
    const location = useLocation()
    let type = location.pathname

    
    const handleRegister = () => {

        let user = {
            username: username,
            password: password,
            isLoggedIn: true,
            balance: 0,
            transactions: []
        }
        
        localStorage.setItem('user', JSON.stringify(user))
        login(user.username, user.balance, user.transactions)

        return navigate('/')
    }

    const handleLogin = () => {
        // Check if the user is has an account. If the user is registered, the data will be in the localstorage
        let user = JSON.parse(localStorage.getItem('user'))
        if (!user){
            return alert('no user data exists. Please create an account')
        } 
        
        // If the user does not have a account, the user is prompted to try again
        try {
            if (user.username != username || user.password != password){
                throw new Error('Incorrect username or password')
            }
        } catch (error) {
            return alert(error)
        }
        // If the login info is correct, the user data is saved to state and user is rerouted to home page
        login(user.username, user.balance, user.transactions)
        
        return navigate('/')
    }

    
    
    

    return(
        <section className="auth">
            <div className="auth_body">
                <h1>{type == '/login'?'Login': type == '/register'?'Register': ''}</h1>
                <div className="auth_body_username">
                    <label htmlFor="username"></label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="auth_body_password">
                    <label htmlFor="password"></label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button onClick={type == '/login'? handleLogin: handleRegister}>{type == '/login'?'Login': type == '/register'?'Register': ''}</button>

                { location.pathname == '/login' && (<p>No yet registered ? <span><Link to={'/register'}>register</Link></span></p>)}
                
            </div>
        </section>
    )
}

export default Auth