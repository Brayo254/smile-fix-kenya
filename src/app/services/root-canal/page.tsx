'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { Button } from '@/components/Button'
import { FAQ } from '@/components/FAQ'
import { formatPrice } from '@/lib/utils'

const pricing = [
  { service: 'Anterior Tooth (Front)', price: 8000, description: 'Root canal for front teeth' },
  { service: 'Premolar', price: 10000, description: 'Root canal for premolars' },
  { service: 'Molar', price: 15000, description: 'Root canal for back teeth' },
  { service: 'Re-treatment', price: 18000, description: 'Previous root canal that needs redoing' },
]

const benefits = [
  'Save your natural tooth',
  'Eliminate tooth pain',
  'Prevent infection spread',
  'Restore normal biting',
  'Long-lasting results',
]

const process = [
  { step: 1, title: 'Diagnosis', desc: 'X-ray to assess the extent of infection' },
  { step: 2, title: 'Anesthesia', desc: 'Local anesthesia for comfortable procedure' },
  { step: 3, title: 'Cleaning', desc: 'Removal of infected pulp and cleaning of canals' },
  { step: 4, title: 'Filling', desc: 'Sealing of canals and placement of temporary crown' },
  { step: 5, title: 'Restoration', desc: 'Permanent crown placement for protection' },
]

const faqItems = [
  {
    question: 'Does root canal treatment hurt?',
    questionSwahili: 'Je, matibabu ya mfereji wa meno ni ya maumivu?',
    answer: 'Modern anesthesia makes the procedure virtually painless. You may experience some soreness afterward, which is manageable with over-the-counter pain relievers.',
    answerSwahili: 'Anesthesia ya kisasa hufanya taratibu isiwe na maumivu kabisa.Unaweza kuhisi ushawishi baadaye, ambayo inaweza kudhibitiwa na damu ya kushinda maumivu.',
  },
  {
    question: 'How long does a root canal take?',
    questionSwahili: 'Je, mfereji wa meno huchukua muda gani?',
    answer: 'Most root canals can be completed in 1-2 visits, each lasting about 60-90 minutes. Complex cases may require additional visits.',
    answerSwahili: 'Mifereji mingi ya meno inaweza kukamilika katika ziara 1-2, kila moja ikidumu kama dakika 60-90. Maswala magumu yanaweza kuhitaji ziara za ziada.',
  },
  {
    question: 'What happens after root canal?',
    questionSwahili: 'Je, hutakua baada ya mfereji wa meno?',
    answer: 'After the root canal, you will need a permanent crown to protect the treated tooth. With proper care, the tooth can last a lifetime.',
    answerSwahili: 'Baada ya mfereji wa meno, utahitaji krono ya kudumu kulinda meno iliyotibiwa. Kwa uangalifu uliothiriwa, meno inaweza kudumu maisha yote.',
  },
  {
    question: 'Can a root canal fail?',
    questionSwahili: 'Je, mfereji wa meno unaweza kushindwa?',
    answer: 'Root canals have a high success rate (over 95%). However, if infection recurs, a re-treatment or apicoectomy may be needed.',
    answerSwahili: 'Mifereji ya meno ina ushiriki wa juu wa mafanikio (zaidi ya 95%). Hata hivyo, ikiwa maambukizi yarudi, retreatment au apicoectomy inaweza kuhitajika.',
  },
]

export default function RootCanalPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#2A7F7F] font-semibold">Dental Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4 font-serif">Root Canal Treatment</h1>
              <p className="text-xl text-[#2A7F7F] font-medium mb-6">Mfereji wa Meno</p>
              <p className="text-gray-600 text-lg mb-8">
                Save your infected tooth with our professional root canal treatment.
                Eliminate pain and restore your natural tooth to full function.
              </p>
              <Link href="/booking">
                <Button variant="primary" size="lg">Book Treatment <FiArrowRight className="ml-2" /></Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#2A7F7F] rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🦷</div>
                <p className="text-2xl font-bold">From KES 8,000</p>
                <p className="text-gray-300">Save your natural tooth</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6 font-serif">About Root Canal Treatment</h2>
            <p className="text-gray-600 text-lg mb-6">
              Root canal treatment (endodontic therapy) is a procedure to treat infected or damaged tooth pulp.
              The treatment involves removing the infected tissue, cleaning and disinfecting the inner chambers,
              and sealing them to prevent further infection.
            </p>
            <p className="text-gray-600 text-lg">
              This treatment saves teeth that would otherwise need extraction. With modern techniques and
              anesthesia, root canals are now comfortable procedures with high success rates.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">Don't Wait - Save Your Tooth</h2>
            <p className="text-gray-300 mb-8">Early treatment prevents further complications and saves your natural tooth.</p>
            <Link href="/booking"><Button variant="secondary" size="lg">Book Now <FiArrowRight className="ml-2" /></Button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}