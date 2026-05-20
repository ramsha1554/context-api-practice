import { createContext, useState } from 'react'

// creating the context here, this is like the radio station
export const CounterContext = createContext()

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  // these functions will update the count state globally
  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  const reset = () => {
    // keeping reset simple for student practice
    setCount(0)
  }

  // returning the provider component that holds the values
  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}
