import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='p-2 w-full'>
        <div className='card max-w-[1536px] w-full mx-auto lg:p-3 p-2 py-5 text-white rounded-lg flex items-end'>
            <Link href={'/'} className='ml-0 mr-auto'>
                <Logo />
            </Link>
            <div className='hidden lg:flex mx-auto  gap-[45px] '>
              <Link href={'/about'}>
                <p className='text-xl'>About</p>
              </Link>
              <Link href={'/contacto'}>
                <p className='text-xl'>Contacto</p>
              </Link>
            </div>
            <div className='mr-0 ml-auto mb-2'>
                <ThemeToggle />
            </div>
        </div>
    </div>
  )
}

export default Navbar