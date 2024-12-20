import { useState } from 'react'

interface BlacklistedPerson {
  id: number
  name: string
  reason: string
  date: string
}

const mockBlacklist: BlacklistedPerson[] = [
  { id: 1, name: "John Mischief", reason: "Property damage", date: "2023-11-15" },
  { id: 2, name: "Sarah Trouble", reason: "Repeated noise complaints", date: "2023-11-20" },
  { id: 3, name: "Mike Nopay", reason: "Payment issues", date: "2023-12-01" },
]

export default function Blacklist() {
  const [blacklist, setBlacklist] = useState<BlacklistedPerson[]>(mockBlacklist)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blacklisted Individuals</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Reason</th>
            <th className="py-2 px-4 border-b">Date Added</th>
          </tr>
        </thead>
        <tbody>
          {blacklist.map((person) => (
            <tr key={person.id}>
              <td className="py-2 px-4 border-b">{person.name}</td>
              <td className="py-2 px-4 border-b">{person.reason}</td>
              <td className="py-2 px-4 border-b">{person.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

