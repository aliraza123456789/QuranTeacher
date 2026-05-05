'use client';


import { motion, AnimatePresence } from 'framer-motion';
import { X, Rocket, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import confetti from 'canvas-confetti';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export function ComingSoonModal({ 
  isOpen, 
  onClose, 
  title = 'Coming Soon!',
  description = 'This feature is under development. Stay tuned for updates!'
}: ComingSoonModalProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('📧 Notification subscription:', email);
      setIsSubscribed(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#10B981', '#F59E0B'],
      });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>

          <div className="text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              {title}
            </h3>
            <p className="text-slate-600 mb-6">
              {description}
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 rounded-xl p-4"
              >
                <p className="text-emerald-700 font-medium">
                  🎉 You&apos;ll be notified when it&apos;s ready!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <p className="text-sm text-slate-500">
                  Get notified when this feature launches:
                </p>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Bell className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">
                    Notify Me
                  </Button>
                </div>
              </form>
            )}

            <Button
              variant="outline"
              onClick={onClose}
              className="mt-6 w-full"
            >
              Got it!
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
