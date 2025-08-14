import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses & Fees', path: '/courses' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="tricolor-ribbon"></div>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-patriot rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="font-poppins font-bold text-xl text-navy-blue">Patriot's Path</h1>
                <p className="text-sm text-gray-600">Defence Academy</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-open-sans font-medium transition-all duration-300 hover:text-deep-saffron relative ${
                    location.pathname === item.path
                      ? 'text-deep-saffron'
                      : 'text-navy-blue'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-deep-saffron"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+919876543210"
                className="bg-deep-saffron text-white px-4 py-2 rounded-lg font-open-sans font-medium hover:bg-orange-600 transition-colors duration-300"
              >
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-navy-blue hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-open-sans font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-deep-saffron'
                      : 'text-navy-blue hover:text-deep-saffron'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+919876543210"
                className="block w-full bg-deep-saffron text-white px-4 py-2 rounded-lg font-open-sans font-medium text-center mt-4"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;