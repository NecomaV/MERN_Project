import React, { useState } from 'react'
import '../assets/css/login.css'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navig = useNavigate()
    
    function redToRegister(){
        navig('/register')
    }


    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            }),

        })

        const data = await response.json()
        
        if(data.user){
            localStorage.setItem('token', data.user)
            alert('login successfull')
            window.location.href = '/dashboard'
        }
        else{
            alert('Please check your username and password')
        }
        
        console.log(data)
    }


  return (
    <div className='main__login'>
        <h1 className='main__login_h1'>Login</h1>
        <form className='main__login_form' onSubmit={loginUser}>
            <br/>
            <input 
            type="email"
            placeholder='Enter a email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            />
            <br/>
            <input 
            type="password"
            value={password}
            placeholder='Enter a password'
            onChange={(e) => setPassword(e.target.value)} 
            />
            <br/>
            <input type="submit" className='main__login_but' value="Login" />

        </form>
        <a onClick={redToRegister}> Don't Have and account ? </a>
    </div>
  )
}

export default Login