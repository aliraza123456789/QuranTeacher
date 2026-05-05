'use client';


import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Users, Globe, Calendar } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { useEffect, useState } from 'react';
import { BookingModal } from '@/components/shared/BookingModal';
import { WhatsAppButton } from '@/components/shared/WhatsAppButton';

function StatCounter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const { count, startCounting } = useCountUp({ end, duration: 2000 });
  
  useEffect(() => {
    const timer = setTimeout(() => startCounting(), 800);
    return () => clearTimeout(timer);
  }, [startCounting]);

  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-slate-800">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

export function HeroSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-emerald-200/30 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-amber-200/30 animate-float animation-delay-400" />
      <div className="absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-sky-200/30 animate-float animation-delay-600" />
      
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-emerald-500" />
                #1 Rated Online Quran Academy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6"
            >
              Trusted{' '}
              <span className="text-gradient gradient-islamic">Online Quran</span>{' '}
              Teachers for Your Child
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl text-slate-600 mb-4"
            >
              Learn with Love & Tajweed
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-500 mb-8"
            >
               Qualified Male & Female Quran Tutors | One-to-One Online Classes | Book Now Available
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                size="lg"
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5 mr-2" />
                 Book Now
               </Button>
              <WhatsAppButton message="Assalamualaikum! I would like to talk to an advisor about Quran classes for my child." />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <StatCounter end={4} suffix=".9" label="Rating" />
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                <StatCounter end={10} suffix="K+" label="Students" />
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-500" />
                <StatCounter end={50} suffix="+" label="Countries" />
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <img
                src="/images/hero/hero-illustration.jpg"
                alt="Child learning Quran online"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Star className="w-6 h-6 text-emerald-500 fill-emerald-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Certified</p>
                  <p className="text-sm text-slate-500">Quran Teachers</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">1-on-1</p>
                  <p className="text-sm text-slate-500">Live Classes</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
}
