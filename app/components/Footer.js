"use client"

import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6'
import Link from 'next/link'
import Subscribe from './Subscribe'

const Footer = () => {
    const pathname = usePathname();

  return (
    <div className='w-full card'>
        <div className='max-w-[1536px] w-full mx-auto mt-10'>
            <div className='flex flex-wrap py-10 items-start px-2 lg:px-0'>
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center mb-4 gap-4'>
                    <Logo />
                    <div className='flex gap-4'>
                        <span className='text-4xl'><FaSquareXTwitter /></span>
                        <span className='text-4xl'><FaInstagramSquare /></span>
                        <span className='text-4xl'><FaGithubSquare /></span>
                        <span className='text-4xl'><FaLinkedin /></span>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center mb-4'>
                    <div className='flex flex-col gap-4'>
                        <Link href={'/about'} >
                            <p>About</p>
                        </Link>
                        <Link href={'/contacto'}>
                            <p>Contacto</p>
                        </Link>
                        <Link href={'/about'}>
                            <p>Colabora con Nosotros</p>
                        </Link>
                    </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col items-center'>
                    <Subscribe />
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