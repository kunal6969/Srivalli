import React, { useState } from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'bf2d430b-3536-4476-b992-e5a7902c3b35',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission from Srivalli Website',
          to: 'maheshchandak69@gmail.com',
          cc: 'kunalthapliyal07@gmail.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-b from-white via-brand-cream/10 to-white">
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brand-green mb-4 tracking-tight">Get In Touch</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you. Visit us or drop us a line.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-0">
        <div className="order-2 md:order-1">
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-green mb-5">Contact Information</h3>
          <div className="space-y-5 text-gray-700 text-base sm:text-lg">
            <p className="leading-relaxed"><strong className="text-brand-green">Address:</strong> D-178, Anurag Path, behind WTP, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017</p>
            <p><strong className="text-brand-green">Phone:</strong> <a href="tel:+919314662006" className="hover:text-brand-terracotta transition-colors">+91-9314662006</a></p>
            <p><strong className="text-brand-green">Email:</strong> <a href="mailto:maheshchandak69@gmail.com" className="hover:text-brand-terracotta transition-colors">maheshchandak69@gmail.com</a></p>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-green mt-8 mb-5">Operating Hours</h3>
          <div className="space-y-3 text-gray-700 text-base sm:text-lg">
            <p><strong className="text-brand-green">Monday - Friday:</strong> 11:00 AM - 10:00 PM</p>
            <p><strong className="text-brand-green">Saturday - Sunday:</strong> 10:00 AM - 11:00 PM</p>
          </div>
           <div className="mt-8 h-64 sm:h-80 bg-gray-200 rounded-2xl overflow-hidden"
                style={{
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.08)'
                }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.8710292806283!2d75.80635710000001!3d26.8537084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7d83d8db239%3A0xace0bcaa37b06a6e!2sSrivalli!5e0!3m2!1sen!2sin!4v1721935824513!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title="Restaurant Location"
                ></iframe>
            </div>
        </div>
        <div className="bg-gradient-to-br from-brand-cream to-white p-6 sm:p-8 rounded-2xl order-1 md:order-2"
             style={{
               boxShadow: '0 12px 48px rgba(0,0,0,0.1), 0 6px 24px rgba(0,0,0,0.08)'
             }}>
          <h3 className="text-2xl sm:text-3xl font-bold text-brand-green mb-6">Send Us a Message</h3>
          
          {status === 'success' && (
            <div className="mb-6 p-4 sm:p-5 bg-green-50 border-2 border-green-400 text-green-700 rounded-xl font-medium text-sm sm:text-base">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 sm:p-5 bg-red-50 border-2 border-red-400 text-red-700 rounded-xl font-medium text-sm sm:text-base">
              ✗ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block text-brand-green font-semibold mb-2 text-sm sm:text-base">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-brand-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-base bg-white" 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-brand-green font-semibold mb-2 text-sm sm:text-base">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-brand-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-base bg-white" 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="block text-brand-green font-semibold mb-2 text-sm sm:text-base">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91-XXXXXXXXXX"
                className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-brand-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-base bg-white" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-brand-green font-semibold mb-2 text-sm sm:text-base">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-brand-green/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-base bg-white resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-brand-green to-brand-green/90 text-white font-bold py-4 sm:py-5 px-6 rounded-full active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base sm:text-lg"
              style={{
                boxShadow: '0 6px 24px rgba(26, 71, 42, 0.3), 0 3px 12px rgba(26, 71, 42, 0.2)'
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Submit Message'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;