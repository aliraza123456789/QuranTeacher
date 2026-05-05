'use client';


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, User, Baby, Globe, Phone, Clock, MessageCircle, X, Mail } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
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

const benefits = [
  '3 Days Free Class',
  'Personalized Assessment',
  'Qualified Teacher Assigned',
  'Flexible Scheduling',
];

const countries = [
  { value: 'us', label: '🇺🇸 United States' },
  { value: 'uk', label: '🇬🇧 United Kingdom' },
  { value: 'ca', label: '🇨🇦 Canada' },
  { value: 'au', label: '🇦🇺 Australia' },
  { value: 'pk', label: '🇵🇰 Pakistan' },
  { value: 'in', label: '🇮🇳 India' },
  { value: 'bd', label: '🇧🇩 Bangladesh' },
  { value: 'sa', label: '🇸🇦 Saudi Arabia' },
  { value: 'ae', label: '🇦🇪 UAE' },
  { value: 'other', label: '🌍 Other' },
];

const timeSlots = [
  { value: 'morning', label: 'Morning (8AM - 12PM)' },
  { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
  { value: 'evening', label: 'Evening (4PM - 8PM)' },
  { value: 'night', label: 'Night (8PM - 11PM)' },
];

export function CTASection() {
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
  };

  return (
    <section id="contact" className="section-padding gradient-gold relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Start Your Child&apos;s Quran Journey Today
            </h2>
            <p className="text-lg text-white/90 mb-8">
               Book a class - No Credit Card Required. Experience the difference of personalized Quran learning.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
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
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                     Book Now
                   </h3>
                  <p className="text-slate-500 mb-6">
                    Fill in the details and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentName" className="text-slate-700">
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
                        <Label htmlFor="childName" className="text-slate-700">
                          Child Name & Age *
                        </Label>
                        <div className="relative">
                          <Baby className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <Input
                            id="childName"
                            placeholder="e.g., Ahmed, 8 years"
                            required
                            className="pl-10"
                            value={formData.childName}
                            onChange={(e) => handleChange('childName', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-slate-700">Country *</Label>
                        <Select
                          required
                          value={formData.country}
                          onValueChange={(value) => handleChange('country', value)}
                        >
                          <SelectTrigger className="pl-3">
                            <Globe className="w-4 h-4 text-slate-400 mr-2" />
                            <SelectValue placeholder="Select country" />
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
                        <Label htmlFor="whatsapp" className="text-slate-700">
                          WhatsApp Number *
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
                      <Label htmlFor="email" className="text-slate-700">
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
                      <Label className="text-slate-700">Preferred Time *</Label>
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
                      By submitting, you agree to our Privacy Policy and Terms of Service
                    </p>
                  </form>
                </>
              )}

              {/* WhatsApp Popup */}
              <AnimatePresence>
                {showWhatsApp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex items-center justify-center p-6"
                  >
                    <div className="text-center">
                      <button
                        onClick={() => setShowWhatsApp(false)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center"
                      >
                        <X className="w-4 h-4" />
                      </button>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
