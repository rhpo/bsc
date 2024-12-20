'use client'

import { useState } from 'react'
import { Building } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Hotel } from '@/lib/types'

interface AddHotelProps {
  onClose: () => void
  onAdd: (hotel: Omit<Hotel, 'id'>) => void
}

export default function AddHotel({ onClose, onAdd }: AddHotelProps) {
  const [formData, setFormData] = useState({
    type: 'Auberge' as const,
    name: '',
    capacity: '',
    wilaya: '',
    city: '',
    address: '',
    email: '',
    phone: '',
    status: 'available' as const,
    reservedSlots: '0',
    offers: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const newHotel: Omit<Hotel, 'id'> = {
      checked: false,
      name: formData.name,
      type: formData.type,
      capacity: parseInt(formData.capacity) || 0,
      reserved: parseInt(formData.reservedSlots) || 0,
      status: formData.status,
      info: {
        address: formData.address,
        email: formData.email,
        phone: formData.phone,
        coordinates: {
          lon: 0, // You might want to add these to the form
          lat: 0,
        },
        offers: formData.offers,
        images: [], // You might want to handle image uploads
      },
    }

    onAdd(newHotel)
  }

  const handleClearForm = () => {
    setFormData({
      type: 'Auberge',
      name: '',
      capacity: '',
      wilaya: '',
      city: '',
      address: '',
      email: '',
      phone: '',
      status: 'available',
      reservedSlots: '0',
      offers: [],
    })
  }

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-6">Add New Establishment</h2>
        
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-4 flex items-center gap-2">
            <Building className="h-4 w-4" />
            Type of Establishment
          </h3>
          <RadioGroup
            defaultValue="Auberge"
            onValueChange={(value: 'Auberge' | 'Camp') => setFormData({ ...formData, type: value })}
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Auberge" id="auberge" />
              <Label htmlFor="auberge">Auberge</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Camp" id="camp" />
              <Label htmlFor="camp">Camp</Label>
            </div>
          </RadioGroup>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic Details</TabsTrigger>
            <TabsTrigger value="availability">Availability And Offers</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of Establishment"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  placeholder="Capacity"
                  type="number"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="wilaya">Wilaya</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, wilaya: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select wilaya" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wilaya1">Wilaya 1</SelectItem>
                    <SelectItem value="wilaya2">Wilaya 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, city: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="city1">City 1</SelectItem>
                    <SelectItem value="city2">City 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="ex: Wilaya KYZ Rue ABC"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="ex:123456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="images">Images</Label>
              <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50">
                <input type="file" className="hidden" id="images" multiple accept="image/*" />
                <Label htmlFor="images" className="cursor-pointer text-blue-600">Upload from computer</Label>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="availability" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Current Status</Label>
                <Select 
                  value={formData.status}
                  onValueChange={(value: 'available' | 'partial' | 'unavailable') => 
                    setFormData({ ...formData, status: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Available" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="partial">Partial</SelectItem>
                    <SelectItem value="unavailable">Not Available</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reservedSlots">Reserved Slots</Label>
                <Input
                  id="reservedSlots"
                  type="number"
                  placeholder="ex:30"
                  value={formData.reservedSlots}
                  onChange={(e) => setFormData({ ...formData, reservedSlots: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="offers">Offers</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, offers: [...formData.offers, value] })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select offers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Restaurant">Restaurant</SelectItem>
                  <SelectItem value="Lodging">Lodging</SelectItem>
                  <SelectItem value="Activity">Activity</SelectItem>
                </SelectContent>
              </Select>
              <div className="mt-2 flex flex-wrap gap-2">
                {formData.offers.map((offer, index) => (
                  <div key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {offer}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={handleClearForm}>
          Clear form
        </Button>
        <div className="space-x-2">
          {formData.type === 'Auberge' ? (
            <Button onClick={handleSubmit}>Add</Button>
          ) : (
            <Button onClick={handleSubmit}>Next</Button>
          )}
        </div>
      </div>
    </div>
  )
}

