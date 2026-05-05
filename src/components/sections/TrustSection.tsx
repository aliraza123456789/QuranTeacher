'use client';


import { motion } from 'framer-motion';
import { GraduationCap, Video, Shield, Clock, TrendingUp } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const trustFeatures = [
  {
    icon: GraduationCap,
    title: 'Certified Quran Teachers',
    description: 'Ijazah-certified teachers with 5+ years experience teaching Quran online',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Video,
    title: 'One-to-One Live Classes',
    description: 'Personal attention for every child, no group distractions or delays',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: Shield,
    title: 'Safe for Kids',
    description: '100% safe learning environment with monitored sessions and recordings',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Schedule classes anytime that works for you, 24/7 availability worldwide',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Monthly Progress Reports',
    description: 'Track your child\'s Quranic journey with detailed monthly assessments',
    color: 'bg-rose-100 text-rose-600',
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Why Parents <span className="text-emerald-500">Trust Us</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We&apos;ve helped 10,000+ families worldwide start their children&apos;s Quranic journey with confidence and love
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustFeatures.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 h-full group hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="font-bold text-slate-800 mb-2 text-lg">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust Badges */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-bold">✓</span>
              </div>
              <span className="text-sm font-medium">Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-bold">🔒</span>
              </div>
              <span className="text-sm font-medium">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-bold">24/7</span>
              </div>
              <span className="text-sm font-medium">Support Available</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-lg font-bold">🌍</span>
              </div>
              <span className="text-sm font-medium">Worldwide Access</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
