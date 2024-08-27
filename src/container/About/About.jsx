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
        <p>Sou uma pessoa proativa que busca sempre contribuir com o crescimento da empresa, enquanto amplio meu conhecimento e habilidades. Sou comprometido com o meu aprendizado contínuo e acredito que posso agregar valor enquanto evoluo profissionalmente.</p>
        <div className='portifolio__about-buttons'>
          <a href={curriculo} download="curriculo-Rodrigo_Viana.pdf">
            <button className='portifolio__about-buttonCV' type='button'>Download CV</button>
          </a>
          <a href="#contact">
            <button className='portifolio__about-buttonContato' type='button'>Contate-me</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About