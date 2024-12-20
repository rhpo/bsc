import { useState } from 'react'

interface Reservation {
  id: number
  name: string
  room: string
  checkIn: string
  checkOut: string
  status: 'confirmed' | 'pending' | 'cancelled'
}

const mockReservations: Reservation[] = [
  { id: 1, name: "Alice Wonder", room: "101", checkIn: "2023-12-25", checkOut: "2023-12-30", status: "confirmed" },
  { id: 2, name: "Bob Marvel", room: "202", checkIn: "2023-12-28", checkOut: "2024-01-02", status: "pending" },
  { id: 3, name: "Charlie Chaplin", room: "303", checkIn: "2024-01-05", checkOut: "2024-01-10", status: "confirmed" },
]

export default function Reservations() {
  const [reservations, setReservations] = useState<Reservation[]>(mockReservations)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Reservations</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Room</th>
            <th className="py-2 px-4 border-b">Check-In</th>
            <th className="py-2 px-4 border-b">Check-Out</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="py-2 px-4 border-b">{reservation.name}</td>
              <td className="py-2 px-4 border-b">{reservation.room}</td>
              <td className="py-2 px-4 border-b">{reservation.checkIn}</td>
              <td className="py-2 px-4 border-b">{reservation.checkOut}</td>
              <td className="py-2 px-4 border-b">
                <span className={`px-2 py-1 rounded ${
                  reservation.status === 'confirmed' ? 'bg-green-200' :
                  reservation.status === 'pending' ? 'bg-yellow-200' :
                  'bg-red-200'
                }`}>
                  {reservation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

