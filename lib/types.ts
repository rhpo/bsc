export interface Coordinates {
  lon: number
  lat: number
}

export interface HotelInfo {
  address: string
  email: string
  phone: string
  coordinates: Coordinates
  offers: string[]
  images: string[]
}

export interface Hotel {
  id: number
  checked: boolean
  name: string
  type: 'Auberge' | 'Maison' | 'Camp'
  capacity: number
  reserved: number
  status: 'available' | 'partial' | 'unavailable'
  info: HotelInfo
}

