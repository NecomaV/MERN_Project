import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/register.css'

function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    function redToLogin(){
        navigate('/login')
    }

    function redToMain(){
        navigate('/')
    }

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),

        })

        const data = await response.json()
        console.log(data)

        if(data.status === 'ok'){
            navigate('/login')
        }
    }


  return (
    <div className='main__reg'>
        <h1 className='main__reg_h1'>Register</h1>
        <form className='main__reg_form' onSubmit={registerUser}>
            <input 
            type="text"
            placeholder='Enter a name'
            value={name}
            onChange={(e) => setName(e.target.value)} 
            />
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
            placeholder='Enter a passsword'
            onChange={(e) => setPassword(e.target.value)} 
            />
            <br/>
            <input className='main__reg_but' type="submit" value="Register" />
        </form>
        <a className='link_' onClick={redToLogin}> Already have an account ? </a>
        <a className='link_' onClick={redToMain}> Back to Main Page </a>
    </div>
  )
}

export default Register