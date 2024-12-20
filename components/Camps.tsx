'use client'

import { useState } from 'react'
import { database } from '@/lib/data'
import { Eye, Filter, FileOutputIcon as FileExport, Plus } from 'lucide-react'
import HotelDetails from './HotelDetails'
import AddHotel from './AddHotel'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Hotel } from '@/lib/types'

export default function Camps() {
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [camps, setCamps] = useState<Hotel[]>(database.camps)

  const filteredCamps = camps.filter(camp => 
    camp.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddHotel = (newHotel: Omit<Hotel, 'id'>) => {
    const hotelWithId: Hotel = {
      ...newHotel,
      id: Math.max(0, ...camps.map(c => c.id)) + 1
    }
    setCamps(prevCamps => [...prevCamps, hotelWithId])
    setShowAddForm(false)
  }

  if (showAddForm) {
    return <AddHotel onClose={() => setShowAddForm(false)} onAdd={handleAddHotel} />
  }

  if (selectedHotel) {
    return <HotelDetails hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
  }

  return (
    <div className="p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="relative w-72">
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <FileExport className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" onClick={() => setShowAddForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              New
            </Button>
          </div>
        </div>

        <div className="border rounded-lg bg-white">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left font-medium text-sm">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm">Name</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Type</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Capacity</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Reserved Slots</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Status</th>
                <th className="py-3 px-4 text-left font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCamps.map((camp) => (
                <tr key={camp.id} className="border-b last:border-b-0">
                  <td className="py-3 px-4">
                    <input type="checkbox" className="rounded" checked={camp.checked} readOnly />
                  </td>
                  <td className="py-3 px-4">{camp.name}</td>
                  <td className="py-3 px-4">{camp.type}</td>
                  <td className="py-3 px-4">{camp.capacity}</td>
                  <td className="py-3 px-4">{camp.reserved}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      camp.status === 'available' ? 'bg-green-100 text-green-800' :
                      camp.status === 'partial' ? 'bg-orange-100 text-orange-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {camp.status === 'available' ? 'Available' :
                       camp.status === 'partial' ? 'Partial' :
                       'Not Available'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setSelectedHotel(camp)}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

