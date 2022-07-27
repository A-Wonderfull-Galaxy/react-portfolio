import React from 'react'
import './header.css'
import Resume from './Resume' 
import Me from '../../assets/me-placeholder.jpg'
import {BsArrowDown} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h1>Hello I'm Marlon Quito!</h1>
            <h2>This is my React Portfolio</h2> 
            <h3 className="text-white-2">I am a fullstack Developer</h3>

            <div className='container-box'>
                <Resume />
                <img className='me' src={Me} alt="me" />
            </div>
           

            <div>
                
            </div>

            <a href="#contact" className="scroll__down"><BsArrowDown/>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header