import React from 'react'
import imagem_projetoOng from '../../assets/ONG-gatos.png'
import imagem_projetoGpt3 from '../../assets/GPT-3.png'
import {Project} from '../../components/index'

import './Projects.css'

const projectsData =[
  {
    imagem:imagem_projetoOng,
    titulo:"Landing Page ONG",
    descricao: "Aplicação Web feita a partir de design Figma fornecido pela empresa KBR-TEC",
    tecnologias:"React, SCSS",
    link_github:"https://github.com/RodrigoResendeViana/React-ONG-TinieBird-Cats---teste-KBR-TEC",
    link_deploy:"https://react-ong-tinie-bird-cats-teste-kbr-tec.vercel.app/"
  },
  {
    imagem:imagem_projetoGpt3,
    titulo:"Landing Page GPT-3",
    descricao: "Aplicação Web feita com guia de video do Youtube",
    tecnologias:"React, CSS",
    link_github:"https://github.com/RodrigoResendeViana/React-landing-page-gpt3/tree/main",
    link_deploy:"https://react-landing-page-gpt3.vercel.app/"
  },
]

const Projects = () => {
  return (
    <div className='portifolio__projects' id='projects'>
      <h1>Projects</h1>
      <div className="portifolio__projects-projects">
        {projectsData.map(projeto => {
          return <Project imagem={projeto.imagem}
                          titulo={projeto.titulo}
                          descricao={projeto.descricao}
                          tecnologias={projeto.tecnologias}
                          link_github={projeto.link_github}
                          link_deploy={projeto.link_deploy}/>
        })}
      </div>
    </div>
  )
}

export default Projects