import React from 'react';
import { FaHtml5, FaCss3, FaSass, FaJs, FaReact, FaAngular, FaJava, FaPython, FaNodeJs, FaGitAlt  } from "react-icons/fa";
import './Skills.css'
import { SoftSkill } from '../../components';


const Skills = () => {
  return (
    <>
    <div className='portifolio__skills' id='skills'>
      <h1 className='portifolio__skills-titulo'>Skills</h1>
      <div className="portifolio__skills-all">
        <div className="portifolio__skills-hardskills">
          <h3>Hard Skills</h3>
          <div className="portifolio__skills-hardskills-skills">
            <FaHtml5 className='icon'/>
            <FaCss3 className='icon'/>
            <FaSass className='icon'/>
            <FaJs className='icon'/>
            <FaReact className='icon'/>
            <FaAngular className='icon'/>
            <FaJava className='icon'/>
            <FaPython className='icon'/>
            <FaNodeJs className='icon'/>
            <FaGitAlt className='icon'/>
          </div>
        </div>
        <div className='portifolio__skills-softskills'>
          <h3>Soft Skills</h3>
          <div className='container-perguntas'>
            <div className="accordion">
              <SoftSkill skill="Proatividade" 
                        texto="Sou uma pessoa proativa, que busca sempre estar à frente. Busco sempre me atualizar na minha área de atuação. Quando me deparo com dificuldades, vou atrás de soluções, pesquisando e aprendendo para superar os desafios. Não espero as coisas acontecerem, tomo a iniciativa para garantir que o trabalho seja feito com excelência."
                        />
              <SoftSkill skill="Adaptabilidade" 
                        texto="Sou uma pessoa que se adapta bem às mudanças. Encaro novos desafios com flexibilidade e rapidez, ajustando-me às situações para garantir o melhor resultado. Estou sempre preparado para evoluir e me ajustar às necessidades do projeto e do mundo."
                        />
              <SoftSkill skill="Comunicação" 
                        texto="Ao colaborar com equipes em projetos da faculdade, desenvolvi uma comunicação eficaz, essencial para traduzir conceitos técnicos complexos para não técnicos. Minha habilidade em articular ideias de maneira clara e estruturada facilita a colaboração e garante o alinhamento entre todos os envolvidos."
                        />
              <SoftSkill skill="Colaboração" 
                        texto="Trabalhei em equipes diversas durante minha trajetória acadêmica, onde aprendi o valor da colaboração. Acredito que o sucesso de um projeto depende da sinergia entre seus membros. Por isso, um lugar onde a cooperação é incentivada acaba sendo o melhor lugar para o sucesso do time."
                        />
              <SoftSkill skill="Liderança" 
                        texto="Desempenhei papéis de liderança em projetos da faculdade, onde fui responsável por coordenar minha equipe e garantir que todos estivessem alinhados com os objetivos do projeto. Minha abordagem à liderança é baseada em empatia, apoio e orientação, o que ajudou a criar um ambiente de trabalho mais leve."
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