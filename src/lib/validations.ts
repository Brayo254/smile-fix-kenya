import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export const bookingFormSchema = z.object({
  service: z.string().min(1, { message: 'Please select a service' }),
  date: z.string().min(1, { message: 'Please select a date' }),
  time: z.string().min(1, { message: 'Please select a time' }),
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  patientEmail: z.string().email({ message: 'Please enter a valid email address' }),
  patientPhone: z.string().min(10, { message: 'Please enter a valid phone number' }),
  patientAge: z.number({ message: 'Please enter a valid age' }).min(1, { message: 'Please enter a valid age' }).max(120),
  notes: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type BookingFormData = z.infer<typeof bookingFormSchema>