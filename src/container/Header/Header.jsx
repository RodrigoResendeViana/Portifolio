import React from 'react'
import foto from '../../assets/avatar.png'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


import './Header.css'

const Header = () => {
  return (
    <div className='portifolio__header'>
      <div className="portifolio__header-content">
        <h3>Estudante de</h3>
        <h1>Engenharia de Software</h1>
        <p>Tenho mais dominio com o <b>Desenvolvimento Front-End</b>. Tenho experiência em tecnologias como <b>HTML</b>, <b>CSS</b> (incluindo pré-processadores como <b>SCSS</b>), <b>JavaScript</b>, e bibliotecas e frameworks modernos como <b>React</b> e <b>Angular</b>. Aberto a novas experiências.</p>
        <div className="portifolio__header-icones">
          <FaWhatsapp className='portifolio__header-icon'/>
          <FaInstagram className='portifolio__header-icon'/>
          <FaLinkedin className='portifolio__header-icon'/>
          <FaGithub className='portifolio__header-icon'/>
        </div>
      </div>
      <img src={foto} alt="" />
    </div>
  )
}

export default Header