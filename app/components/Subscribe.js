"use client"

import { useRef, useState } from 'react';
import { AiFillExclamationCircle, AiFillCheckCircle} from 'react-icons/ai'

const Subscribe = () => {
  const [message, setMessage] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [statusCode, setStatusCode] = useState(null);
  const formRef = useRef();
  const [form, setForm] = useState({
    email: ''
  })

  const iconMappings = {
    200: AiFillCheckCircle,
    409: AiFillExclamationCircle,
    500: AiFillExclamationCircle,
  };

    // Función para verificar el formato del correo electrónico
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage(null)
    setForm({...form, [name]: value })
    setIsValid(isValidEmail(value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setStatusCode(null);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: form.email})
      });

      const data = await response.json();
      setStatusCode(data.status)
      setMessage(data.message)
    } catch (err) {
      console.log(err);
    }
  }

    // Renderizar un mensaje de error si el correo no es válido
    const errorMessage = !isValid ? (
      <p className="mb-1 text-center text-sm text-red-500">Por favor, ingresa un correo electrónico válido.</p>
    ) : null;

  return (
    <div className='card rounded-lg p-5 flex flex-col mb-4'>
      <p className='text-center text-lg mb-2'>Suscríbete para enterarte de las últimas noticias de <span className='text-yellow-500'>JavaScript</span></p>
      <div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <input  
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          className='w-full p-1 mb-4 text-black rounded bg-white focus:outline-red-500 outline-none'
          />
          {errorMessage}
          <button 
            disabled={!isValid}
            type='submit'
            className='w-full py-3 text-medium text-white uppercase bg-red-500 rounded-lg'
          >
            suscribirse
          </button>
        </form>
        {
          message && (
            <div className='flex gap-2 items-start mt-2 p-2 bg-slate-700 rounded-lg '>
              <div className='flex' >
                <span className={`text-2xl p-1 ${statusCode === 200 ? 'text-green-300' : 'text-red-500'}`}>{iconMappings[statusCode]()}</span>
              </div>
              <p className='text-sm text-justify'>{message}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Subscribe