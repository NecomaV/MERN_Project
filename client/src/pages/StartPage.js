import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/startPage.css'
import svg from '../assets/img/undraw_personal_text.svg'

export const StartPage = () => {
    const navig = useNavigate()
    function redToLog() {
        navig('/login')
    }
    function redToRegister(){
        navig('/register')
    }

  return (
    <div className='start'>
        <div className="start__header">
            <nav>
                <ul className='start__header_butts'>
                    <li onClick={redToLog}>Sign In</li>
                    <li onClick={redToRegister}>Register</li>
                    {/* ? */}
                    
                    {/* // */}
                </ul>
            </nav> 
        </div>
        <div className="start__main">
            <div className="start__main_text">
                <h1>Write what you think</h1>
                <p>We understand that words have the ability to penetrate our souls, evoke emotions, and shape our perspectives. Our website is a safe space for you to explore the profound impact of language on your thoughts, feelings, and actions.</p>
                <p>But be warned: this journey is not always comfortable. It requires courage to confront the shadows within, to question your assumptions, and to challenge the narratives that no longer serve you. However, the rewards are immeasurable. By daring to dive into the depths of your own psyche, you'll emerge stronger, wiser, and more in tune with your authentic self.</p>
            </div>
            <div className="start__main_img">
                <img src={svg} alt="svg" />
            </div>
        </div>
        
        <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
        </div>
    </div>
  )
}
