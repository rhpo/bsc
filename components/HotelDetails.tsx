import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface HotelProps {
  hotel: any
  onClose: () => void
}

export default function HotelDetails({ hotel, onClose }: HotelProps) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  if (!hotel) return <p>Oops!</p>

  return (
    <div className="p-4">
      <div 
        onClick={onClose} 
        className="cursor-pointer w-fit transition-all duration-400 hover:scale-110 mb-6"
      >
        <h1 className="text-2xl font-normal italic flex items-center gap-2">
          <div className="flex justify-center items-center transition-all duration-400 hover:translate-x-[-0.2rem]">
            <ArrowLeft />
          </div>
          {hotel.name}
        </h1>
      </div>

      <div className="flex gap-8">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="border border-gray-300 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-[#358cc1]">Basic Details</h2>
            <div className="flex flex-col gap-2">
              <p><strong>Name:</strong> {hotel.name}</p>
              <p><strong>Type:</strong> {hotel.type}</p>
              <p><strong>Capacity:</strong> {hotel.capacity}</p>
              <p><strong>Address:</strong> {hotel.info.address}</p>
              <p><strong>Email:</strong> {hotel.info.email}</p>
              <p><strong>Phone:</strong> {hotel.info.phone}</p>
              <p><strong>Coordinates:</strong></p>
              <p className="ml-4">• Longitude: {hotel.info.coordinates.lon}</p>
              <p className="ml-4">• Latitude: {hotel.info.coordinates.lat}</p>
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 text-[#358cc1]">Availability & Offers</h2>
            <div className="flex flex-col gap-2">
              <p><strong>Current Status:</strong> {capitalize(hotel.status)}</p>
              <p><strong>Reserved Slots:</strong> {hotel.reserved}</p>
              <p><strong>Offers:</strong></p>
              {hotel.info.offers.map((service: string, index: number) => (
                <p key={index} className="ml-4">• {capitalize(service)}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-4">
          {hotel.info.images.map((image: string, index: number) => (
            <div key={index} className="w-full h-48 relative">
              <Image 
                src={image} 
                alt={`Image of ${hotel.name}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

