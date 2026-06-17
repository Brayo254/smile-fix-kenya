'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { Button } from '@/components/Button'
import { FAQ } from '@/components/FAQ'
import { formatPrice } from '@/lib/utils'

const pricing = [
  { service: 'Simple Extraction', price: 3000, description: 'Removal of visible tooth' },
  { service: 'Surgical Extraction', price: 6000, description: 'Removal of impacted or broken tooth' },
  { service: 'Wisdom Tooth', price: 8000, description: 'Extraction of wisdom tooth' },
  { service: 'Multiple Teeth', price: 25000, description: 'Extraction of multiple teeth in one visit' },
]

const benefits = [
  'Painless procedure with anesthesia',
  'Quick recovery time',
  'Professional aftercare',
  'Infection prevention',
  'Expert oral surgeons',
]

const process = [
  { step: 1, title: 'Examination', desc: 'X-ray to assess tooth position' },
  { step: 2, title: 'Anesthesia', desc: 'Local anesthesia for pain-free procedure' },
  { step: 3, title: 'Extraction', desc: 'Safe removal of the tooth' },
  { step: 4, title: 'Aftercare', desc: 'Gauze placement and care instructions' },
]

const faqItems = [
  {
    question: 'Does tooth extraction hurt?',
    questionSwahili: 'Je, kutoa meno ni ya maumivu?',
    answer: 'You will not feel any pain during the procedure due to local anesthesia. Some discomfort is normal after the anesthesia wears off, which can be managed with pain relievers.',
    answerSwahili: 'Hutaona maumivu yoyote wakati wa taratibu kwa sababu ya anesthesia ya ndani. Usawi wa kawaida ni wa kawaida baada ya anesthesia kufanya kazi, ambayo inaweza kudhibitiwa na damu ya kushinda maumivu.',
  },
  {
    question: 'How long does it take to recover?',
    questionSwahili: 'Je, hurejewa inachukua muda gani?',
    answer: 'Most patients recover within 3-7 days. Full healing of the gum takes about 2-3 weeks. We provide detailed aftercare instructions to ensure smooth recovery.',
    answerSwahili: 'Wagonjwa wengi hurejea ndani ya siku 3-7.uponozi kamili ya gum huchukua wiki 2-3. Tunatoa maagizo ya baada ya kuhakikisha uponozi laini.',
  },
  {
    question: 'What can I eat after extraction?',
    questionSwahili: 'Je, ninaweza kula nini baada ya kutoa?',
    answer: 'Stick to soft foods for the first few days. Avoid hot, spicy, crunchy, or chewy foods. Gradually return to normal diet as healing progresses.',
    answerSwahili: 'Shika lishe laini kwa siku za kwanza. Epuka joto, chungwa, crisps, au lishe chewy. Rudia kwa kawaida lishe kama uponozi inaendelea.',
  },
  {
    question: 'When can I brush my teeth?',
    questionSwahili: 'Je, ni lini naweza kusukunia meno yangu?',
    answer: 'Avoid brushing near the extraction site for the first 24 hours. After that, gently brush being careful not to disturb the blood clot. Rinse with salt water after meals.',
    answerSwahili: 'Epuka kusukunia karibu na eneo la kutoa kwa saa 24 za kwanza. Baada ya hapo, sukunia kwa hadhari ili usivuruge damu.oshya na maji ya chumvi baada ya lishe.',
  },
]

export default function ExtractionPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#2A7F7F] font-semibold">Dental Services</span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4 font-serif">Tooth Extraction</h1>
              <p className="text-xl text-[#2A7F7F] font-medium mb-6">Kutoa Meno</p>
              <p className="text-gray-600 text-lg mb-8">
                Safe and painless tooth removal services. Our experienced oral surgeons ensure
                comfortable procedures with minimal recovery time.
              </p>
              <Link href="/booking">
                <Button variant="primary" size="lg">Book Extraction <FiArrowRight className="ml-2" /></Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#2A7F7F] rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">🦷</div>
                <p className="text-2xl font-bold">From KES 3,000</p>
                <p className="text-gray-300">Safe & Professional</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6 font-serif">About Tooth Extraction</h2>
            <p className="text-gray-600 text-lg mb-6">
              Tooth extraction is the removal of a tooth from its socket in the jawbone.
              While we always aim to preserve natural teeth, extraction becomes necessary
              in cases of severe damage, infection, or overcrowding.
            </p>
            <p className="text-gray-600 text-lg">
              Our experienced oral surgeons perform extractions with minimal discomfort.
              We offer both simple extractions (for visible teeth) and surgical extractions
              (for impacted or broken teeth).
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
            <h2 className="text-3xl font-bold text-white mb-4 font-serif">Need a Tooth Extracted?</h2>
            <p className="text-gray-300 mb-8">Our professional team ensures a comfortable, pain-free experience.</p>
            <Link href="/booking"><Button variant="secondary" size="lg">Book Now <FiArrowRight className="ml-2" /></Button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}