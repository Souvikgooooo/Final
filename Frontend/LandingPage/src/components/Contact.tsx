import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const developers = [
    { name: 'Souvik Ghosh', email: 'sg@lsp.com' },
    { name: 'Soumyadip Paul', email: 'sp@lsp.com' },
    { name: 'Sourav Kumar', email: 'sk@lsp.com' },
    { name: 'Priyanath Bhukta', email: 'pb@lsp.com' },
    { name: 'Trisha Ghosh', email: 'tg@lsp.com' }
  ];

  return (
    <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-xl text-gray-600">Have questions? We're here to help!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Development Team</h3>
            <div className="space-y-6">
              {developers.map((dev, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{dev.name}</h4>
                    <p className="text-emerald-600">{dev.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl shadow-lg p-8 text-white">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:ring-2 focus:ring-white/50 text-white placeholder-white/60"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-emerald-600 py-2 px-4 rounded-lg font-medium hover:bg-emerald-50 transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;