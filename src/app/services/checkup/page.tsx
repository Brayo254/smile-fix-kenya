'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiClock } from 'react-icons/fi'
import { Button } from '@/components/Button'
import { FAQ } from '@/components/FAQ'
import { formatPrice } from '@/lib/utils'

const pricing = [
  { service: 'Basic Check-up', price: 2000, description: 'Visual examination and consultation' },
  { service: 'Standard Check-up', price: 2500, description: 'Examination + X-rays + Cleaning' },
  { service: 'Comprehensive Check-up', price: 3500, description: 'Full examination + X-rays + Deep cleaning' },
]

const benefits = [
  'Early detection of dental issues',
  'Professional teeth cleaning',
  'Personalized oral hygiene advice',
  'X-ray diagnostics when needed',
  'Treatment recommendations',
]

const process = [
  { step: 1, title: 'Visual Examination', desc: 'Our dentist will examine your teeth and gums for any visible issues' },
  { step: 2, title: 'X-Rays (if needed)', desc: 'Digital X-rays to detect hidden problems beneath the surface' },
  { step: 3, title: 'Cleaning', desc: 'Professional cleaning to remove plaque and tartar buildup' },
  { step: 4, title: 'Consultation', desc: 'Discussion of findings and personalized treatment plan' },
]

const faqItems = [
  {
    question: 'How long does a dental check-up take?',
    questionSwahili: 'Uchunguzi wa meno huchukua muda gani?',
    answer: 'A typical dental check-up takes about 30-45 minutes. A comprehensive check-up with cleaning may take up to 60 minutes.',
    answerSwahili: 'Kawaida uchunguzi wa meno huchukua dakika 30-45. Uchunguzi kamili na usafi unaweza kuchukua hadi dakika 60.',
  },
  {
    question: 'Do I need X-rays at every visit?',
    questionSwahili: 'Je, ninahitaji X-rays kila wakati?',
    answer: 'Not necessarily. X-rays are recommended based on your individual needs and risk factors. We follow safe radiation guidelines.',
    answerSwahili: 'Si lazima. X-rays zinapendekezwa kulingana na mahitaji yako binafsi na vihisi vyangu. tunaizingatia viwango salama ya radiation.',
  },
  {
    question: 'Is dental cleaning painful?',
    questionSwahili: 'Je, usafi wa meno ni wa maumivu?',
    answer: 'Most patients experience minimal discomfort during cleaning. If you have sensitive teeth, let us know and we can use gentle techniques.',
    answerSwahili: 'Watu wengi wanaona ushawishi kidogo wakati wa usafi. Ikiwa una meno yenye usensitivity, waambie na tunaweza kutumia techniques ya hiyari.',
  },
  {
    question: 'How often should I get a check-up?',
    questionSwahili: 'Ni lini ni lazima nife uchunguzi?',
    answer: 'We recommend a check-up every six months for optimal oral health. Your dentist may recommend more frequent visits if needed.',
    answerSwahili: 'Tunapendekeza uchunguzi kila miezi sita kwa afya bora ya meno. Daktari wako anaweza kushauri ziara za mara kwa mara ikiwa inahitajika.',
  },
]

export default function CheckupPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#2A7F7F] font-semibold">Dental Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4 font-serif">
                Dental Check-up
              </h1>
              <p className="text-xl text-[#2A7F7F] font-medium mb-6">Uchunguzi wa Mino</p>
              <p className="text-gray-600 text-lg mb-8">
                Comprehensive oral examination and cleaning to maintain your dental health.
                Regular check-ups help prevent problems before they start.
              </p>
              <Link href="/booking">
                <Button variant="primary" size="lg">
                  Book Check-up <FiArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2A7F7F] rounded-3xl p-8 text-white"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🦷</div>
                <p className="text-2xl font-bold">From KES 2,000</p>
                <p className="text-gray-300">Professional dental examination</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6 font-serif">
              About Dental Check-up
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Regular dental check-ups are essential for maintaining optimal oral health.
              During your visit, our experienced dentists will perform a thorough examination
              of your teeth, gums, and mouth to identify any potential issues early.
            </p>
            <p className="text-gray-600 text-lg">
              We use state-of-the-art digital X-ray technology to detect problems that may not
              be visible to the naked eye. Professional cleaning removes plaque and tartar
              that regular brushing cannot eliminate, helping prevent cavities and gum disease.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-3 font-serif">Benefits</h2>
            <p className="text-[#2A7F7F] font-medium">Manufaa</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg"
              >
                <FiCheck className="text-[#2A7F7F] flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-3 font-serif">What to Expect</h2>
            <p className="text-[#2A7F7F] font-medium">Ninicha Kutarajia</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#1c1c1c] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-3 font-serif">Pricing</h2>
            <p className="text-[#2A7F7F] font-medium">Bei</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2">{item.service}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                <p className="text-2xl font-bold text-[#2A7F7F]">{formatPrice(item.price)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">
              Schedule Your Check-up Today
            </h2>
            <p className="text-gray-300 mb-8">
              Regular dental check-ups are key to maintaining a healthy smile.
            </p>
            <Link href="/booking">
              <Button variant="secondary" size="lg">
                Book Now <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}