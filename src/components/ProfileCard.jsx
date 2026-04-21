import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export default function ProfileCard() {
  // this is cleaner than passing props through 3 components
  // grabbed name, email, role from UserContext directly
  const { name, email, role } = useContext(UserContext)

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-md max-w-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">User Profile Card</h3>
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-500">Name:</p>
        <p className="text-base text-gray-900 font-semibold">{name}</p>
      </div>
      <div className="space-y-1 mt-3">
        <p className="text-sm font-medium text-gray-500">Email:</p>
        <p className="text-base text-gray-900">{email}</p>
      </div>
      <div className="space-y-1 mt-3">
        <p className="text-sm font-medium text-gray-500">Role:</p>
        <p className="text-sm px-2 py-0.5 bg-gray-100 text-gray-800 border border-gray-200 rounded inline-block">
          {role}
        </p>
      </div>
    </div>
  )
}
