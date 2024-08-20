import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import './Footer.css'

const Footer = () => {
  return (
    <div className='portifolio__footer linear__bg'>
      <div className="portifolio__footer-logo">
        <h3>Rodrigo Viana</h3>
        <p>Portifolio</p>
      </div>
      <div className="portifolio__footer-icones">
        <FaWhatsapp className='portifolio__footer-icon'/>
        <FaInstagram className='portifolio__footer-icon'/>
        <FaLinkedin className='portifolio__footer-icon'/>
        <FaGithub className='portifolio__footer-icon'/>
      </div>
      <h3 className='portifolio__footer-creator'>Made by <b>RodrigoResendeViana</b></h3>
      <p className='portifolio__footer-rights'>© 2024 RodrigoResendeViana - All Rights Reserved</p>
    </div>
  )
}

export default Footer