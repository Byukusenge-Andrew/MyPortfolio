import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, X, TwitterIcon, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<{
    message: string;
    isError: boolean;
    isSubmitting: boolean;
  }>({
    message: '',
    isError: false,
    isSubmitting: false,
  });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIsError, setToastIsError] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let timer: number;
    if (showToast) {
      timer = window.setTimeout(() => setShowToast(false), 5000);
    }
    return () => { if (timer) clearTimeout(timer); };
  }, [showToast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus({ message: '', isError: false, isSubmitting: true });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus({ message: 'Message sent successfully!', isError: false, isSubmitting: false });
        setToastMessage('Message sent successfully!');
        setToastIsError(false);
        setShowToast(true);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus({ message: 'Failed to send. Please try again.', isError: true, isSubmitting: false });
        setToastMessage('Failed to send message. Please try again.');
        setToastIsError(true);
        setShowToast(true);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'andrebyukusenge9@gmail.com',
      href: 'mailto:andrebyukusenge9@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+250 784 152 224',
      href: 'tel:+250784152224',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Kigali, Rwanda',
      href: null,
    },
  ];

  const socials = [
    { href: 'https://github.com/Byukusenge-Andrew', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/andre-byukusenge-a0100021a', icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
    { href: 'https://x.com/drefa4lt', icon: <TwitterIcon className="w-5 h-5" />, label: 'Twitter / X' },
    { href: 'https://wa.me/250784152224', icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900/60">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-20 right-5 z-50 flex items-center p-4 w-full max-w-xs rounded-xl shadow-2xl border ${toastIsError
                ? 'bg-red-950/90 border-red-500/30 text-red-300'
                : 'bg-green-950/90 border-green-500/30 text-green-300'
              } backdrop-blur-lg`}
            role="alert"
          >
            <div className="flex-shrink-0">
              {toastIsError ? <AlertCircle className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
            </div>
            <div className="ml-3 text-sm font-medium">{toastMessage}</div>
            <button
              className="ml-auto p-1 hover:opacity-70 rounded-lg"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-indigo-500/10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0 border border-indigo-500/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-slate-200 font-medium hover:text-indigo-400 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <h4 className="text-white font-semibold mb-4 text-sm">Connect with me</h4>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500 transition-all"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-xl text-sm ${formStatus.isError ? 'bg-red-500/10 text-red-300 border border-red-500/20' : 'bg-green-500/10 text-green-300 border border-green-500/20'}`}>
                  {formStatus.message}
                </div>
              )}

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {['name', 'email'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-slate-400 text-sm font-medium mb-2 capitalize">
                        Your {field === 'name' ? 'Name' : 'Email'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        required
                        placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-400 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none text-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-8 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 ${formStatus.isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
                    }`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;