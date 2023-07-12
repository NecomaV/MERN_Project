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
                <h1>Welcome to smthing?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel facilis placeat nulla repellendus! Cum at quas ea! Culpa rem pariatur enim, harum repudiandae modi architecto laborum ducimus placeat id dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit illo doloremque ipsam, incidunt labore quae temporibus unde nisi error, mollitia, provident atque id illum iure porro voluptates! Sint, amet!</p>
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
