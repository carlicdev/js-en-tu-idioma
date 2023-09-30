"use client"

import { useContext, createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme}}>
            <div className={`theme ${theme}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;