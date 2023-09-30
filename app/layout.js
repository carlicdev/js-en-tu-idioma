import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
          {children}
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
