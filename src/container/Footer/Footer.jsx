import React from 'react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import './Footer.css'

const Footer = () => {
  return (
    <div className='portifolio__footer linear__bg'>
      <a href='#navbar' className="portifolio__footer-logo">
        <h3>Rodrigo Viana</h3>
        <p>Portifolio</p>
      </a>
      <div className="portifolio__footer-icones">
        <a href="https://github.com/RodrigoResendeViana"  target='blank'>
          <FaGithub className='portifolio__footer-icon'/>
        </a>
        <a href="https://www.instagram.com/digo_resende/"  target='blank'>
          <FaInstagram className='portifolio__footer-icon'/>
        </a>
        <a href="https://wa.me/5511991078369?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='portifolio__footer-icon'/>
          </a>
        <a href="https://www.linkedin.com/in/rodrigo-viana-532a9525b/" target='blank'>
          <FaLinkedin className='portifolio__footer-icon'/>
        </a>
      </div>
      <h3 className='portifolio__footer-creator'>Made by <b>RodrigoResendeViana</b></h3>
      <p className='portifolio__footer-rights'>© 2024 RodrigoResendeViana - All Rights Reserved</p>
    </div>
  )
}

export default Footer