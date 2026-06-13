'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiClock, FiHeart, FiShield } from 'react-icons/fi'
import { Button } from '@/components/Button'
import { ServiceCard } from '@/components/ServiceCard'
import { FAQ } from '@/components/FAQ'
import { services } from '@/lib/utils'

const whyChooseUs = [
  {
    icon: FiShield,
    title: 'Expert Care',
    titleSwahili: 'Huduma ya Wataalamu',
    description: 'Our team of experienced dentists provides top-quality care using modern techniques.',
    descriptionSwahili:
      'Timu yetu ya madaktari wenye uzoefu inatoa huduma bora kwa kutumia techniques za kisasa.',
  },
  {
    icon: FiClock,
    title: 'Flexible Hours',
    titleSwahili: 'Saa za Kushika',
    description: 'We offer convenient appointment times to fit your busy schedule.',
    descriptionSwahili:
      'Tunatoa muda wa miadi inayokufaa kulingana na ratibu yako.',
  },
  {
    icon: FiHeart,
    title: 'Family Friendly',
    titleSwahili: 'Kwa Familia Yote',
    description: 'Comfortable environment for patients of all ages, including children.',
    descriptionSwahili:
      'Mazingira ya kush舒适 kwa wagonjwa wa umri wote, ikiwa ni pamoja na watoto.',
  },
]

const faqItems = [
  {
    question: 'How often should I visit the dentist?',
    questionSwahili: 'Ni lini ni lazima nione daktari wa meno?',
    answer:
      'We recommend visiting the dentist every six months for regular check-ups and cleaning. However, if you experience any pain or discomfort, schedule an appointment immediately.',
    answerSwahili:
      'Tunapendekeza kuzuru daktari wa meno kila miezi sita kwa uchunguzi wa kawaida na usafi. Hata hivyo, ikiwa unahisi maumivu yoyote, chagua miadi mara moja.',
  },
  {
    question: 'Are dental procedures painful?',
    questionSwahili: 'Je, taratibu za meno ni za maumivu?',
    answer:
      'We use modern anesthesia techniques to ensure your comfort during procedures. Most patients report minimal to no discomfort during treatments.',
    answerSwahili:
      'Tunatumia techniques za kisasa za anesthesia kuhakikisha faragha yako wakati wa taratibu. Watu wengi wanaonyesha mghar mmoja au hakuna maumivu wakati wa matibabu.',
  },
  {
    question: 'Do you accept insurance?',
    questionSwahili: 'Je, mnapokea bima?',
    answer:
      'Yes, we work with most major insurance providers in Kenya. Please contact us to verify your specific coverage.',
    answerSwahili:
      'Ndiyo, tuna kazi na watoa bima wengi huko Kenya. Tafadhali wasiliana nasi kuthibitisha faragha yako maalum.',
  },
  {
    question: 'What age groups do you treat?',
    questionSwahili: 'Je, ni vikundi vya umri gani mnawafanyia matibabu?',
    answer:
      'We treat patients of all ages, from children to seniors. Our clinic is equipped to handle the unique dental needs of each age group.',
    answerSwahili:
      'Tunafanyia matibabu wagonjwa wa umri wote, kutoka watoto hadi wazee. kliniki yetu imejiweza kushughulikia mahitaji ya kipekee ya meno ya kila kikundi cha umri.',
  },
  {
    question: 'How do I book an appointment?',
    questionSwahili: 'Je, ni namna gani ya kuchukua miadi?',
    answer:
      'You can book an appointment through our website, by calling us, or by visiting our clinic in person. Online booking is available 24/7.',
    answerSwahili:
      'Unaweza kuchukua miadi kupitia tovuti yetu, kutuita, au kutumia kliniki yetu binafsi. kuchukua miadi mtandaoni inapatikana 24/7.',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FFFDF9] via-[#f8f8f5] to-[#FFFDF9] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2A7F7F] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C842] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Swahili Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c1c1c] font-serif leading-tight mb-4">
                Your Perfect Smile <br />
                <span className="text-[#2A7F7F]">Starts Here</span>
              </h1>

              {/* English Subtext */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Mombasa&apos;s trusted family dental clinic. Expert dental care for the whole
                family - from routine checkups to beautiful smiles.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button variant="primary" size="lg">
                    Book Appointment
                    <FiArrowRight className="ml-2" />
                  </Button>
                </Link>
                <Link href="/services/checkup">
                  <Button variant="outline" size="lg">
                    Our Services
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#2A7F7F]">5000+</p>
                  <p className="text-sm text-gray-500">Happy Patients</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#2A7F7F]">15+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#2A7F7F]">4.9</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-[#2A7F7F] rounded-3xl rotate-6" />
                  <div className="absolute inset-4 bg-white rounded-3xl shadow-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">🦷</div>
                      <p className="text-[#2A7F7F] font-semibold">Healthy Smiles</p>
                      <p className="text-gray-500 text-sm">Start Your Journey Today</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-[#2A7F7F] rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-[#2A7F7F] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3 font-serif">
              Our Services
            </h2>
            <p className="text-[#2A7F7F] font-medium">Huduma Zetu</p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Comprehensive dental care services tailored to meet your unique needs.
              From routine check-ups to complex procedures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.name}
                titleSwahili={service.nameSwahili}
                description={service.shortDescription}
                descriptionSwahili={service.shortDescriptionSwahili}
                priceRange={service.priceRange}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3 font-serif">
              Why Choose Us
            </h2>
            <p className="text-[#2A7F7F] font-medium">Kwanini Tuchague</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-[#2A7F7F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1c1c1c] mb-2 font-serif">{item.title}</h3>
                <p className="text-[#2A7F7F] text-sm mb-3">{item.titleSwahili}</p>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Book your appointment today and experience quality dental care in Mombasa.
            </p>
            <Link href="/booking">
              <Button variant="secondary" size="lg">
                Book Your Appointment
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <FAQ items={faqItems} />
        </div>
      </section>
    </div>
  )
}