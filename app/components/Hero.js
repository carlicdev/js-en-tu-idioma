"use client"

import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Hero = () => {
    const { theme } = useContext(ThemeContext)

  return (
    <div className="w-full">
        <div className="card max-w-[1536px] w-full flex flex-wrap mx-auto rounded-xl p-5">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
                <div>
                    <h2 className="font-black text-4xl lg:text-6xl mb-5"><span className="text-yellow-500 font-black">JavaScript</span> en español</h2>
                    <p className="font-medium lg:text-2xl mb-5">Artículos, noticias y tutoriales de todo lo que tenga que ver con 
                        <span className="text-yellow-500 font-bold"> JavaScript</span>, 
                        <span className="text-green-500 font-bold"> Node</span> y 
                        <span className="text-blue-400 font-bold"> React</span>.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 h-[300px]" style={{ backgroundImage: `${ theme === 'dark' ? 'url(./blob-haikei.png)' : 'url(./blob-light.png)'}`}}>
                <div className="w-full flex items-center justify-center h-full">
                    <img src={'./laptop-41070.svg'} alt='laptop' className="w-[228px] lg:w-[350px]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero