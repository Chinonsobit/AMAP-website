import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LOGO_URL = "https://res.cloudinary.com/dttoqt6w7/image/upload/v1765421474/AMAP_logo_b1ujf5.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Program', path: '/program' },
    { label: 'Apply', path: '/apply' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <img className="h-12 w-auto" src={LOGO_URL} alt="AMAP Logo" />
              <div className="hidden md:block">
                <span className="block text-amap-green font-bold text-lg leading-none">AMAP</span>
                <span className="block text-xs text-gray-500 font-medium">Africa Macroeconomic Analysts Program</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-amap-green border-b-2 border-amap-gold pb-1'
                    : 'text-gray-600 hover:text-amap-green'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="bg-amap-green text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-800 transition-colors shadow-sm"
            >
              Join AMAP
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-amap-green focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-amap-green bg-green-50'
                    : 'text-gray-600 hover:text-amap-green hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;