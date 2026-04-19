import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

export default function Counter() {
  // using context here instead of passing props down
  // useContext is so much cleaner because I don't need parameters here
  const { count, increment, decrement } = useContext(CounterContext)

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md max-w-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple Counter</h3>
      <p className="text-3xl font-bold text-gray-900 mb-4">{count}</p>
      <div className="flex gap-2">
        <button 
          onClick={decrement}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 rounded font-medium text-sm transition-colors"
        >
          Decrement
        </button>
        <button 
          onClick={increment}
          className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded font-medium text-sm transition-colors"
        >
          Increment
        </button>
      </div>
    </div>
  )
}
