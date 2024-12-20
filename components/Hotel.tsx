import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

interface HotelProps {
  hotel: any
  onclose: () => void
}

export default function Hotel({ hotel, onclose }: HotelProps) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  if (!hotel) return <p>Oops!</p>

  return (
    <div>
      <div onClick={onclose} className="return cursor-pointer w-fit transition-all duration-400 hover:scale-110">
        <h1 className="name m-0 font-normal italic text-2xl flex gap-2 items-center">
          <div className="icon flex justify-center items-center transition-all duration-400 hover:translate-x-[-0.2rem]">
            <ArrowLeft />
          </div>
          {hotel.name}
        </h1>
      </div>

      <div className="hotel flex gap-8">
        <div className="info flex flex-col gap-4 w-1/2">
          <div className="section border border-[#dadada] p-4 rounded-2xl">
            <h2 className="m-0 w-fit mb-4 text-[#358cc1]">Basic Details</h2>
            <div className="section-info flex flex-col gap-2 w-fit">
              <p><strong>Name:</strong> {hotel.name}</p>
              <p><strong>Type:</strong> {hotel.type}</p>
              <p><strong>Capacity:</strong> {hotel.capacity}</p>
              <p><strong>Address:</strong> {hotel.info.address}</p>
              <p><strong>Email:</strong> {hotel.info.email}</p>
              <p><strong>Phone:</strong> {hotel.info.phone}</p>
              <p><strong>Coordinates:</strong></p>
              <p>&nbsp;&bull;&nbsp; Longitude: {hotel.info.coordinates.lon}</p>
              <p>&nbsp;&bull;&nbsp; Latitude: {hotel.info.coordinates.lat}</p>
            </div>
          </div>

          <div className="section border border-[#dadada] p-4 rounded-2xl">
            <h2 className="m-0 w-fit mb-4 text-[#358cc1]">Availability & Offers</h2>
            <div className="section-info flex flex-col gap-2 w-fit">
              <p><strong>Current Status</strong>: {capitalize(hotel.status)}</p>
              <p><strong>Reserved Slots</strong>: {hotel.reserved}</p>
              <p><strong>Offers:</strong></p>
              {hotel.info.offers.map((service: string, index: number) => (
                <p key={index}>&nbsp;&bull;&nbsp; {capitalize(service)}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="images w-1/2 h-full gap-4 flex flex-col justify-between">
          {hotel.info.images.map((image: string, index: number) => (
            <Image key={index} src={image} alt="Hotel" width={300} height={200} />
          ))}
        </div>
      </div>
    </div>
  )
}

