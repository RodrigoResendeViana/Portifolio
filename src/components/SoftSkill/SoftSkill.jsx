import React, {useState} from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './SoftSkill.css'

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

export default SoftSkill