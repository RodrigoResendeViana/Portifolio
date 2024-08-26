import React from 'react'
import imagem_projetoOng from '../../assets/ONG-gatos.png'
import {Project} from '../../components/index'

import './Projects.css'

const projectsData =[
  {
    imagem:imagem_projetoOng,
    titulo:"Projeto ONG",
  },
  {
    imagem:imagem_projetoOng,
    titulo:"Projeto ONG",
  },
]

const Projects = () => {
  return (
    <div className='portifolio__projects' id='projects'>
      <h1>Projects</h1>
      <div className="portifolio__projects-projects">
        {projectsData.map(projeto => {
          return <Project imagem={projeto.imagem}
                          titulo={projeto.titulo}/>
        })}
      </div>
    </div>
  )
}

export default Projects