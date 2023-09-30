import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <div className='w-full card'>
        <div className='max-w-[1536px] w-full mx-auto mt-10'>
            <div className='flex flex-wrap py-10 items-start px-2 lg:px-0'>
                <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center mb-4'>
                    <Logo />
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center mb-4'>
                    <p>About</p>
                    <p>About</p>
                    <p>About</p>
                    <p>About</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center'>
                    <button className='bg-yellow-500 px-5 py-2 text-white rounded-lg'>
                        contacto
                    </button>
                </div>
            </div>
            <div className='flex border-t border-gray-600 pt-2 pb-1 px-2 lg:px-0'>
                <div className='ml-0 mr-auto'>
                    <p className='text-gray-400 font-thin text-sm'>JSenTuIdioma | 2023</p>
                </div>
                <div className='mr-0 ml-auto'>
                    <p className='text-gray-400 font-thin text-sm'>Aviso de Privacidad</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer