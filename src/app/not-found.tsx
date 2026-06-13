'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome, FiSearch } from 'react-icons/fi'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="text-8xl font-bold text-[#2A7F7F] font-serif mb-4"
        >
          404
        </motion.div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-[#1c1c1c] font-serif mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Don&apos;t worry - even the healthiest smile sometimes loses its way.
          Let&apos;s get you back on track!
        </p>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-[#2A7F7F]/10 rounded-full flex items-center justify-center">
            <FiSearch className="w-12 h-12 text-[#2A7F7F]" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" size="lg">
              <FiHome className="mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="outline" size="lg">
              Book an Appointment
            </Button>
          </Link>
        </div>

        {/* Dental-themed footer text */}
        <p className="mt-8 text-gray-500 text-sm">
          Need dental care? We&apos;re here to help!
        </p>
      </motion.div>
    </div>
  )
}