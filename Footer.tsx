import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:amapprogram2025@gmail.com?subject=Subscribe to AMAP Updates&body=Please subscribe me to AMAP updates. My email is: ${email}`;
    }
  };

  return (
    <footer className="bg-amap-green text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">AMAP</h3>
            <p className="text-green-100 text-sm mb-4">
              Empowering Africa's next generation of economic analysts with data-driven skills and policy expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-green-100 hover:text-amap-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-green-100 hover:text-amap-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-green-100 hover:text-amap-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amap-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-green-100">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/program" className="hover:text-white transition-colors">The Program</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link to="/apply" className="hover:text-white transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amap-gold mb-4">Contact</h4>
            <div className="flex items-center space-x-2 text-sm text-green-100 mb-2">
              <Mail size={16} />
              <a href="mailto:amapprogram2025@gmail.com" className="hover:text-white">amapprogram2025@gmail.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amap-gold mb-4">Stay Updated</h4>
            <p className="text-sm text-green-100 mb-4">Get the latest AMAP news and opportunities.</p>
            <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="bg-white text-amap-black placeholder-gray-500 px-4 py-2 rounded border-2 border-amap-green focus:outline-none focus:border-amap-gold"
                required
              />
              <button type="submit" className="bg-white text-amap-green px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-green-700 pt-8 mt-8 text-center text-sm text-green-200">
          <p>© 2025 Africa Macroeconomic Analysts Program (AMAP). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;