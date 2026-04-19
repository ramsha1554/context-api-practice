import { CounterProvider } from './context/CounterContext'
import Counter from './components/Counter'

// app entry point for day 2. just testing the counter with context.
// will add user profile and theme settings later.
export default function App() {
  return (
    <CounterProvider>
      <div className="min-h-screen bg-white text-gray-900 p-8 flex flex-col items-center justify-center">
        <Counter />
      </div>
    </CounterProvider>
  )
}
