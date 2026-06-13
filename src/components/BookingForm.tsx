'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { bookingFormSchema, BookingFormData } from '@/lib/validations'
import { Button } from './Button'
import { generateTimeSlots } from '@/lib/utils'

const services = [
  { id: 'checkup', name: 'Dental Check-up', price: 'KES 2,000 - 3,500' },
  { id: 'veneers', name: 'Dental Veneers', price: 'KES 15,000 - 45,000' },
  { id: 'root-canal', name: 'Root Canal', price: 'KES 8,000 - 15,000' },
  { id: 'extraction', name: 'Tooth Extraction', price: 'KES 3,000 - 8,000' },
]

const timeSlots = generateTimeSlots()

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [stepError, setStepError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      service: '',
      date: '',
      time: '',
      firstName: '',
      lastName: '',
      patientEmail: '',
      patientPhone: '',
      patientAge: '' as unknown as number,
      notes: '',
    },
  })

  const selectedService = watch('service')
  const selectedDate = watch('date')

  const nextStep = async () => {
    setStepError(null)
    let isValid = false

    if (step === 1) {
      // Validate service selection
      if (!selectedService || selectedService === '') {
        setStepError('Please select a service')
      } else {
        isValid = true
      }
    } else if (step === 2) {
      // Validate date and time
      const dateVal = watch('date')
      const timeVal = watch('time')
      if (!dateVal || !timeVal) {
        setStepError('Please select both date and time')
      } else {
        isValid = true
      }
    } else if (step === 3) {
      // Validate patient details
      const firstName = watch('firstName')
      const lastName = watch('lastName')
      const email = watch('patientEmail')
      const phone = watch('patientPhone')
      const age = watch('patientAge')
      if (!firstName || firstName.length < 2) {
        setStepError('Please enter your first name (at least 2 characters)')
      } else if (!lastName || lastName.length < 2) {
        setStepError('Please enter your last name (at least 2 characters)')
      } else if (!email) {
        setStepError('Please enter your email address')
      } else if (!phone) {
        setStepError('Please enter your phone number')
      } else if (!age) {
        setStepError('Please enter your age')
      } else {
        isValid = true
      }
    }

    if (isValid) {
      setStep(step + 1)
    }
  }

  const prevStep = () => setStep(step - 1)

  const [submitError, setSubmitError] = useState<string | null>(null)

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        const errorData = await response.json()
        setSubmitError(errorData.message || 'Failed to submit booking')
      }
    } catch (error) {
      console.error('Booking error:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0]

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-[#2A7F7F] rounded-full flex items-center justify-center mx-auto mb-6">
          <FiCheck className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#1c1c1c] mb-3 font-serif">Booking Confirmed!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for booking with us. We will send a confirmation email shortly.
        </p>
        <Button onClick={() => window.location.href = '/'}>Back to Home</Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center gap-4 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? 'bg-[#2A7F7F] text-white'
                  : s < step
                  ? 'bg-[#2A7F7F] text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {s < step ? <FiCheck /> : s}
            </div>
            {s < 4 && (
              <div
                className={`w-16 h-1 mx-2 ${
                  s < step ? 'bg-[#2A7F7F]' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Select Service */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#1c1c1c] text-center font-serif">
              Select a Service
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <label
                  key={service.id}
                  className={`cursor-pointer p-4 rounded-lg border-2 transition-all ${
                    selectedService === service.id
                      ? 'border-[#2A7F7F] bg-[#2A7F7F]/5'
                      : 'border-gray-200 hover:border-[#2A7F7F]'
                  }`}
                >
                  <input
                    type="radio"
                    value={service.id}
                    checked={selectedService === service.id}
                    onChange={() => {
                      setValue('service', service.id, { shouldValidate: true })
                      setStepError(null)
                    }}
                    className="sr-only"
                  />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#1c1c1c]">{service.name}</span>
                    {selectedService === service.id && (
                      <FiCheck className="text-[#2A7F7F]" />
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{service.price}</span>
                </label>
              ))}
            </div>
            {errors.service && (
              <p className="text-red-500 text-sm text-center">{errors.service.message}</p>
            )}
          </motion.div>
        )}

        {/* Step 2: Select Date & Time */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6 bg-[#1c6f6f] p-6 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white text-center font-serif">
              Select Date & Time
            </h3>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Date</label>
              <input
                type="date"
                {...register('date')}
                onChange={(e) => {
                  register('date').onChange(e)
                  setStepError(null)
                }}
                min={today}
                className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              {errors.date && (
                <p className="text-yellow-300 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Time</label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {timeSlots.map((slot) => (
                  <label
                    key={slot}
                    className={`cursor-pointer p-2 rounded-lg border-2 text-center text-sm transition-all ${
                      watch('time') === slot
                        ? 'border-white bg-white text-[#1c6f6f] font-semibold'
                        : 'border-white/30 text-white hover:border-white'
                    }`}
                  >
                    <input
                      type="radio"
                      value={slot}
                      checked={watch('time') === slot}
                      onChange={() => {
                        setValue('time', slot, { shouldValidate: true })
                        setStepError(null)
                      }}
                      className="sr-only"
                    />
                    {slot}
                  </label>
                ))}
              </div>
              {errors.time && (
                <p className="text-yellow-300 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Step 3: Patient Details */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#1c1c1c] text-center font-serif">
              Your Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  {...register('firstName')}
                  onChange={(e) => {
                    register('firstName').onChange(e)
                    setStepError(null)
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  {...register('lastName')}
                  onChange={(e) => {
                    register('lastName').onChange(e)
                    setStepError(null)
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                <input
                  type="number"
                  {...register('patientAge', { valueAsNumber: true })}
                  onChange={(e) => {
                    register('patientAge').onChange(e)
                    setStepError(null)
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                  placeholder="25"
                />
                {errors.patientAge && (
                  <p className="text-red-500 text-sm mt-1">{errors.patientAge.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  {...register('patientEmail')}
                  onChange={(e) => {
                    register('patientEmail').onChange(e)
                    setStepError(null)
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                  placeholder="john@example.com"
                />
                {errors.patientEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.patientEmail.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  {...register('patientPhone')}
                  onChange={(e) => {
                    register('patientPhone').onChange(e)
                    setStepError(null)
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                  placeholder="+254 700 123 456"
                />
                {errors.patientPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.patientPhone.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  {...register('notes')}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2A7F7F] focus:border-transparent"
                  placeholder="Any specific concerns or information..."
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#1c1c1c] text-center font-serif">
              Confirm Your Booking
            </h3>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">
                  {services.find((s) => s.id === selectedService)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-semibold">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time:</span>
                <span className="font-semibold">{watch('time')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Patient:</span>
                <span className="font-semibold">{watch('firstName')} {watch('lastName')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contact:</span>
                <span className="font-semibold">{watch('patientEmail')}</span>
              </div>
            </div>

            <div className="bg-[#F5C842]/10 border border-[#F5C842] rounded-lg p-4">
              <p className="text-sm text-[#1c1c1c]">
                By confirming, you agree to receive a confirmation email. Our team will contact you to finalize the appointment.
              </p>
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{submitError}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {stepError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-red-600 text-sm text-center">{stepError}</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep}>
            <FiChevronLeft className="mr-2" /> Back
          </Button>
        )}
        {step < 4 ? (
          <Button variant="primary" onClick={nextStep} className="ml-auto">
            Next <FiChevronRight className="ml-2" />
          </Button>
        ) : (
          <Button type="submit" variant="primary" isLoading={isSubmitting} className="ml-auto">
            Confirm Booking
          </Button>
        )}
      </div>
    </form>
  )
}