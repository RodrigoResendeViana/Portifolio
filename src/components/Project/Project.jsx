import React from 'react'
import { FaGithub, FaChrome } from "react-icons/fa";
import './Project.css'


const Project = ({imagem, titulo, descricao, tecnologias, link_github, link_deploy}) => {
  return (
    <div className="portifolio__project linear__bg">
      <img src={imagem} alt="" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="portifolio__project-tech">
        <p>Tecnologias:</p>
        <div className="portifolio__project-tecnologias">
          <p>{tecnologias}</p>
        </div>
      </div>
      <div className="portifolio__project-infos">
        <div className="portifolio__project-deploy">
            <a href={link_github} target='blank'>
                <FaGithub className='portifolio__project-icon'/>
            </a> 
            
            <a href={link_deploy} target='blank'>
                <FaChrome className='portifolio__project-icon'/>
            </a> 
        </div>
      </div>
    </div>
  )
}

export default Project