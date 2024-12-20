import { useState } from 'react'

interface Resident {
  id: number
  name: string
  room: string
  checkIn: string
  checkOut: string
}

const mockResidents: Resident[] = [
  { id: 1, name: "John Doe", room: "101", checkIn: "2023-12-15", checkOut: "2023-12-20" },
  { id: 2, name: "Jane Smith", room: "202", checkIn: "2023-12-18", checkOut: "2023-12-25" },
  { id: 3, name: "Bob Johnson", room: "303", checkIn: "2023-12-20", checkOut: "2023-12-27" },
]

export default function Residents() {
  const [residents, setResidents] = useState<Resident[]>(mockResidents)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Current Residents</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Room</th>
            <th className="py-2 px-4 border-b">Check-In</th>
            <th className="py-2 px-4 border-b">Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {residents.map((resident) => (
            <tr key={resident.id}>
              <td className="py-2 px-4 border-b">{resident.name}</td>
              <td className="py-2 px-4 border-b">{resident.room}</td>
              <td className="py-2 px-4 border-b">{resident.checkIn}</td>
              <td className="py-2 px-4 border-b">{resident.checkOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

