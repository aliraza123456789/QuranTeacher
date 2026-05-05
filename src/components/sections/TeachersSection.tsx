'use client';


import { motion } from 'framer-motion';
import { Star, MessageCircle, Award, Languages } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const teachers = [
  {
    name: 'Ustadh Ahmad Khan',
    image: '/images/teachers/teacher-male-1.jpg',
    experience: '8+ years',
    specialization: 'Tajweed, Hifz',
    languages: ['English', 'Arabic', 'Urdu'],
    rating: 4.9,
    students: 500,
    certifications: ['Ijazah in Hafs'],
  },
  {
    name: 'Ustadha Fatima Ali',
    image: '/images/teachers/teacher-female-1.jpg',
    experience: '6+ years',
    specialization: 'Noorani Qaida, Kids Quran',
    languages: ['English', 'Arabic'],
    rating: 5.0,
    students: 350,
    certifications: ['Ijazah in Tajweed'],
  },
  {
    name: 'Ustadh Mohammed Hassan',
    image: '/images/teachers/teacher-male-2.jpg',
    experience: '10+ years',
    specialization: 'Quran Recitation, Tafseer',
    languages: ['English', 'Arabic', 'Urdu', 'French'],
    rating: 4.8,
    students: 700,
    certifications: ['Al-Azhar Graduate'],
  },
  {
    name: 'Ustadha Aisha Rahman',
    image: '/images/teachers/teacher-female-2.jpg',
    experience: '5+ years',
    specialization: 'Female Students, Tajweed',
    languages: ['English', 'Arabic', 'Bengali'],
    rating: 4.9,
    students: 280,
    certifications: ['Hafiza & Qaria'],
  },
];

export function TeachersSection() {
  return (
    <section id="teachers" className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-emerald-500 rounded-full" />
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-amber-500 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Meet Our <span className="text-sky-500">Qualified</span> Quran Teachers
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn from certified tutors who love teaching children and have years of experience
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-64 object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-bold text-sm">{teacher.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-slate-800 text-lg mb-1">{teacher.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-slate-600">{teacher.experience} experience</span>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1">Specialization</p>
                    <p className="text-sm font-medium text-slate-700">{teacher.specialization}</p>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-1">
                      <Languages className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-500">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {teacher.languages.map((lang, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Request This Teacher
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            We have 50+ qualified teachers ready to help your child learn
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            View All Teachers
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
