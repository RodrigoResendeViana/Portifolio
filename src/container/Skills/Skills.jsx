import React, {useState} from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import './Skills.css'

const SoftSkill = ({ skill, texto }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`accordion-box ${isActive ? 'active linear__bg' : ''}`} onClick={toggleActive}>
      <div className='accordion-heading'>
        <p className='heading'>{skill}</p>
        {isActive ? <IoIosArrowUp className='icone-setaCima' /> : <IoIosArrowDown className='icone-setaBaixo'/>}
      </div>
      {isActive && (
        <div className="accordion-text">
          <p>{texto}</p>
        </div>
      )}
    </div>
  )
}

const Skills = () => {
  return (
    <>
    <div className='portifolio__skills' id='skills'>
      <h1 className='portifolio__skills-titulo'>Skills</h1>
      <div className="portifolio__skills-all">
        <div className="portifolio__skills-hardskills">
          <h3>Hard Skills</h3>
        </div>
        <div className='portifolio__skills-softskills'>
          <h3>Soft Skills</h3>
          <div className='container-perguntas'>
            <div className="accordion">
              <SoftSkill skill="Proatividade" 
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at ad quia odit eos hic nobis cupiditate, vel, quos corrupti iure aperiam quidem nisi quas temporibus labore rerum delectus! Dolore?"
                        />
              <SoftSkill skill="Adaptabilidade" 
                        texto="Sim, todas as adoções são gratuitas, mas incentivamos doações para ajudar outros animais em necessidade."
                        />
              <SoftSkill skill="Comunicação" 
                        texto="Sim, todos os gatos disponíveis para adoção são castrados."
                        />
              <SoftSkill skill="Colaboração" 
                        texto="Adotar um gato é uma responsabilidade. É importante considerar os custos e o tempo necessários para cuidar adequadamente dele."
                        />
              <SoftSkill skill="Liderança" 
                        texto="Adotar um gato é uma responsabilidade. É importante considerar os custos e o tempo necessários para cuidar adequadamente dele."
                        />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills