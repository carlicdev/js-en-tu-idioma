import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='p-2 w-full'>
        <div className='card max-w-[1536px] w-full mx-auto lg:p-3 p-2 text-white rounded-lg flex items-center'>
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className='mr-0 ml-auto'>
                <ThemeToggle />
            </div>
        </div>
    </div>
  )
}

export default Navbar