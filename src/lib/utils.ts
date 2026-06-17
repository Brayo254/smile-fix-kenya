import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function generateTimeSlots(): string[] {
  const slots: string[] = []
  for (let hour = 8; hour <= 17; hour++) {
    const time = `${hour.toString().padStart(2, '0')}:00`
    slots.push(time)
    if (hour < 17) {
      slots.push(`${hour.toString().padStart(2, '0')}:30`)
    }
  }
  return slots
}

export const services = [
  {
    id: 'checkup',
    name: 'Dental Check-up',
    nameSwahili: 'Uchunguzi wa Meno',
    shortDescription: 'Comprehensive oral examination and cleaning',
    shortDescriptionSwahili: 'Uchunguzi wa kina wa mimea na usafi',
    priceRange: 'KES 2,000 - 3,500',
    icon: 'FaTooth',
  },
  {
    id: 'veneers',
    name: 'Dental Veneers',
    nameSwahili: 'Veneers za Meno',
    shortDescription: 'Custom porcelain veneers for a perfect smile',
    shortDescriptionSwahili: 'Veneers za porcelaini kwa ulaji bora',
    priceRange: 'KES 15,000 - 45,000',
    icon: 'FaSmile',
  },
  {
    id: 'root-canal',
    name: 'Root Canal',
    nameSwahili: 'Mfereji wa Meno',
    shortDescription: 'Save infected teeth with root canal therapy',
    shortDescriptionSwahili: 'okoa meno yaliyoambukizwa na matibabu ya mfereji',
    priceRange: 'KES 8,000 - 15,000',
    icon: 'FaMedkit',
  },
  {
    id: 'extraction',
    name: 'Tooth Extraction',
    nameSwahili: 'Kutoa Meno',
    shortDescription: 'Safe and painless tooth removal services',
    shortDescriptionSwahili: 'Huduma za kutoa meno salama na bila maumivu',
    priceRange: 'KES 3,000 - 8,000',
    icon: 'FaCut',
  },
]

export const clinicInfo = {
  name: 'SmileFix Kenya',
  phone: '+254 700 123 456',
  email: 'info@smilefix.co.ke',
  address: 'Mama Ngina Drive, Mombasa, Kenya',
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
  social: {
    facebook: 'https://facebook.com/smilefixkenya',
    instagram: 'https://instagram.com/smilefixkenya',
    twitter: 'https://twitter.com/smilefixkenya',
  },
}