'use client';


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'USA',
    flag: '🇺🇸',
    rating: 5,
    text: 'My daughter has been learning with QuranTutor Pro for 6 months. Her Tajweed has improved tremendously, and she actually looks forward to her classes! The teachers are so patient and caring.',
    avatar: 'S',
    color: 'bg-emerald-500',
  },
  {
    name: 'Ahmed K.',
    location: 'UK',
    flag: '🇬🇧',
    rating: 5,
    text: 'The teachers are incredibly patient and professional. My son completed his Noorani Qaida in just 3 months. Highly recommend to all parents looking for quality Quran education!',
    avatar: 'A',
    color: 'bg-sky-500',
  },
  {
    name: 'Fatima R.',
    location: 'Canada',
    flag: '🇨🇦',
    rating: 5,
    text: 'As a working mom, the flexible schedule is a blessing. The progress reports keep me updated. Best decision for my children\'s Islamic education. Thank you QuranTutor Pro!',
    avatar: 'F',
    color: 'bg-amber-500',
  },
  {
    name: 'Mohammed A.',
    location: 'Australia',
    flag: '🇦🇺',
    rating: 5,
    text: 'We tried several online Quran platforms, but this is by far the best. The one-on-one attention makes all the difference. My kids have learned so much in just a few months.',
    avatar: 'M',
    color: 'bg-purple-500',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            What Parents <span className="text-amber-500">Say</span> About Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of happy families worldwide who trust us with their children&apos;s Quran education
          </p>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[400px] flex items-center">
            {/* Quote Icon */}
            <Quote className="absolute top-8 left-8 w-12 h-12 text-emerald-200" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="text-center">
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className={`w-14 h-14 ${testimonials[currentIndex].color} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800">{testimonials[currentIndex].name}</p>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <span>{testimonials[currentIndex].flag}</span>
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-emerald-500 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
