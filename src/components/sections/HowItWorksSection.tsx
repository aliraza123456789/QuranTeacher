'use client';


import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, Video, TrendingUp, Check } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { useState } from 'react';
import { BookingModal } from '@/components/shared/BookingModal';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Book Now',
    description: 'Fill out a simple form and choose your preferred time slot for the trial class. No credit card required.',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-100',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Teacher Assessment',
    description: 'Our head teacher evaluates your child\'s level, learning style, and recommends the best starting point.',
    color: 'bg-sky-500',
    lightColor: 'bg-sky-100',
  },
  {
    number: '03',
    icon: Video,
    title: 'One-to-One Live Classes',
    description: 'Start personalized classes with your dedicated Quran tutor. Learn at your own pace with full attention.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-100',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Monthly Parent Feedback',
    description: 'Receive detailed progress reports and meet with teachers to discuss your child\'s Quranic journey.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-100',
  },
];

export function HowItWorksSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section id="how-it-works" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500" />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            How Online Classes <span className="text-emerald-500">Work</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get started in 4 simple steps and begin your child&apos;s Quranic journey today
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500 -translate-y-1/2 z-0"
          />

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 h-full"
                >
                  {/* Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 ${step.lightColor} rounded-full flex items-center justify-center`}>
                      <Check className={`w-5 h-5 ${step.color.replace('bg-', 'text-')}`} />
                    </div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 ${step.lightColor} rounded-2xl flex items-center justify-center mb-4`}
                  >
                    <step.icon className={`w-8 h-8 ${step.color.replace('bg-', 'text-')}`} />
                  </motion.div>

                  <h3 className="font-bold text-slate-800 text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Child&apos;s Journey?
            </h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
               Book a class today and experience the difference of personalized Quran learning
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-white text-emerald-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Started Now
            </motion.button>
          </div>
        </ScrollReveal>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
