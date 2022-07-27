import React from 'react'
import './header.css'
import resume from '../../assets/Marlon-Quito.pdf'
import {BsGithub} from 'react-icons/bs'
import {BsFillFileEarmarkFill} from 'react-icons/bs'
import {BsChatLeftDotsFill} from 'react-icons/bs'

const Resume = () => {
  return (
    <div className="resume">
        <a className='btn btn-primary column-flex' href={resume} download> <BsFillFileEarmarkFill/> My Resume</a>
        <a className='btn btn-primary column-flex' href="https://github.com/A-Wonderfull-Galaxy" rel='noreferrer' target="_blank"> <BsGithub/> My github page! </a>
        <a className="btn btn-primary column-flex" href="#contact"><BsChatLeftDotsFill/> Let's Talk</a>
    </div>
  )
}

export default Resume