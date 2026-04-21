import { CounterProvider } from './context/CounterContext'
import { UserProvider } from './context/UserContext'
import Counter from './components/Counter'
import ProfileCard from './components/ProfileCard'

// app entry point for day 3. now we have counter and user profile both in context.
// still need to add theme provider tomorrow.
export default function App() {
  return (
    <CounterProvider>
      <UserProvider>
        <div className="min-h-screen bg-white text-gray-900 p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <Counter />
          <ProfileCard />
        </div>
      </UserProvider>
    </CounterProvider>
  )
}
