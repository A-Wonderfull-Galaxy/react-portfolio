import React from 'react'
import './nav.css'
import {IoIosHome} from 'react-icons/io'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import{SiFiles} from 'react-icons/si'
import{AiFillContacts} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav className='nav-container'>
      <a className='nav' href="#Home"><IoIosHome/></a>
      <a className='nav' href='#About'><BsFillPersonLinesFill/></a>
      <a className='nav' href='#Portfolio'><SiFiles/></a>
      <a className='nav' href='#Contact'><AiFillContacts/></a>
    </nav>
  )
}

export default Nav
