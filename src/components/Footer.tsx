'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram } from 'react-icons/fi'
import { clinicInfo } from '@/lib/utils'

const footerLinks = {
  services: [
    { href: '/services/checkup', label: 'Dental Check-up' },
    { href: '/services/veneers', label: 'Dental Veneers' },
    { href: '/services/root-canal', label: 'Root Canal' },
    { href: '/services/extraction', label: 'Tooth Extraction' },
  ],
  quickLinks: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Appointment' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-[#FFFDF9]">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🦷</span>
              <span className="text-xl font-bold font-serif">
                Smile<span className="text-[#2A7F7F]">Fix</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted dental clinic in Mombasa, Kenya. Professional care for the whole family.
            </p>
            <div className="flex gap-4">
              <a
                href={clinicInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#2A7F7F] rounded-full hover:bg-[#236060] transition-colors"
              >
                <FiFacebook size={20} />
              </a>
              <a
                href={clinicInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#2A7F7F] rounded-full hover:bg-[#236060] transition-colors"
              >
                <FiInstagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F5C842]">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#2A7F7F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F5C842]">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#2A7F7F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[#F5C842]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#2A7F7F] mt-1" />
                <span className="text-gray-400">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#2A7F7F]" />
                <a href={`tel:${clinicInfo.phone}`} className="text-gray-400 hover:text-[#2A7F7F]">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-[#2A7F7F]" />
                <a href={`mailto:${clinicInfo.email}`} className="text-gray-400 hover:text-[#2A7F7F]">
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="text-[#2A7F7F] mt-1" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SmileFix Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}