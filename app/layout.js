import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LastPostsCard from './components/LastPostsCard'
import Tags from './components/Tags'
import Subscribe from './components/Subscribe'
import CTAContact from './components/CTAContact'
import ThemeContextProvider from './context/ThemeContext'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: '300',
  subsets: ['latin'] 
})


export const metadata = {
  title: 'JS en tu idioma',
  description: 'Un blog sobre Javascript.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeContextProvider>
          <div>
            <Navbar />
            <div className='my-2 max-w-[1536px] mx-auto flex flex-wrap px-2 lg:px-0'>
              <div className='w-full lg:w-3/4 gap-4 lg:pr-2'>
                {children}
              </div>
              <div className='w-full lg:w-1/4 lg:pl-2'>
                <Tags />
                <Subscribe />
                <LastPostsCard />
                <CTAContact />
              </div>
            </div>
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
