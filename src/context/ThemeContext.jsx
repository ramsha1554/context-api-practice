import { createContext, useState } from 'react'

// this is for storing the dark/light theme state
export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  // just a quick function to flip the theme state
  const toggleTheme = () => {
    // using ternary here because it's short and easy
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
