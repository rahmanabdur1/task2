import hotel1 from '@/assets/images/category/hotel/4by3/01.jpg'
import hotel2 from '@/assets/images/category/hotel/4by3/02.jpg'
import hotel3 from '@/assets/images/category/hotel/4by3/03.jpg'
import hotel4 from '@/assets/images/category/hotel/4by3/04.jpg'
import hotel7 from '@/assets/images/category/hotel/4by3/07.jpg'
import hotel8 from '@/assets/images/category/hotel/4by3/08.jpg'
import hotel10 from '@/assets/images/category/hotel/4by3/10.jpg'
import hotel11 from '@/assets/images/category/hotel/4by3/11.jpg'

import type { HotelType, NotificationType } from '@/views/hotels/List/type'

export const hotels: HotelType[] = [
  {
    id: 1,
    name: 'Courtyard by Marriott New York',
    address: '5855 W Century Blvd, Los Angeles - 90045',
    images: [hotel4, hotel3, hotel2, hotel1],
    price: 750,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
    schemes: ['Free Cancellation till 7 Jan 2022', 'Free Breakfast'],
    sale: '30% Off',
    link: { name: '' }
  },
  {
    id: 2,
    name: 'Pride moon Village Resort & Spa',
    address: '31J W Spark Street, California - 24578',
    images: [hotel10],
    price: 980,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
    link: { name: '' }
  },
  {
    id: 3,
    name: 'Royal Beach Resort',
    address: 'Manhattan street, London - 24578',
    images: [hotel11],
    price: 540,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
    schemes: ['Free Cancellation till 7 Jan 2022'],
    link: { name: '' }
  },
  {
    id: 4,
    name: 'Park Plaza Lodge Hotel',
    address: '5855 W Century Blvd, Los Angeles - 9004',
    images: [hotel8, hotel2, hotel3, hotel7],
    price: 845,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 3.5,
    schemes: ['Free Cancellation till 7 Jan 2022', 'Free Breakfast'],
    link: { name: '' }
  },
  {
    id: 5,
    name: 'Beverly Hills Marriott',
    address: '31J W Spark Street, California - 24578',
    images: [hotel11],
    price: 645,
    features: ['Air Conditioning', 'Wifi', 'Kitchen', 'Pool'],
    rating: 4.5,
    link: { name: '' }
  }
]

export const notificationData: NotificationType[] = [
  {
    title: 'New! Booking flights from New York ✈️',
    content: 'Find the flexible ticket on flights around the world. Start searching today',
    time: '05 Feb 2024'
  },
  {
    title: 'Sunshine saving are here 🌞 save 30% or more on a stay',
    time: '24 Aug 2024'
  }
]
