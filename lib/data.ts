import { Home, Bed, Users, List, X, User, Settings } from 'lucide-react'

export const links = [
  {
    name: 'Home',
    id: 'home',
    icon: Home,
  },
  {
    name: 'Auberges & Camps',
    id: 'camps',
    icon: Bed,
  },
  {
    name: 'Residents',
    id: 'residents',
    icon: Users,
  },
  {
    name: 'Reservations',
    id: 'reservations',
    icon: List,
  },
  {
    name: 'Blacklist',
    id: 'blacklist',
    icon: X,
  },
  {
    name: 'Users',
    id: 'users',
    icon: User,
  },
  {
    name: 'Security Settings',
    id: 'settings',
    icon: Settings,
  },
]

export const database = {
  camps: [
    {
      id: 1,
      checked: false,
      name: 'LOLOL',
      type: 'Auberge',
      capacity: 50,
      reserved: 30,
      status: 'available',
      info: {
        address: '123 Street',
        email: 'lolol@example.com',
        phone: '+213 553 543 436',
        coordinates: {
          lon: 36.4343,
          lat: 36.4343,
        },
        offers: ["Restaurant", "Lodging", "Activity"],
        images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400']
      }
    },
    {
      id: 2,
      name: 'Maison Haha Yasser',
      type: 'Auberge',
      capacity: 50,
      reserved: 30,
      status: 'partial',
      checked: false,
      info: {
        address: '456 Avenue',
        email: 'maison@example.com',
        phone: '+213 553 543 437',
        coordinates: {
          lon: 36.4344,
          lat: 36.4344,
        },
        offers: ["Restaurant", "Lodging", "Activity"],
        images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400']
      }
    },
    {
      id: 3,
      name: 'Yasser Haha',
      type: 'Maison',
      capacity: 50,
      reserved: 30,
      status: 'unavailable',
      checked: false,
      info: {
        address: '789 Boulevard',
        email: 'yasser@example.com',
        phone: '+213 553 543 438',
        coordinates: {
          lon: 36.4345,
          lat: 36.4345,
        },
        offers: ["Restaurant", "Lodging", "Activity"],
        images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400']
      }
    }
  ],
  analytics: {
    totalBookings: 1250,
    totalRevenue: 750000,
    averageOccupancy: 78,
    customerSatisfaction: 4.7,
    bookingsByMonth: [
      { month: 'Jan', bookings: 80 },
      { month: 'Feb', bookings: 90 },
      { month: 'Mar', bookings: 110 },
      { month: 'Apr', bookings: 130 },
      { month: 'May', bookings: 150 },
      { month: 'Jun', bookings: 180 },
      { month: 'Jul', bookings: 210 },
      { month: 'Aug', bookings: 230 },
      { month: 'Sep', bookings: 170 },
      { month: 'Oct', bookings: 140 },
      { month: 'Nov', bookings: 100 },
      { month: 'Dec', bookings: 120 },
    ],
    revenueByQuarter: [
      { quarter: 'Q1', revenue: 150000 },
      { quarter: 'Q2', revenue: 210000 },
      { quarter: 'Q3', revenue: 280000 },
      { quarter: 'Q4', revenue: 110000 },
    ],
    topPerformingCamps: [
      { name: 'LOLOL', bookings: 450, revenue: 270000 },
      { name: 'Maison Haha Yasser', bookings: 380, revenue: 228000 },
      { name: 'Yasser Haha', bookings: 320, revenue: 192000 },
    ],
    customerFeedback: [
      { category: 'Cleanliness', rating: 4.8 },
      { category: 'Staff', rating: 4.9 },
      { category: 'Comfort', rating: 4.6 },
      { category: 'Facilities', rating: 4.5 },
      { category: 'Value for Money', rating: 4.7 },
    ],
  }
}

