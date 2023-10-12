import { BsSend } from 'react-icons/bs'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import ContactForm from '../components/ContactForm'

const Contacto = () => {
  return (
    <div className="card p-5 rounded-lg"> 
      <div className="w-full bg-black p-5 flex flex-wrap rounded-lg">
        <div className="w-full lg:w-1/2 lg:pr-5">
          <div className='flex flex-col justify-around h-full'>
            <p className="text-5xl font-black text-center mb-10 lg:mb-0">Tengamos una <span className="text-yellow-500">conversación</span>.</p>
            <div className='flex justify-center mb-10 lg:mb-0'>
              <div className='flex gap-2 items-center border rounded-lg border-yellow-500 px-5 py-3'>
                <span className='text-lg text-yellow-500'><FiMail /></span>
                <p className='text-yellow-500'>testemail@test.com</p>
              </div>
            </div>
            <div className=' flex gap-4 justify-center mb-10 lg:mb-0'>
              <span className='text-6xl'><FaSquareXTwitter /></span>
              <span className='text-6xl'><FaInstagramSquare /></span>
              <span className='text-6xl'><FaGithubSquare /></span>
              <span className='text-6xl'><FaLinkedin /></span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-slate-800 p-5 rounded-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contacto