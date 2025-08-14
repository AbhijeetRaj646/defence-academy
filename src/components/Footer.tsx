import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white">
      <div className="tricolor-ribbon"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-patriot rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl">Patriot's Path</h3>
                <p className="text-sm text-gray-300">Defence Academy</p>
              </div>
            </div>
            <p className="text-gray-300 font-open-sans">
              Shaping tomorrow's defenders today. Excellence in defence coaching with a focus on character building and national service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-poppins font-bold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Courses & Fees', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '').replace('&', '')}`}
                    className="text-gray-300 hover:text-deep-saffron transition-colors duration-300 font-open-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="font-poppins font-bold text-lg">Our Courses</h4>
            <ul className="space-y-2">
              {['NDA Preparation', 'CDS Coaching', 'AFCAT Training', 'SSB Interview', 'Technical Entries', 'Navy Coaching'].map((course) => (
                <li key={course}>
                  <span className="text-gray-300 font-open-sans">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-poppins font-bold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-deep-saffron" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors duration-300 font-open-sans">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-deep-saffron" />
                <a href="mailto:info@patriotspath.academy" className="text-gray-300 hover:text-white transition-colors duration-300 font-open-sans">
                  info@patriotspath.academy
                </a>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="https://linkedin.com/company/patriotspath" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-deep-saffron transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/patriotspath" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-deep-saffron transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919876543210" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-india-green transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 font-open-sans">
            © 2024 Patriot's Path Defence Academy. All rights reserved. | Serving the Nation with Pride
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;