'use client'

import { motion } from 'framer-motion'
import { FiCalendar, FiClock, FiUser, FiCheck } from 'react-icons/fi'
import { BookingForm } from '@/components/BookingForm'

export default function BookingPage() {
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
              Book an Appointment
            </h1>
            <p className="text-xl text-[#2A7F7F] font-medium mb-6">Chagua Miadi</p>
            <p className="text-gray-600 text-lg">
              Schedule your visit to SmileFix Kenya. Our team will confirm your appointment within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center">
                <FiCalendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1c1c1c]">Easy Scheduling</h3>
                <p className="text-sm text-gray-500">Book online 24/7</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center">
                <FiClock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1c1c1c]">Quick Confirmation</h3>
                <p className="text-sm text-gray-500">Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center">
                <FiUser className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#1c1c1c]">Personalized Care</h3>
                <p className="text-sm text-gray-500">Tailored to your needs</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Note */}
      <section className="py-12 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-gray-600">
            <strong>Note:</strong> For urgent dental concerns, please call us directly at{' '}
            <a href="tel:+254700123456" className="text-[#2A7F7F] font-semibold">
              +254 700 123 456
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}