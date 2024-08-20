import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import './Navbar.css'

const Menu = () => {
  return(
    <>
    <p><a href="#about">Sobre</a></p>
    <p><a href="#skills">Skills</a></p>
    <p><a href="#projects">Projetos</a></p>
    <p><a href="#contact">Contato</a></p>
    </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='portifolio__navbar'>
      <div className="portifolio__navbar-logo">
        <h3>Rodrigo Viana</h3>
        <p>Portifolio</p>
      </div>
      <div className="portifolio__navbar-list">
        <Menu/>
      </div>
      <div className="portifolio__navbar-menu">
        {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
        {toggleMenu && 
          (
            <div className='portifolio__navbar-menu_container scale-up-center linear__bg'>
              <div className="portifolio__navbar-menu_container-links">
                <Menu/>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar