'use client';


import { motion } from 'framer-motion';
import {
  Smartphone,
  Video,
  MessageSquare,
  PenTool,
  BookOpen,
  Clock,
  Shield,
  Download,
  Star,
  Check,
  Play,
  Apple
} from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ComingSoonModal } from '@/components/shared/ComingSoonModal';

const appFeatures = [
  {
    icon: Video,
    title: 'HD Video & Audio',
    description: 'Crystal clear video and audio streaming for seamless Quran learning experience',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: PenTool,
    title: 'Interactive Whiteboard',
    description: 'Digital whiteboard for Tajweed rules, Arabic letters, and lesson explanations',
    color: 'bg-sky-100 text-sky-600',
  },
  {
    icon: BookOpen,
    title: 'Synchronized Quran',
    description: 'Quran text highlights in sync with teacher recitation for better learning',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: MessageSquare,
    title: 'Text Chat',
    description: 'Instant messaging with your teacher during lessons for quick questions',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Shield,
    title: 'Parental Watch',
    description: 'Parents can monitor lessons through recorded video snippets for child safety',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Clock,
    title: 'Lesson Recording',
    description: 'Record and playback your lessons anytime for revision and practice',
    color: 'bg-cyan-100 text-cyan-600',
  },
];

const appScreens = [
  {
    title: 'Find Your Teacher',
    description: 'Browse profiles of certified Quran teachers and filter by language, expertise, and availability',
  },
  {
     title: 'Book Now',
     description: 'Schedule a 30-minute lesson to find the perfect teacher for you',
  },
  {
    title: 'Interactive Classroom',
    description: 'Join live classes with video, audio, whiteboard, and synchronized Quran text',
  },
  {
    title: 'Track Progress',
    description: 'Monitor your learning journey with detailed progress reports and achievements',
  },
];

const testimonials = [
  {
    name: 'Ahmed K.',
    location: 'USA',
    rating: 5,
    text: 'The app is amazing! My kids love learning Quran with the interactive features.',
  },
  {
    name: 'Fatima R.',
    location: 'UK',
    rating: 5,
    text: 'Best Quran learning app! The whiteboard feature makes Tajweed so much easier.',
  },
  {
    name: 'Mohammed A.',
    location: 'Canada',
    rating: 5,
    text: 'Parental watch feature gives me peace of mind. Highly recommended!',
  },
];

export function MobileAppPage() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-sky-50 to-amber-50" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4" />
                Available on iOS & Android
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Learn Quran <span className="text-gradient gradient-islamic">Anywhere, Anytime</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8">
                Download the QuranTutor Pro app and connect with certified Quran teachers
                from the comfort of your home. Experience interactive learning with our
                purpose-built virtual classroom.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => setIsComingSoonOpen(true)}
                  className="bg-slate-900 hover:bg-slate-800 text-white px-6"
                >
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button
                  size="lg"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.islamic.kidslearn&hl=en', '_blank')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Google Play
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="font-bold text-slate-800">4.9</span>
                  <span className="text-slate-500">Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-emerald-500" />
                  <span className="font-bold text-slate-800">50K+</span>
                  <span className="text-slate-500">Downloads</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src="/images/mobile-app/app-mockup.jpg"
                  alt="QuranTutor Pro Mobile App"
                  className="w-full rounded-3xl shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
              App Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              Everything You Need to <span className="text-sky-500">Learn Quran</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our app is packed with powerful features designed to make online Quran learning effective and enjoyable
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-slate-50 rounded-3xl p-8 h-full"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-xl mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding gradient-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img
                src="/images/mobile-app/classroom-feature.jpg"
                alt="Interactive Classroom"
                className="w-full rounded-3xl shadow-xl"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Start Learning in <span className="text-amber-500">4 Easy Steps</span>
              </h2>

              <div className="space-y-6">
                {appScreens.map((screen, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{screen.title}</h4>
                      <p className="text-slate-600">{screen.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parental Watch Feature */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
                Parental Watch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Monitor Your Child&apos;s <span className="text-rose-500">Learning Journey</span>
              </h2>
              <p className="text-slate-600 mb-6">
                Our Parental Watch feature allows you to keep track of your child&apos;s progress
                and ensure their safety during online lessons. Random video snippets are recorded
                so you can review the quality of teaching.
              </p>

              <ul className="space-y-4">
                {[
                  'Random video snapshots during lessons',
                  'Detailed progress reports',
                  'Lesson attendance tracking',
                  'Teacher performance ratings',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="order-1 lg:order-2">
              <img
                src="/images/mobile-app/parental-watch.jpg"
                alt="Parental Watch Feature"
                className="w-full rounded-3xl shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Users <span className="text-emerald-500">Say</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-green">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Download the App Today!
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Start your Quran learning journey with our interactive mobile app.
              Available on iOS and Android devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsComingSoonOpen(true)}
                className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg"
              >
                <Apple className="w-6 h-6 mr-2" />
                Download for iOS
              </Button>
              <Button
                size="lg"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.islamic.kidslearn&hl=en', '_blank')}
                className="bg-emerald-700 text-white hover:bg-emerald-800 px-8 py-6 text-lg"
              >
                <Play className="w-6 h-6 mr-2" />
                Download for Android
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        title="App Coming Soon!"
        description="Our mobile app is under development. Subscribe to get notified when it's ready!"
      />
    </div>
  );
}
