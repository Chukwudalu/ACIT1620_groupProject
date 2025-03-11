let username = document.getElementById("username")
let password = document.getElementById("password")

if (localStorage.getItem("user") == null){
    localStorage.setItem("user", JSON.stringify({username:'', password:''}))
}

function register(){
    if (username.value == '' || password.value == ''){
        alert('You cannot register without a username and passord. please try again')
        return
    }

    const new_user = {
        username: username.value.toLowerCase(),
        password: username.value
    }

    localStorage.setItem("user", JSON.stringify(new_user))
}

function login(){
    user = JSON.parse(localStorage.getItem("user"))
    console.log(user.password)
    console.log(password.value)

    if (username.value == '' || password.value == ''){
        alert('You cannot login without a username or passord. please try again')
        return
    }
    
    if (username.value.toLowerCase() != user.username.toLowerCase() || password.value != user.password){
        alert('Incorrect username or password')
        return
    }

    window.location.href = '/'
}