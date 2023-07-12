import React, { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { useNavigate } from 'react-router-dom'
import '../assets/css/dashb.css'


function Dashboard() {
    const navigate = useNavigate()
    const [quote, setQuote] = useState();
    const [tempQuote, setTempQuote] = useState()

    const navig = useNavigate()
    
    function redToMain(){
        navig('/')
    }
    
    async function populateQuote() {
        const req = await fetch('http://localhost:5000/api/dashboard', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        })

        const data = await req.json();
        console.log(data)

        if(data.status === 'ok'){
            setQuote(data.quote)
        }else{ 
            alert(data.error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            
            if(!user) {
                localStorage.removeItem('token')
                navigate.replace('/login')
            }
            else{ 
                populateQuote()
            }
        }
    }, [])

    async function updateQuote(event){
        event.preventDefault()
        const req = await fetch('http://localhost:5000/api/dashboard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                quote: tempQuote,
            })
        })

        const data = await req.json();
        console.log(data)

        if(data.status === 'ok'){
            setQuote(tempQuote)
			setTempQuote('')
        }else{ 
            alert(data.error)
        }
    }

  return (
    <div className='dash__main'>
        <h1>This is your quote:</h1>
        <blockquote>
            <h1 className='dash__main_quote'> {quote || 'No quote found'}</h1>
        </blockquote> 
        
        <form onSubmit={updateQuote} className='dash__main_form'>
            <input 
                type="text"
                placeholder="Quote"
                value={tempQuote || ''}
                onChange={(e) => setTempQuote(e.target.value)}
                className='dash__form_inpt'
            />

            <input className='dash__form_but' type="submit" value="Update quote" />
        </form>

        <a className='link_' id='link' onClick={redToMain}> Back to Main Page </a>

    </div>
  )
}

export default Dashboard