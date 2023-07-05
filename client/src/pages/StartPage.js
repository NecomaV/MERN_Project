import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/startPage.css'
export const StartPage = () => {
    const navig = useNavigate()
    function redToLog() {
        navig('/login')
    }

  return (
    <div className='start'>
        <div className="start__header">
            <nav>
                <ul className='start__header_links'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contacts</li>
                </ul>
                <ul className='start__header_butts'>
                    <li><a onClick={redToLog}>Sign In</a></li>
                    <li>Register</li>
                </ul>
            </nav> 
        </div>
        <div className="start__main">
            <div className="start__main_text">
                <h1>Welcome to smthing?</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel facilis placeat nulla repellendus! Cum at quas ea! Culpa rem pariatur enim, harum repudiandae modi architecto laborum ducimus placeat id dignissimos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit illo doloremque ipsam, incidunt labore quae temporibus unde nisi error, mollitia, provident atque id illum iure porro voluptates! Sint, amet!</p>
            </div>
        </div>
        <div className="start__main_img">
            <img src="" alt="" />
        </div>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
  )
}
