'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  questionSwahili: string
  answer: string
  answerSwahili: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
  titleSwahili?: string
}

export function FAQ({ items, title = 'Frequently Asked Questions', titleSwahili = 'Maswali Yanayoulizwa Mara kwa Mara' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3 font-serif">{title}</h2>
        <p className="text-[#2A7F7F] font-medium">{titleSwahili}</p>
      </motion.div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-[#1c1c1c] pr-4">{item.question}</span>
              <span className="text-[#2A7F7F]">
                {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-gray-600">
                    <p className="mb-2">{item.answer}</p>
                    <p className="text-[#2A7F7F] text-sm">{item.answerSwahili}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}