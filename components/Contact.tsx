import React, { useState } from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
          access_key: 'bf2d430b-3536-4476-b992-e5a7902c3b35', // Replace this with your actual key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission from Srivalli Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
    <Section id="contact" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-display text-brand-green mb-4 tracking-wide">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you. Visit us or drop us a line.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-brand-green mb-4">Contact Information</h3>
          <div className="space-y-4 text-gray-700">
            <p><strong>Address:</strong> D-178, Anurag Path, behind WTP, D-Block, Malviya Nagar, Jaipur, Rajasthan 302017</p>
            <p><strong>Phone:</strong> +91-9314662006</p>
            <p><strong>Email:</strong> reservations@srivalli.com</p>
          </div>
          <h3 className="text-2xl font-semibold text-brand-green mt-8 mb-4">Operating Hours</h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM</p>
            <p><strong>Saturday - Sunday:</strong> 10:00 AM - 11:00 PM</p>
          </div>
           <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
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
        <div className="bg-brand-cream p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-brand-green mb-6">Send Us a Message</h3>
          
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              ✓ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
              ✗ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-brand-beige rounded-md focus:outline-none focus:ring-2 focus:ring-brand-saffron" 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-brand-beige rounded-md focus:outline-none focus:ring-2 focus:ring-brand-saffron" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message *</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-brand-beige rounded-md focus:outline-none focus:ring-2 focus:ring-brand-saffron"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-brand-green text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'loading' ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;