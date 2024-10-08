import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import './Contact.css'

const MeioContato = ({icone, informacao}) => {
  return(
    <div className="portifolio__contact-info">
      {icone}
      <p>{informacao}</p>
    </div>
  )
}

const Contact = () => {

  const [formData, setFormData] = useState(
    {
      from_name:'',
      email:'',
      assunto:'',
      message:''
    }
  )
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const {from_name, email, assunto, message} = formData

  const handleChangeInput= (e) => {
    const {name, value} = e.target
    
    setFormData({...formData, [name]: value})
  }
  
  const handleSubmit = () => {
    if(from_name === '' || email === '' || assunto === '' || message === ''){
      alert('Preencha todos os campos')
      return
    }
    setLoading(true)
    
    emailjs.send("service_52lmjvp", "template_m2f9kfo", formData, "qbIt4pASbs3N-aCfe" )
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setIsFormSubmitted(true)
    }, (err) => {
      console.log("erro:", err)
    })
  }


  

  return (
    <div className="portiflio__contact-fundo">
      <div className='portifolio__contact linear__bg' id='contact'>
        <div className="portifolio__contact-infos">
          <h1>Info Contato</h1>
          <MeioContato icone={<FaEnvelope/>} informacao="Email: digo1209@gmail.com"/>
          <MeioContato icone={<FaPhone/>} informacao="Telefone: +55 (11) 99107-8369"/>
          <MeioContato icone={<FaGithub/>} informacao="Github: https://github.com/RodrigoResendeViana"/>
          <MeioContato icone={<FaLinkedin/>} informacao="LinkedIn: https://www.linkedin.com/in/rodrigo-viana-532a9525b/"/>
        </div>
        {isFormSubmitted
        ?
        <h1>Obrigado por entrar em contato!</h1>
        :
        <div className='portifolio__contact-form'>
          <h1>Entre em contato</h1>
          <input 
            type="text" 
            placeholder='Nome*' 
            name="from_name" 
            value={from_name} 
            onChange={handleChangeInput} 
          />
          <input 
            type="email" 
            placeholder='Email*' 
            name="email" 
            value={email} 
            onChange={handleChangeInput} 
          />
          <input 
            type="text"
            placeholder='Assunto*'
            name="assunto"
            value={assunto} 
            onChange={handleChangeInput} 
          />
          <textarea
            placeholder='Mensagem...'
            value={message} name="message"
            onChange={handleChangeInput}>
          </textarea>
          <button type='button' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
        }
      </div>
    </div>
  )
}

export default Contact