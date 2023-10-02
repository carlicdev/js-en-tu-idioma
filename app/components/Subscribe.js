"use client"

import { useRef, useState } from 'react';

const Subscribe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email: form.email})
      });

      const data = await response.json();
      console.log('Data from /api/subscribe', data);
    } catch (err) {
      console.log(err);
    }
  }

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
          <button 
            type='submit'
            className='w-full py-3 text-medium text-white uppercase bg-red-500 rounded-lg'
          >
            suscribirse
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe