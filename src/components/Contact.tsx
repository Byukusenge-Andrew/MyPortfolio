import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, X, TwitterIcon, CheckCircle, AlertCircle } from 'lucide-react';
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
      timer = window.setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showToast]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setFormStatus({
      message: '',
      isError: false,
      isSubmitting: true,
    });
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus({
          message: 'Your message has been sent successfully!',
          isError: false,
          isSubmitting: false,
        });
        setToastMessage('Message sent successfully!');
        setToastIsError(false);
        setShowToast(true);
        
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setFormStatus({
          message: 'Failed to send message. Please try again later.',
          isError: true,
          isSubmitting: false,
        });
        setToastMessage('Failed to send message. Please try again.');
        setToastIsError(true);
        setShowToast(true);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
     
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-20 right-5 z-50 flex items-center p-4 mb-4 w-full max-w-xs rounded-lg shadow-lg ${
              toastIsError ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
            }`}
            role="alert"
          >
            <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg">
              {toastIsError ? (
                <AlertCircle className="w-5 h-5" />
              ) : (
                <CheckCircle className="w-5 h-5" />
              )}
            </div>
            <div className="ml-3 text-sm font-normal">{toastMessage}</div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-gray-100"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <a href="mailto:andrebyukusenge9@gmail.com" className="text-gray-900 font-medium hover:text-blue-600">
                      andrebyukusenge9@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Phone</p>
                    <a href="tel:+250784152224" className="text-gray-900 font-medium hover:text-blue-600">
                      +2507 8415 2224
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-900 font-medium">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Byukusenge-Andrew"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/andre-byukusenge-a0100021a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/drefa4lt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-7"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.isError ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-700'
                  }`}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
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