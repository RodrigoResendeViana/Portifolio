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
          <a href="https://github.com/RodrigoResendeViana" target='blank'>
            <FaGithub className='portifolio__header-icon'/>
          </a>
          <a href="https://www.instagram.com/digo_resende/" target='blank'>
            <FaInstagram className='portifolio__header-icon'/>
          </a>
          <a href="https://wa.me/5511991078369?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='portifolio__header-icon'/>
          </a>
          <a href="https://www.linkedin.com/in/rodrigo-viana-532a9525b/" target='blank'>
            <FaLinkedin className='portifolio__header-icon'/>
          </a>
        </div>
      </div>
      <div className="portifolio__header-imagem">
        <img src={foto} alt="" />
      </div>
    </div>
  )
}

export default Header