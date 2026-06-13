'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTooth, FaSmile, FaMedkit, FaCut, FaArrowRight } from 'react-icons/fa'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaTooth,
  FaSmile,
  FaMedkit,
  FaCut,
}

interface ServiceCardProps {
  id: string
  title: string
  titleSwahili: string
  description: string
  descriptionSwahili: string
  priceRange: string
  icon: string
  index?: number
}

export function ServiceCard({
  id,
  title,
  titleSwahili,
  description,
  descriptionSwahili,
  priceRange,
  icon,
  index = 0,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || FaTooth

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
        <div className="w-16 h-16 bg-[#2A7F7F]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2A7F7F] group-hover:scale-110 transition-all duration-300">
          <IconComponent className="w-8 h-8 text-[#2A7F7F] group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-[#1c1c1c] mb-2 font-serif">{title}</h3>
        <p className="text-sm text-[#2A7F7F] mb-3 font-medium">{titleSwahili}</p>

        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#F5C842] font-semibold">{priceRange}</span>
          <Link
            href={`/services/${id}`}
            className="flex items-center gap-2 text-[#2A7F7F] hover:text-[#236060] transition-colors font-medium group-hover:gap-3"
          >
            Learn More
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}