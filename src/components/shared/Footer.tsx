'use client';

import { motion } from 'framer-motion';
import { Moon, Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle, Smartphone, BookOpen } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Mobile App', href: '/mobile-app', icon: Smartphone },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Our Teachers', href: '/#teachers' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Contact', href: '/#contact' },
];

const courses = [
  { name: 'Quran for Kids', href: '/#courses' },
  { name: 'Quran for Adults', href: '/#courses' },
  { name: 'Tajweed Course', href: '/#courses' },
  { name: 'Hifz Program', href: '/#courses' },
  { name: 'Islamic Studies', href: '/#courses' },
  { name: 'Arabic Language', href: '/#courses' },
];

const socialLinks = [
  { 
    icon: Facebook, 
    href: 'https://facebook.com/qurantutorpro', 
    label: 'Facebook',
    color: 'hover:bg-blue-600'
  },
  { 
    icon: Instagram, 
    href: 'https://instagram.com/qurantutorpro', 
    label: 'Instagram',
    color: 'hover:bg-pink-600'
  },
  { 
    icon: Youtube, 
    href: 'https://youtube.com/@qurantutorpro', 
    label: 'YouTube',
    color: 'hover:bg-red-600'
  },
  { 
    icon: MessageCircle, 
    href: 'https://wa.me/923035863612', 
    label: 'WhatsApp',
    color: 'hover:bg-green-600'
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <ScrollReveal className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-islamic flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">
                Quran<span className="text-emerald-500">Tutor</span> Pro
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Bringing the light of Quran into your home with qualified teachers and personalized learning plans.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.1}>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Courses */}
          <ScrollReveal delay={0.2}>
            <h3 className="font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-slate-400 hover:text-emerald-500 transition-colors text-sm"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.3}>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@qurantutorpro.com" className="text-slate-400 hover:text-emerald-500 transition-colors">
                  info@qurantutorpro.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+923035863612" className="text-slate-400 hover:text-emerald-500 transition-colors">
                  +92 303 5863612
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Islamic Center, Gulberg III<br />
                  Lahore, Pakistan
                </span>
              </li>
            </ul>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} QuranTutor Pro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-slate-500 hover:text-emerald-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 hover:text-emerald-500 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
