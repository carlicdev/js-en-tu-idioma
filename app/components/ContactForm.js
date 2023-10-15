"use client"

import React, { useRef, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { AiOutlineReload } from 'react-icons/ai'
import { AiFillExclamationCircle, AiFillCheckCircle} from 'react-icons/ai'

const ContactForm = () => {
  const formRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [pending, setPending] = useState(false);
  const [serverMsg, setServerMsg] = useState(null);
  const [serverStatus, setServerStatus] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const iconMappings = {
    200: AiFillCheckCircle,
    400: AiFillExclamationCircle,
    500: AiFillExclamationCircle,
  };

      // Función para verificar el formato del correo electrónico
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleChange = (e) => {
    setServerMsg(null)
    setServerStatus(null)
    const { name, value } = e.target;
    setForm({...form, [name]: value })
    
    if (name === 'email') {
      setIsValid(isValidEmail(value));
    }
  }

  const handleSelect = (value) => {
    setForm({...form, subject: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });
    
      const data = await response.json()
      if (data) {
        setPending(false)
        setServerMsg(data.message)
        setServerStatus(data.status)
      }
      if (data.status === 200){
        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    } catch (err) {
      setPending(false)
      setServerMsg(err.message)
      setServerStatus(err.status)
    }

  }

      // Renderizar un mensaje de error mientras el correo no es válido
      const errorMessage = !isValid ? (
        <p className="mb-2 text-center text-sm text-red-500">* Por favor, ingresa un correo electrónico válido.</p>
      ) : null;

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
    <p className="mb-2">Selecciona un tema</p>
    <div className="flex flex-wrap gap-2 mb-4">
      <div 
        onClick={ () => handleSelect('Asesoría')}
        className={`${form.subject === 'Asesoría' ? 'bg-yellow-500 text-white': 'text-yellow-500'} border border-yellow-500  hover:bg-yellow-500 hover:text-white px-4 py-2 cursor-pointer rounded-lg`}
      >
        Asesoría
      </div>
      <div 
          onClick={() => handleSelect('Colaboración')}
          className={`${form.subject === 'Colaboración' ? 'bg-yellow-500 text-white': 'text-yellow-500'} border border-yellow-500  hover:bg-yellow-500 hover:text-white px-4 py-2 cursor-pointer rounded-lg`}
      >
        Colaboración
      </div>
      <div 
        onClick={() => handleSelect('Problemas con la página')}
        className={`${form.subject === 'Problemas con la página' ? 'bg-yellow-500 text-white': 'text-yellow-500'} border border-yellow-500  hover:bg-yellow-500 hover:text-white px-4 py-2 cursor-pointer rounded-lg`}
      >
        Problemas con la página
      </div>
      <div
        onClick={() => handleSelect('Conversación casual')}
        className={`${form.subject === 'Conversación casual' ? 'bg-yellow-500 text-white': 'text-yellow-500'} border border-yellow-500  hover:bg-yellow-500 hover:text-white px-4 py-2 cursor-pointer rounded-lg`}
      >
        Conversación Casual
      </div>
      <div 
        onClick={() => handleSelect('Otro')}
        className={`${form.subject === 'Otro' ? 'bg-yellow-500 text-white': 'text-yellow-500'} border border-yellow-500  hover:bg-yellow-500 hover:text-white px-4 py-2 cursor-pointer rounded-lg`}
      >
        Otro
      </div>
    </div>

    <label className="flex flex-col my-2">
      <span className="mb-2">Nombre</span>
      <input 
        disabled={pending}
        type='text'
        name='name'
        value={form.name}
        onChange={handleChange}      
        className="p-1.5 rounded-lg outline-none focus:outline-yellow-500 text-black"
      />
    </label>

    <label className="flex flex-col my-2">
      <div className='flex gap-4 items-center'>
        <span className="mb-2">Email</span>
        {errorMessage}
      </div>
      <input 
        disabled={pending}
        type='email'
        name='email'
        value={form.email}
        onChange={handleChange}
        className="p-1.5 rounded-lg outline-none focus:outline-yellow-500 text-black"
      />
    </label>

    <label className="flex flex-col my-2">
      <span className="mb-2">Mensaje</span>
      <textarea 
        disabled={pending}
        name='message'
        value={form.message}
        onChange={handleChange}
        rows={3} 
        className="p-1.5 rounded-lg outline-none focus:outline-yellow-500 text-black"
      />
    </label>

    <div className="my-5 flex gap-5 w-full items-start">
      <button 
        disabled={!isValid}
        type="submit"
        className="px-5 py-3  font-bold rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 hover:scale-105"
      >
        {
          pending ? (
            <div className='flex gap-2 items-center'>
            <span className='text-xl animate-spin'><AiOutlineReload /></span>
            <p>Enviando</p>
            </div>
          ) : (
            <div className='flex gap-2 items-center'>
            <span className='text-xl'><BsSend /></span>
            <p>Enviar</p>
            </div>
          )
        }
      </button>
      {
        serverMsg && (
          <div className='flex w-full gap-2 items-start p-3 bg-slate-700 rounded-lg '>
            <div className='flex items-start' >
              <span className={`text-2xl  ${serverStatus === 200 ? 'text-green-300' : 'text-red-500'}`}>{iconMappings[serverStatus]()}</span>
            </div>
            <p className='text-sm text-justify'>{serverMsg}</p>
          </div>
        )
      }
    </div>

  </form>
  )
}

export default ContactForm