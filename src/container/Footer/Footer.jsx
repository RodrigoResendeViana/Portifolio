import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import './Footer.css'

const Footer = () => {

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
    <div className='portifolio__footer'>
      <h1>Contact me</h1>
      {isFormSubmitted
      ?
      <h3>Thanks for contacting me!</h3>
      :
      <div className='portifolio__footer-form'>
        <input type="text" placeholder='Your name' name="from_name" value={from_name} onChange={handleChangeInput} />
        <input type="email" placeholder='Your email' name="email" value={email} onChange={handleChangeInput} />
        <input type="text" placeholder='Assunto da mensagem' name="assunto" value={assunto} onChange={handleChangeInput} />
        <textarea  placeholder='Your message'value={message} name="message" onChange={handleChangeInput}></textarea>
        <button type='button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      }
    </div>
  )
}

export default Footer