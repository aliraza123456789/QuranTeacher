'use client';


import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppButtonProps {
  message?: string;
  showLabel?: boolean;
}

export function WhatsAppButton({
  message = 'Assalamualaikum! I would like to know more about Quran classes.',
  showLabel = true
}: WhatsAppButtonProps) {
  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/923035863612?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={openWhatsApp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
    >
      <MessageCircle className="w-5 h-5" />
      {showLabel && <span>Chat on WhatsApp</span>}
    </motion.button>
  );
}

// Floating WhatsApp Button for the website
export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = (type: string) => {
    let message = 'Assalamualaikum! ';

    switch (type) {
      case 'trial':
        message += 'I want to book a class.';
        break;
      case 'info':
        message += 'I would like more information about your courses.';
        break;
      case 'support':
        message += 'I need help with my account/classes.';
        break;
      default:
        message += 'I have a question.';
    }

    const whatsappUrl = `https://wa.me/923035863612?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 mb-2"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-slate-800">How can we help?</span>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => openWhatsApp('trial')}
              className="w-full text-left px-4 py-3 rounded-xl bg-green-50 hover:bg-green-100 text-green-700 text-sm font-medium transition-colors"
            >
               📚 Book Now
            </button>
            <button
              onClick={() => openWhatsApp('info')}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm transition-colors"
            >
              ℹ️ Course Information
            </button>
            <button
              onClick={() => openWhatsApp('support')}
              className="w-full text-left px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm transition-colors"
            >
              🆘 Customer Support
            </button>
          </div>
        </motion.div>
      )}

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </div>
  );
}
