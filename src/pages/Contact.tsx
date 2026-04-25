import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Building, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Institutional Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 py-12 lg:py-20"
    >
      <header className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="w-6 h-6 text-secondary-accent" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/60">Communication Channel</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-black text-primary tracking-tighter mb-8 leading-[0.9]">
          Direct Access to <br />
          <span className="text-secondary-accent">Our Strategy Desk.</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          For institutional partnerships, research inquiries, or portfolio consultations, please connect through our secure channels.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Contact Info */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-primary uppercase text-xs tracking-widest mb-2">Global Headquarters</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  124 Financial Plaza, Suite 900<br />
                  District 1, Ho Chi Minh City<br />
                  Vietnam
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-primary uppercase text-xs tracking-widest mb-2">General Inquiries</h3>
                <a href="mailto:strategy@cafecapital.com" className="text-on-surface-variant text-sm hover:text-secondary-accent transition-colors">
                  strategy@cafecapital.com
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-primary uppercase text-xs tracking-widest mb-2">Direct Terminal Line</h3>
                <p className="text-on-surface-variant text-sm">+84 (0) 28 3456 7890</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-5 h-5 text-secondary-accent" />
              <h3 className="font-black text-primary uppercase text-[10px] tracking-widest">Office Hours</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold font-sans">
                <span className="text-on-surface-variant/60">Monday – Friday</span>
                <span className="text-primary">08:00 – 18:00</span>
              </div>
              <div className="flex justify-between text-xs font-bold font-sans">
                <span className="text-on-surface-variant/60">Saturday</span>
                <span className="text-primary">09:00 – 13:00</span>
              </div>
              <div className="flex justify-between text-xs font-bold font-sans">
                <span className="text-on-surface-variant/60">Sunday</span>
                <span className="text-secondary-accent">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest border border-outline-variant p-8 lg:p-12 rounded-3xl shadow-sm relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Full Identity</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Alexander Wright"
                        className={cn(
                          "w-full px-5 py-4 bg-surface-container-low border rounded-xl outline-none transition-all font-bold text-sm",
                          errors.name ? "border-red-500 ring-1 ring-red-500/20" : "border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20"
                        )}
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-widest">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Secure Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="compliance@firm.com"
                        className={cn(
                          "w-full px-5 py-4 bg-surface-container-low border rounded-xl outline-none transition-all font-bold text-sm",
                          errors.email ? "border-red-500 ring-1 ring-red-500/20" : "border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20"
                        )}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-widest">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Engagement Type</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-surface-container-low border border-outline-variant rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-bold text-sm appearance-none"
                    >
                      <option>Institutional Inquiry</option>
                      <option>Research Partnership</option>
                      <option>Portfolio Consultation</option>
                      <option>Media Access</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/60 ml-1">Analytical Brief</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Detail your requirements for strategic analysis or asset allocation guidance..."
                      className={cn(
                        "w-full px-5 py-4 bg-surface-container-low border rounded-xl outline-none transition-all font-bold text-sm resize-none",
                        errors.message ? "border-red-500 ring-1 ring-red-500/20" : "border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary/20"
                      )}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-bold mt-1 ml-1 uppercase tracking-widest">{errors.message}</p>}
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-primary text-white font-black text-xs uppercase tracking-[0.3em] rounded-xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Processing Channel...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Terminal Brief</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-10">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h2 className="text-4xl font-black text-primary tracking-tighter mb-6">Transmission Successful.</h2>
                  <p className="text-on-surface-variant max-w-sm mb-12 font-medium">
                    Your briefcase has been encrypted and routed to our Strategy Desk. An analyst will verify and respond within 12 standard terminal hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="flex items-center gap-2 text-secondary-accent font-black text-xs uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
                  >
                    Return to Terminal <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
