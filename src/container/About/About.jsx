import React from 'react'
import curriculo from '../../assets/RodrigoResendeViana_Curriculo_organized.pdf'

import './About.css'

const About = () => {
  return (
    <div className='portifolio__about' id='about'>
      <a href={curriculo} download="curriculo-Rodrigo_Viana.pdf">
        <button type='button'>Download Resumé</button>
      </a>
    </div>
  )
}

export default About