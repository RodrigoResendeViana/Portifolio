import React from 'react'
import curriculo from '../../assets/RodrigoResendeViana_Curriculo_organized.pdf'
import avatar from '../../assets/avatar_about.png'
import './About.css'

const About = () => {
  return (
    <div className='portifolio__about' id='about'>
      <div className='portifolio__about-imagem'>
        <img  src={avatar} alt="" />
      </div>
      <div className="portifolio__about-infos">
        <h1>Sobre mim</h1>
        <h3>Estagiário Engenharia de Software</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea libero quia corporis magnam deserunt enim pariatur eaque. Quibusdam doloribus est temporibus ex, aspernatur nemo, optio eligendi cumque, vel facere blanditiis.</p>
        <a href={curriculo} download="curriculo-Rodrigo_Viana.pdf">
          <button type='button'>Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default About