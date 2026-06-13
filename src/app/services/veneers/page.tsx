'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { Button } from '@/components/Button'
import { FAQ } from '@/components/FAQ'
import { formatPrice } from '@/lib/utils'

const pricing = [
  { service: 'Porcelain Veneer (per tooth)', price: 15000, description: 'High-quality porcelain veneer' },
  { service: 'Composite Veneer (per tooth)', price: 8000, description: 'Cost-effective composite option' },
  { service: 'Full Set (8 Front Teeth)', price: 100000, description: 'Complete smile transformation' },
]

const benefits = [
  'Natural-looking results',
  'Stain-resistant surface',
  'Durable and long-lasting',
  'Minimal tooth preparation',
  'Instant smile transformation',
]

const process = [
  { step: 1, title: 'Consultation', desc: 'Discuss your goals and examine your teeth' },
  { step: 2, title: 'Preparation', desc: 'Minimal reshaping of tooth enamel if needed' },
  { step: 3, title: 'Impressions', desc: 'Custom molds for your veneers' },
  { step: 4, title: 'Placement', desc: 'Bonding of custom-made veneers' },
]

const faqItems = [
  {
    question: 'How long do veneers last?',
    questionSwahili: 'Je, veneers h维亚 kwa muda gani?',
    answer: 'With proper care, porcelain veneers can last 10-15 years or more. Composite veneers typically last 5-7 years.',
    answerSwahili: 'Kwa uangalifu uliothiriwa, veneers za porcelaini zinaweza kudumu miaka 10-15 au zaidi. Veneers za composite kawaida zinadura miaka 5-7.',
  },
  {
    question: 'Do veneers require special care?',
    questionSwahili: 'Je, veneers zinahitaji uangalifu maalum?',
    answer: 'No special care needed - just maintain good oral hygiene and avoid biting hard objects. Regular dental check-ups are recommended.',
    answerSwahili: 'Hakuna uangalifu maalum unahitajika - tu shika usafi wa kawaida wa meno na epuka kugonga vitu vikali. Uchunguzi wa kawaida wa meno unapendekezwa.',
  },
  {
    question: 'Can veneers be removed?',
    questionSwahili: 'Je, veneers zinaweza kuondolewa?',
    answer: 'Porcelain veneers are permanent as some enamel is removed. Composite veneers can be removed if needed.',
    answerSwahili: 'Veneers za porcelaini ni za kudumu kwani baadhi ya enamel huondolewa. Veneers za composite zinaweza kuondolewa ikiwa inahitajika.',
  },
  {
    question: 'Are veneers reversible?',
    questionSwahili: 'Je, veneers zinaweza kutenduliwa?',
    answer: 'Porcelain veneers are not reversible. However, composite veneers are minimally invasive and can be reversed.',
    answerSwahili: 'Veneers za porcelaini hazitendi. Hata hivyo, veneers za composite zinaweza kutenduliwa.',
  },
]

export default function VeneersPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#2A7F7F] font-semibold">Dental Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4 font-serif">Dental Veneers</h1>
              <p className="text-xl text-[#2A7F7F] font-medium mb-6">Veneers za Mino</p>
              <p className="text-gray-600 text-lg mb-8">
                Transform your smile with custom porcelain or composite veneers.
                Achieve a perfect, natural-looking smile you've always wanted.
              </p>
              <Link href="/booking">
                <Button variant="primary" size="lg">Book Consultation <FiArrowRight className="ml-2" /></Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2A7F7F] rounded-3xl p-8 text-white"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">😁</div>
                <p className="text-2xl font-bold">From KES 8,000</p>
                <p className="text-gray-300">Per tooth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6 font-serif">About Dental Veneers</h2>
            <p className="text-gray-600 text-lg mb-6">
              Dental veneers are thin, custom-made shells designed to cover the front surface of teeth.
              They are an excellent solution for correcting discolored, worn, chipped, or misaligned teeth.
            </p>
            <p className="text-gray-600 text-lg">
              We offer both porcelain and composite veneers. Porcelain veneers are highly durable and
              stain-resistant, while composite veneers provide a more affordable alternative with natural results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-3 font-serif">Benefits</h2>
            <p className="text-[#2A7F7F] font-medium">Manufaa</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div key={benefit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3 p-4 bg-white rounded-lg">
                <FiCheck className="text-[#2A7F7F] flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-3 font-serif">Process</h2>
            <p className="text-[#2A7F7F] font-medium">Mchakato</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">{item.step}</div>
                <h3 className="font-bold text-[#1c1c1c] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-3 font-serif">Pricing</h2>
            <p className="text-[#2A7F7F] font-medium">Bei</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((item, index) => (
              <motion.div key={item.service} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2">{item.service}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-[#2A7F7F]">{formatPrice(item.price)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FAQ items={faqItems} />
        </div>
      </section>

      <section className="py-20 bg-[#1c1c1c]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">Get Your Perfect Smile</h2>
            <p className="text-gray-300 mb-8">Book a consultation to discuss your veneer options.</p>
            <Link href="/booking"><Button variant="secondary" size="lg">Book Now <FiArrowRight className="ml-2" /></Button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}