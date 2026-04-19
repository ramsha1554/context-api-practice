import { createContext, useState } from 'react'

// creating the context here, this is like the radio station
export const CounterContext = createContext()

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  // these functions will update the count state globally
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  // returning the provider component that holds the values
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}
