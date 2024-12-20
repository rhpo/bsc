import { useState } from 'react'

interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'manager' | 'staff'
}

const mockUsers: User[] = [
  { id: 1, name: "Admin User", email: "admin@hotel.com", role: "admin" },
  { id: 2, name: "Manager One", email: "manager1@hotel.com", role: "manager" },
  { id: 3, name: "Staff Member", email: "staff1@hotel.com", role: "staff" },
]

export default function Users() {
  const [users, setUsers] = useState<User[]>(mockUsers)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">System Users</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                <span className={`inline-block w-24 text-center px-3 py-1 rounded-full text-sm ${
                  user.role === 'admin' ? 'bg-red-100 text-red-800' :
                  user.role === 'manager' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

