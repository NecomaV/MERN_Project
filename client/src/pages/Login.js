import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault();
        const response = fetch('http://localhost:5000/api/login', {
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
        console.log(data)
    }


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={loginUser}>
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
            <input type="submit" value="Login" />

        </form>

    </div>
  )
}

export default Login