import { useContext } from 'react'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import { CounterProvider } from './context/CounterContext'
import { UserProvider } from './context/UserContext'
import Header from './components/Header'
import Counter from './components/Counter'
import ProfileCard from './components/ProfileCard'

function AppContent() {
  // fetching the current theme here so I can style the whole page background
  const { theme } = useContext(ThemeContext)

  // setting dark or light styles directly based on the theme context
  const pageStyle = theme === 'dark' 
    ? 'bg-gray-900 text-white min-h-screen transition-colors duration-0' 
    : 'bg-white text-gray-900 min-h-screen transition-colors duration-0'

  return (
    <div className={pageStyle}>
      <Header />
      
      <main className="max-w-4xl mx-auto p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Context API Practice Area</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl">
            This page is for trying out the React Context API. All the states below are 
            stored inside Context Providers, not inside local component states. If you click 
            the theme toggle in the header, this paragraph and the rest of the page styles will update immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Day 2 Counter Component */}
          <Counter />

          {/* Day 3 User Profile Component */}
          <ProfileCard />
        </div>
      </main>
    </div>
  )
}

export default function App() {
  // wrapping all providers here. not sure if nesting them like this is bad practice
  // but it seems to be the only way to let everything use all contexts
  return (
    <ThemeProvider>
      <CounterProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </CounterProvider>
    </ThemeProvider>
  )
}
