import React from 'react'
import foto from '../../assets/avatar.png'

import './Header.css'

const Header = () => {
  return (
    <div className='portifolio__header'>
      <div className="portifolio__header-content">
        <h3>Estudante de</h3>
        <h1>Engenharia de Software</h1>
        <p>Tenho mais dominio com o <b>Desenvolvimento Front-End</b>. Tenho experiência em tecnologias como <b>HTML</b>, <b>CSS</b> (incluindo pré-processadores como <b>SCSS</b>), <b>JavaScript</b>, e bibliotecas e frameworks modernos como <b>React</b> e <b>Angular</b>.</p>
        <button type='button'>Download Resumé</button>
      </div>
      <img src={foto} alt="" />
    </div>
  )
}

export default Header