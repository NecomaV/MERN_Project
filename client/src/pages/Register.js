import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
    <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
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
            onChange={(e) => setPassword(e.target.value)} 
            />
            <br/>
            <input type="submit" value="Register" />
        </form>

    </div>
  )
}

export default Register