'use client';


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Smartphone, BookOpen } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import { BookingModal } from './BookingModal';
import { WhatsAppButton } from './WhatsAppButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Mobile App', href: '/mobile-app', icon: Smartphone },
  { name: 'Blog', href: '/blog', icon: BookOpen },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && isHome) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-full gradient-islamic flex items-center justify-center">
                  <Moon className="w-5 h-5 text-white" />
                </div>
                <span className={`font-heading font-bold text-xl transition-colors ${
                  isScrolled || !isHome ? 'text-slate-800' : 'text-slate-800'
                }`}>
                  Quran<span className="text-emerald-500">Tutor</span> Pro
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-medium text-sm transition-colors hover:text-emerald-500 ${
                    isScrolled || !isHome ? 'text-slate-600' : 'text-slate-700'
                  } group ${pathname === link.href ? 'text-emerald-500' : ''}`}
                >
                  <span className="flex items-center gap-1">
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.name}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-500 transition-all duration-300 ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <WhatsAppButton 
                message="Assalamualaikum! I would like to talk to an advisor."
                showLabel={false}
              />
              <Button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 animate-pulse-glow"
              >
                Book Now
               </Button>
             </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-2 font-medium text-left py-2 ${
                        pathname === link.href ? 'text-emerald-500' : 'text-slate-700'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.icon && <link.icon className="w-5 h-5" />}
                      {link.name}
                    </Link>
                  ))}
                  <hr className="border-slate-100" />
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsBookingModalOpen(true);
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-white w-full"
                  >
                     Book Now
                   </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
