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


        login(user.username, user.balance, user.transactions, user.isLoggedIn)
        return navigate('/')
    }

    const handleLogin = () => {

        try {
            let user = JSON.parse(localStorage.getItem('user'))
            
            if(user.username != username || user.password != password){
                return alert("Incorrect username or password")
            }

            user.isLoggedIn = true
            localStorage.setItem('user', JSON.stringify(user))
            login(user.username, user.balance, user.transactions, user.isLoggedIn)
            return navigate('/')
        } catch (error) {
            console.log(error)
            alert("An error occured. Check console for details")
        }
        
    }

    return(
        <section className="auth">
            <div className="auth_body">
                <h1>{type == '/login'?'Login': type == '/register'?'Register': ''}</h1>
                <div className="form-field">
                    <input 
                        type="text" 
                        id="username"
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-field">
                    <input 
                        type="password" 
                        id="password"
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <button onClick={type == '/login'? handleLogin: handleRegister}>
                    {type == '/login'?'Login': type == '/register'?'Register': ''}
                </button>

                { location.pathname == '/login' && (
                    <p>Not yet registered? <span><Link to={'/register'}>Register</Link></span></p>
                )}
            </div>
        </section>
    )
}

export default Auth