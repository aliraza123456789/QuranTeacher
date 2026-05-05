'use client';


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Baby, Globe, Phone, Clock, Check, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import confetti from 'canvas-confetti';
import { sendBookingEmail } from '@/lib/emailService';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'pk', label: 'Pakistan' },
  { value: 'in', label: 'India' },
  { value: 'bd', label: 'Bangladesh' },
  { value: 'sa', label: 'Saudi Arabia' },
  { value: 'ae', label: 'UAE' },
  { value: 'other', label: 'Other' },
];

const timeSlots = [
  { value: 'morning', label: 'Morning (8AM - 12PM)' },
  { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
  { value: 'evening', label: 'Evening (4PM - 8PM)' },
  { value: 'night', label: 'Night (8PM - 11PM)' },
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    country: '',
    whatsapp: '',
    email: '',
    timeSlot: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const countryLabel = countries.find(c => c.value === formData.country)?.label || formData.country;
    const timeLabel = timeSlots.find(t => t.value === formData.timeSlot)?.label || formData.timeSlot;

    try {
      await sendBookingEmail({
        name: formData.parentName,
        email: formData.email,
        phone: formData.whatsapp,
        message: `Child Name & Age: ${formData.childName}\nCountry: ${countryLabel}\nPreferred Time: ${timeLabel}`,
        course: 'Class Booking',
      });

      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10B981', '#F59E0B', '#0EA5E9'],
      });

      setTimeout(() => {
        setShowWhatsApp(true);
      }, 2000);
    } catch (err) {
      setError('Failed to send request. Please try again or contact us directly.');
      console.error('Email error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const openWhatsApp = () => {
    const message = `Assalamualaikum! I just booked a class for my child. My name is ${formData.parentName} and I'm from ${formData.country}.`;
    const whatsappUrl = `https://wa.me/923035863612?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowWhatsApp(false);
    onClose();
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
          >
            <X className="w-4 h-4 text-slate-600" />
          </button>

          <div className="p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  Thank You!
                </h3>
                <p className="text-slate-600 mb-2">
                  We&apos;ve received your request.
                </p>
                <p className="text-slate-500 text-sm">
                  Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                     Book Now
                   </h3>
                  <p className="text-slate-500 text-sm">
                    Fill in the details and we&apos;ll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="text-slate-700 text-sm">
                        Parent Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="parentName"
                          placeholder="Your name"
                          required
                          className="pl-10"
                          value={formData.parentName}
                          onChange={(e) => handleChange('parentName', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childName" className="text-slate-700 text-sm">
                        Child Name & Age *
                      </Label>
                      <div className="relative">
                        <Baby className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="childName"
                          placeholder="e.g., Ahmed, 8"
                          required
                          className="pl-10"
                          value={formData.childName}
                          onChange={(e) => handleChange('childName', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-slate-700 text-sm">Country *</Label>
                      <Select
                        required
                        value={formData.country}
                        onValueChange={(value) => handleChange('country', value)}
                      >
                        <SelectTrigger className="pl-3">
                          <Globe className="w-4 h-4 text-slate-400 mr-2" />
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-slate-700 text-sm">
                        WhatsApp *
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                          id="whatsapp"
                          type="tel"
                          placeholder="+923125019704"
                          required
                          className="pl-10"
                          value={formData.whatsapp}
                          onChange={(e) => handleChange('whatsapp', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 text-sm">
                      Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="parent@email.com"
                        required
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-slate-700 text-sm">Preferred Time *</Label>
                    <Select
                      required
                      value={formData.timeSlot}
                      onValueChange={(value) => handleChange('timeSlot', value)}
                    >
                      <SelectTrigger>
                        <Clock className="w-4 h-4 text-slate-400 mr-2" />
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot.value} value={slot.value}>
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 text-lg rounded-xl mt-2"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                         Book Now
                       </>
                     )}
                   </Button>

                  {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                      {error}
                    </p>
                  )}

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our Privacy Policy
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {showWhatsApp && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute z-50 bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-4"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">
                  Connect on WhatsApp!
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  Get instant updates and schedule your trial faster via WhatsApp.
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={openWhatsApp}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Open WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowWhatsApp(false)}
                    className="flex-1"
                  >
                    Skip
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
