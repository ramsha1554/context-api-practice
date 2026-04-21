import { createContext, useState } from 'react'

// setting up user context
export const UserContext = createContext()

export function UserProvider({ children }) {
  // just hardcoding some student dummy data to practice passing user info
  const [user] = useState({
    name: 'Alex Mercer',
    email: 'alex.mercer@student.edu',
    role: 'Frontend Intern'
  })

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
