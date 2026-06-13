import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789')

const bookingSchema = z.object({
  service: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  patientEmail: z.string().email(),
  patientPhone: z.string().min(10),
  patientAge: z.number().min(1).max(120),
  notes: z.string().optional(),
})

const serviceNames: Record<string, string> = {
  'checkup': 'Dental Check-up',
  'veneers': 'Dental Veneers',
  'root-canal': 'Root Canal',
  'extraction': 'Tooth Extraction',
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = bookingSchema.parse(body)

    const serviceName = serviceNames[data.service] || data.service

    // Send confirmation email
    try {
      const result = await resend.emails.send({
        from: 'SmileFix Kenya <onboarding@resend.dev>',
        to: data.patientEmail,
        subject: 'Booking Confirmation - SmileFix Kenya',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2A7F7F;">Appointment Confirmed!</h1>
            <p>Dear ${data.firstName} ${data.lastName},</p>
            <p>Thank you for booking with SmileFix Kenya. Your appointment has been received and will be confirmed within 24 hours.</p>

            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #1c1c1c;">Appointment Details</h2>
              <p><strong>Service:</strong> ${serviceName}</p>
              <p><strong>Date:</strong> ${data.date}</p>
              <p><strong>Time:</strong> ${data.time}</p>
            </div>

            <p>If you need to reschedule or have any questions, please call us at +254 700 123 456.</p>

            <p>Best regards,<br/>SmileFix Kenya Team</p>
          </div>
        `,
      })
      console.log('Email sent:', result)
    } catch (emailError) {
      console.error('Email error:', emailError)
      // Continue even if email fails - don't block the booking
    }

    return NextResponse.json(
      { message: 'Booking submitted successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { message: 'Failed to process booking' },
      { status: 400 }
    )
  }
}