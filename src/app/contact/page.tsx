'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiCheck, FiSend } from 'react-icons/fi'
import { Button } from '@/components/Button'
import { contactFormSchema, ContactFormData } from '@/lib/validations'
import { clinicInfo } from '@/lib/utils'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      // In production, this would send to an API endpoint
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4 font-serif">
              Contact Us
            </h1>
            <p className="text-xl text-[#2A7F7F] font-medium mb-6">Wasiliana Nasi</p>
            <p className="text-gray-600 text-lg">
              Have questions or need to book an appointment? We are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6 font-serif">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Tuma ujumbe wako</p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-[#2A7F7F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1c1c1c] mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                        placeholder="+254 700 123 456"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting}>
                    <FiSend className="mr-2" /> Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Address */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1c1c1c] mb-1">Visit Us</h3>
                    <p className="text-gray-600">{clinicInfo.address}</p>
                    <p className="text-[#2A7F7F] text-sm mt-1">Mombasa, Kenya</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1c1c1c] mb-1">Call Us</h3>
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-gray-600 hover:text-[#2A7F7F] transition-colors"
                    >
                      {clinicInfo.phone}
                    </a>
                    <p className="text-[#2A7F7F] text-sm mt-1">Mon-Fri: 8AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1c1c1c] mb-1">Email Us</h3>
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-gray-600 hover:text-[#2A7F7F] transition-colors"
                    >
                      {clinicInfo.email}
                    </a>
                    <p className="text-[#2A7F7F] text-sm mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1c1c1c] mb-1">Operating Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-4 shadow-md"
          >
            <div className="bg-[#2A7F7F]/10 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="w-16 h-16 text-[#2A7F7F] mx-auto mb-4" />
                <p className="text-gray-600">Map placeholder - Mama Ngina Drive, Mombasa</p>
                <p className="text-sm text-gray-500">Contact us for directions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}