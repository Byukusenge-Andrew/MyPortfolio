import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, CheckCircle2, AlertCircle, X, Globe } from 'lucide-react';
import { useState, useRef, useEffect, type FormEvent } from 'react';
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
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showToast]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus({ message: '', isError: false, isSubmitting: true });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus({ message: 'Message sent successfully!', isError: false, isSubmitting: false });
        setToastMessage('Message sent successfully!');
        setToastIsError(false);
        setShowToast(true);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus({ message: 'Failed to send message. Please reach out directly via email.', isError: true, isSubmitting: false });
        setToastMessage('Failed to dispatch message. Please email directly.');
        setToastIsError(true);
        setShowToast(true);
      });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 text-indigo-400" />,
      label: 'Email',
      value: 'andrebyukusenge9@gmail.com',
      href: 'mailto:andrebyukusenge9@gmail.com',
    },
    {
      icon: <Phone className="w-4 h-4 text-indigo-400" />,
      label: 'Phone',
      value: '+250 741 522 244',
      href: 'tel:+250741522244',
    },
    {
      icon: <MapPin className="w-4 h-4 text-indigo-400" />,
      label: 'Location',
      value: 'Nyabihu, Rwanda',
      href: null,
    },
    {
      icon: <Globe className="w-4 h-4 text-indigo-400" />,
      label: 'Portfolio Domain',
      value: 'byukusengeandre.vercel.app',
      href: 'https://byukusengeandre.vercel.app',
    },
  ];

  const socials = [
    { href: 'https://github.com/Byukusenge-Andrew', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/andre-byukusenge-a0100021a', icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
    { href: 'https://x.com/drefa4lt', icon: <Twitter className="w-4 h-4" />, label: 'Twitter' },
    { href: 'https://wa.me/250741522244', icon: <MessageSquare className="w-4 h-4" />, label: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="py-20 bg-[#090a0f] border-t border-white/[0.06]">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className={`fixed top-20 right-6 z-50 flex items-center p-3.5 max-w-sm rounded-lg shadow-lg border text-xs font-medium ${
              toastIsError
                ? 'bg-red-950/95 border-red-800 text-red-200'
                : 'bg-emerald-950/95 border-emerald-800 text-emerald-200'
            }`}
            role="alert"
          >
            <div className="mr-2">
              {toastIsError ? <AlertCircle className="w-4 h-4 text-red-400" /> : <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>
            <div>{toastMessage}</div>
            <button
              onClick={() => setShowToast(false)}
              className="ml-auto pl-3 opacity-60 hover:opacity-100"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <div className="max-w-xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
            <span className="w-2 h-px bg-indigo-500" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get In Touch</h2>
          <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
            Interested in collaboration, engineering roles, or project discussions? Reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-zinc-500">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-zinc-200 text-sm font-medium hover:text-indigo-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-zinc-200 text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-zinc-800/80">
                <h4 className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-3">
                  Developer Channels
                </h4>
                <div className="flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-8 h-8 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-white">Current Availability</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Available for engineering roles, technical contract sprints, and consulting engagements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
            >
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono mb-6">
                Send a Direct Message
              </h3>

              {formStatus.message && (
                <div
                  className={`mb-5 p-3 rounded-md text-xs font-medium border ${
                    formStatus.isError
                      ? 'bg-red-950/60 text-red-300 border-red-800'
                      : 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Alex Mercer"
                      className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="alex@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Engineering Role / Project Discussion"
                    className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Share role details, project scope, or interview schedule..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 outline-none transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
