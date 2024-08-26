import React from 'react'
import { FaGithub, FaChrome } from "react-icons/fa";
import './Project.css'


const Project = ({imagem, titulo, descricao, tecnologias, link_github, link_deploy}) => {
  return (
    <div className="portifolio__project-proj linear__bg">
      <img src={imagem} alt="" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="portifolio__project-tech">
        <p>Tecnologias:</p>
        <div className="portifolio__project-tecnologias">
          {tecnologias}
        </div>
      </div>
      <div className="portifolio__project-infos">
        <div className="portifolio__project-deploy">
            <a href={link_github}>
                <FaGithub className='portifolio__project-icon'/>
            </a> 
            |
            <a href={link_deploy}>
                <FaChrome className='portifolio__project-icon'/>
            </a> 
        </div>
        <h4>Saiba Mais</h4>
      </div>
    </div>
  )
}

export default Project