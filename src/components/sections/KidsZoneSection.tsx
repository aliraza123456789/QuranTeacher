'use client';


import { motion } from 'framer-motion';
import { BookOpen, Volume2, Brain, Heart, Star, Trophy, Target } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { Progress } from '@/components/ui/progress';

const learningCards = [
  {
    icon: BookOpen,
    title: 'Learn Noorani Qaida',
    description: 'Build a strong foundation with the basics of Arabic reading',
    color: 'from-orange-400 to-red-400',
    bgColor: 'bg-orange-50',
    badge: 'Start Here',
    badgeColor: 'bg-orange-500',
  },
  {
    icon: Volume2,
    title: 'Quran with Tajweed',
    description: 'Master proper pronunciation and recitation rules',
    color: 'from-emerald-400 to-teal-400',
    bgColor: 'bg-emerald-50',
    badge: 'Popular',
    badgeColor: 'bg-emerald-500',
  },
  {
    icon: Brain,
    title: 'Memorization (Hifz)',
    description: 'Structured program to memorize the entire Quran',
    color: 'from-purple-400 to-indigo-400',
    bgColor: 'bg-purple-50',
    badge: 'Advanced',
    badgeColor: 'bg-purple-500',
  },
  {
    icon: Heart,
    title: 'Islamic Duas & Manners',
    description: 'Learn daily supplications and Islamic etiquette',
    color: 'from-sky-400 to-blue-400',
    bgColor: 'bg-sky-50',
    badge: 'Essential',
    badgeColor: 'bg-sky-500',
  },
];

const achievements = [
  { icon: Star, label: 'Stars Earned', value: 12, color: 'text-amber-500' },
  { icon: Trophy, label: 'Badges', value: 5, color: 'text-purple-500' },
  { icon: Target, label: 'Lessons Done', value: 24, color: 'text-emerald-500' },
];

export function KidsZoneSection() {
  return (
    <section className="section-padding gradient-cream relative overflow-hidden">
      {/* Decorative Mascots */}
      <div className="absolute top-10 left-10 animate-bounce-slow">
        <span className="text-6xl">🌙</span>
      </div>
      <div className="absolute top-20 right-20 animate-bounce-slow animation-delay-400">
        <span className="text-5xl">⭐</span>
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce-slow animation-delay-600">
        <span className="text-5xl">📖</span>
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-amber-500" />
            Kids Learning Zone
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Learning Made <span className="text-amber-500">Fun!</span> 🌟
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your child will love learning Quran with our interactive methods, colorful lessons, and friendly teachers
          </p>
        </ScrollReveal>

        {/* Gamification Stats */}
        <ScrollReveal delay={0.2} className="mb-12">
          <div className="bg-white rounded-3xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-700">Your Journey</span>
                  <span className="text-emerald-600 font-bold">25% Complete</span>
                </div>
                <Progress value={25} className="h-3 bg-slate-100" />
              </div>
              <div className="flex gap-6">
                {achievements.map((item, index) => (
                  <div key={index} className="text-center">
                    <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-1`} />
                    <div className="text-xl font-bold text-slate-800">{item.value}</div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Learning Cards */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningCards.map((card, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`${card.bgColor} rounded-3xl p-6 h-full relative overflow-hidden group cursor-pointer`}
              >
                {/* Badge */}
                <span className={`absolute top-4 right-4 ${card.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {card.badge}
                </span>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="font-bold text-slate-800 text-xl mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>

                {/* Decorative Stars */}
                <div className="absolute -bottom-2 -right-2 opacity-20">
                  <Star className="w-20 h-20" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mascot Image */}
        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <div className="inline-block">
            <img
              src="/images/mascots/mascot-characters.jpg"
              alt="Friendly learning mascots"
              className="w-full max-w-md mx-auto rounded-3xl shadow-xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
