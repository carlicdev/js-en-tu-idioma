"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='p-2 w-full'>
        <div className='card max-w-[1536px] w-full mx-auto lg:p-3 p-2 py-5 text-white rounded-lg flex items-end'>
            <Link href={'/'} className='ml-0 mr-auto'>
                <Logo />
            </Link>
            <div className='hidden lg:flex mx-auto  gap-[45px] '>
              <Link href={'/'} className={`${pathname === '/' ? 'border-b-2 border-yellow-500' : ''}`}>
                <p className='text-xl'>Home</p>
              </Link>
              <Link href={'/about'} className={`${pathname === '/about' ? 'border-b-2 border-yellow-500' : ''}`}>
                <p className='text-xl'>About</p>
              </Link>
              <Link href={'/contacto'} className={`${pathname === '/contacto' ? 'border-b-2 border-yellow-500' : ''}`}>
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