"use client"

import { useContext } from "react"
import { ThemeContext  } from "../context/ThemeContext"
import { BsSun, BsMoon} from 'react-icons/bs'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    

  return (
    <div 
        className={`cursor-pointer text-xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
        onClick={toggleTheme}
    >
        {
            theme === 'light' ? <BsSun /> : <BsMoon />
        }
    </div>
  )
}

export default ThemeToggle