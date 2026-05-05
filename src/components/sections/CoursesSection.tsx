'use client';


import { motion } from 'framer-motion';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { BookingModal } from '@/components/shared/BookingModal';
import { ComingSoonModal } from '@/components/shared/ComingSoonModal';

const courses = [
  {
    title: 'Quran for Kids',
    image: '/images/courses/course-kids.jpg',
    description: 'Fun, interactive Quran learning designed specifically for children aged 4-14',
    features: ['Noorani Qaida', 'Basic Tajweed', 'Short Surahs', 'Islamic Stories'],
    duration: 'Flexible',
    price: 'From $49/month',
    color: 'from-emerald-400 to-teal-500',
    popular: true,
  },
  {
    title: 'Quran for Adults',
    image: '/images/courses/course-adults.jpg',
    description: 'Comprehensive Quran learning for adults at any level, from beginner to advanced',
    features: ['Reading', 'Tajweed', 'Understanding', 'Tafseer'],
    duration: 'Flexible',
    price: 'From $59/month',
    color: 'from-sky-400 to-blue-500',
    popular: false,
  },
  {
    title: 'Tajweed Course',
    image: '/images/courses/course-tajweed.jpg',
    description: 'Master the rules of Quranic pronunciation with certified Tajweed teachers',
    features: ['Makharij', 'Tajweed Rules', 'Practice Sessions', 'Certification'],
    duration: '3-6 months',
    price: 'From $69/month',
    color: 'from-amber-400 to-orange-500',
    popular: true,
  },
  {
    title: 'Hifz Program',
    image: '/images/courses/course-hifz.jpg',
    description: 'Structured memorization program with personalized guidance and revision',
    features: ['Daily Plan', 'Revision System', 'Monthly Tests', 'Ijazah Track'],
    duration: '1-3 years',
    price: 'From $79/month',
    color: 'from-purple-400 to-indigo-500',
    popular: false,
  },
  {
    title: 'Islamic Studies',
    image: '/images/courses/course-islamic-studies.jpg',
    description: 'Learn Islamic manners, duas, and essential knowledge for daily life',
    features: ['Daily Duas', 'Fiqh Basics', 'Islamic Stories', 'Manners'],
    duration: 'Ongoing',
    price: 'From $39/month',
    color: 'from-rose-400 to-pink-500',
    popular: false,
  },
  {
    title: 'Arabic Language',
    image: '/images/courses/course-arabic.jpg',
    description: 'Learn to read, write, and understand Arabic from native speakers',
    features: ['Reading', 'Writing', 'Conversation', 'Grammar'],
    duration: '6-12 months',
    price: 'From $59/month',
    color: 'from-cyan-400 to-teal-500',
    popular: false,
  },
];

export function CoursesSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleEnroll = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsBookingModalOpen(true);
  };

  return (
    <section id="courses" className="section-padding gradient-green relative overflow-hidden">
      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Courses We <span className="text-amber-300">Offer</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Choose the perfect learning path for your child or yourself
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl group perspective-1000"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-20`} />
                  {course.popular && (
                    <Badge className="absolute top-4 left-4 bg-amber-500 text-white border-0">
                      Popular
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-800 text-xl mb-2">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{course.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="font-bold text-emerald-600">{course.price}</div>
                  </div>

                  <Button 
                    onClick={() => handleEnroll(course.title)}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white group/btn"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Modals */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        title={`${selectedCourse} Enrollment`}
        description="Online enrollment is coming soon! For now, please book a class and we'll help you enroll."
      />
    </section>
  );
}
