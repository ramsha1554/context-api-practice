import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function Header() {
  // fetching theme state and toggle function from theme context
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-gray-200">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        My Dev Learning App
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 border rounded font-medium text-sm transition-colors duration-0 bg-white text-gray-900 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}
