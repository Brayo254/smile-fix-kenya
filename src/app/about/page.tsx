'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTarget, FiHeart, FiArrowRight } from 'react-icons/fi'
import { Button } from '@/components/Button'

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Dentist',
    roleSwahili: 'Mratibu wa Mino',
    specialization: 'General Dentistry & Root Canal Specialist',
    image: '👩‍⚕️',
  },
  {
    name: 'Dr. Michael Ochieng',
    role: 'Dental Surgeon',
    roleSwahili: 'Daktari wa Mino',
    specialization: 'Oral Surgery & Extraction Expert',
    image: '👨‍⚕️',
  },
  {
    name: 'Dr. Grace Wambui',
    role: 'Orthodontist',
    roleSwahili: 'Mratibu wa Mino ya Muundo',
    specialization: 'Veneers & Cosmetic Dentistry',
    image: '👩‍⚕️',
  },
]

const values = [
  {
    icon: FiAward,
    title: 'Excellence',
    titleSwahili: 'Ubora',
    description: 'We maintain the highest standards in dental care, using modern techniques and premium materials.',
    descriptionSwahili: 'Tunashikilia viwango vya juu katika huduma ya meno, kutumia techniques za kisasa na vifaa bora.',
  },
  {
    icon: FiUsers,
    title: 'Patient-Centered',
    titleSwahili: 'Mgutils Mwisho wa Kwanza',
    description: 'Your comfort and satisfaction are our top priorities. We listen and customize treatments to your needs.',
    descriptionSwahili: 'Faragha na kuridhika kwako ni kipaumbele chetu. tuna sikiliza na kufanya matibabu kulingana na mahitaji yako.',
  },
  {
    icon: FiTarget,
    title: 'Precision',
    titleSwahili: 'Usahihi',
    description: 'Every procedure is performed with meticulous attention to detail for optimal results.',
    descriptionSwahili: 'Kila taratibu inafanywa kwa umakini mkubwa kwa matokeo bora.',
  },
  {
    icon: FiHeart,
    title: 'Compassion',
    titleSwahili: 'Huruma',
    description: 'We treat every patient with empathy and care, ensuring a comfortable experience.',
    descriptionSwahili: 'Tunawatibu kila mgonjwa kwa huruma na makini, kuhakikisha uzoefu wa kush舒适.',
  },
]

export default function AboutPage() {
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
              About SmileFix Kenya
            </h1>
            <p className="text-xl text-[#2A7F7F] font-medium mb-6">Kuhusu SmileFix Kenya</p>
            <p className="text-gray-600 text-lg">
              We have been serving the Mombasa community with exceptional dental care for over 15 years.
              Our mission is to provide accessible, high-quality dental services to families across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-6 font-serif">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, SmileFix Kenya started with a simple vision: to make professional dental care
                accessible to every family in Mombasa and beyond.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small practice has grown into one of the most trusted dental clinics in the region.
                Our team of experienced dentists is committed to continuing education and staying updated with the
                latest advancements in dental technology.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of happy patients, providing comprehensive dental care from routine
                check-ups to advanced cosmetic procedures. Our clinic is equipped with state-of-the-art technology
                ensuring precise diagnoses and effective treatments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#2A7F7F] rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-[#F5C842]">15+</p>
                    <p className="text-sm mt-2">Years of Experience</p>
                    <p className="text-xs text-gray-300">Miaka 15+</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-[#F5C842]">5000+</p>
                    <p className="text-sm mt-2">Patients Served</p>
                    <p className="text-xs text-gray-300">Wagonjwa 5000+</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-[#F5C842]">4.9</p>
                    <p className="text-sm mt-2">Star Rating</p>
                    <p className="text-xs text-gray-300">Kiwango 4.9</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-4xl font-bold text-[#F5C842]">4</p>
                    <p className="text-sm mt-2">Expert Dentists</p>
                    <p className="text-xs text-gray-300">Madaktari 4</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3 font-serif">
              Our Values
            </h2>
            <p className="text-[#2A7F7F] font-medium">Maadili Yetu</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="w-12 h-12 bg-[#2A7F7F] rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-1 font-serif">{value.title}</h3>
                <p className="text-sm text-[#2A7F7F] mb-3">{value.titleSwahili}</p>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3 font-serif">
              Meet Our Team
            </h2>
            <p className="text-[#2A7F7F] font-medium">Kutana na Timu Yetu</p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our experienced team of dental professionals is dedicated to providing you with the best care possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-[#1c1c1c] mb-1 font-serif">{member.name}</h3>
                <p className="text-[#2A7F7F] font-medium text-sm mb-1">{member.role}</p>
                <p className="text-xs text-gray-500 mb-3">{member.roleSwahili}</p>
                <p className="text-gray-600 text-sm">{member.specialization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#1c1c1c]">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-serif">
              Advanced Technology
            </h2>
            <p className="text-[#F5C842] font-medium">Teknolojia ya Kisasa</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Digital X-Rays', desc: 'Clearer images with 90% less radiation' },
              { title: 'Intraoral Cameras', desc: 'See what we see with detailed imagery' },
              { title: 'Modern Equipment', desc: 'Latest dental tools for precise treatments' },
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FFFDF9]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-4 font-serif">
              Ready to Experience Quality Care?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Book your appointment today and let our expert team take care of your smile.
            </p>
            <Link href="/booking">
              <Button variant="primary" size="lg">
                Book Appointment
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}