import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    alert('Thank you for your message! We will contact you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-patriot text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6 animate-fade-in">Contact Us</h1>
          <p className="font-playfair italic text-2xl mb-8 animate-slide-up">
            "Your Journey to Excellence Starts with a Single Call"
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="font-poppins font-bold text-3xl text-navy-blue mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-open-sans font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-saffron focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-open-sans font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-saffron focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-open-sans font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-saffron focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="block font-open-sans font-medium text-gray-700 mb-2">
                    Course of Interest
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-saffron focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a course</option>
                    <option value="nda">NDA Preparation</option>
                    <option value="cds">CDS Coaching</option>
                    <option value="afcat">AFCAT Training</option>
                    <option value="ssb">SSB Interview</option>
                    <option value="other">Other Defence Exams</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-open-sans font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-saffron focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your goals and how we can help you"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-deep-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="font-poppins font-bold text-3xl text-navy-blue mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-deep-saffron rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-navy-blue mb-2">Phone Numbers</h3>
                    <p className="font-open-sans text-gray-700">
                      <a href="tel:+919876543210" className="hover:text-deep-saffron transition-colors duration-300">
                        +91 98765 43210
                      </a> (Admissions)
                    </p>
                    <p className="font-open-sans text-gray-700">
                      <a href="tel:+919876543211" className="hover:text-deep-saffron transition-colors duration-300">
                        +91 98765 43211
                      </a> (General Queries)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-india-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-navy-blue mb-2">Email Addresses</h3>
                    <p className="font-open-sans text-gray-700">
                      <a href="mailto:info@patriotspath.academy" className="hover:text-deep-saffron transition-colors duration-300">
                        info@patriotspath.academy
                      </a>
                    </p>
                    <p className="font-open-sans text-gray-700">
                      <a href="mailto:admissions@patriotspath.academy" className="hover:text-deep-saffron transition-colors duration-300">
                        admissions@patriotspath.academy
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-navy-blue mb-2">Academy Address</h3>
                    <p className="font-open-sans text-gray-700">
                      Patriot's Path Defence Academy<br />
                      Sector 15, Defence Colony<br />
                      New Delhi - 110024<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-deep-saffron rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-navy-blue mb-2">Office Hours</h3>
                    <p className="font-open-sans text-gray-700">
                      Monday - Friday: 9:00 AM - 7:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-12 bg-gray-50 p-6 rounded-2xl">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-india-green mx-auto mb-4" />
                  <h3 className="font-poppins font-bold text-xl text-navy-blue mb-3">Quick Chat on WhatsApp</h3>
                  <p className="font-open-sans text-gray-700 mb-4">
                    Get instant answers to your queries and speak directly with our counselors
                  </p>
                  <a
                    href="https://wa.me/919876543210?text=Hello! I need information about defence coaching at Patriot's Path Academy."
                    className="inline-flex items-center space-x-2 bg-india-green text-white px-6 py-3 rounded-lg font-open-sans font-medium hover:bg-green-700 transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Frequently Asked Questions</h2>
            <p className="font-open-sans text-xl text-gray-600">Common questions from prospective students</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What is the duration of the NDA coaching course?',
                answer: 'Our NDA coaching course runs for 12 months with comprehensive coverage of all subjects and SSB interview preparation.'
              },
              {
                question: 'Do you provide study materials?',
                answer: 'Yes, we provide complete study materials, practice books, and access to our online test portal for all enrolled students.'
              },
              {
                question: 'What is the batch size for each course?',
                answer: 'We maintain small batch sizes (15-30 students) to ensure personalized attention and effective learning.'
              },
              {
                question: 'Are there any scholarship programs available?',
                answer: 'Yes, we offer merit-based scholarships and special discounts for children of serving/ex-servicemen.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-bold text-lg text-navy-blue mb-3">{faq.question}</h3>
                <p className="font-open-sans text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;