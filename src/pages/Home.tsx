import React, { useState } from 'react';
import { ArrowRight, Award, Users, BookOpen, Target, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseModal from '../components/CourseModal';
import NoticeBoard from '../components/NoticeBoard';
import { courses, Course } from '../data/courses';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-navy-blue bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tricolor-ribbon w-32 mx-auto mb-8"></div>
          <h1 className="font-poppins font-bold text-5xl md:text-7xl mb-6 animate-fade-in">
            Patriot's Path
          </h1>
          <p className="font-playfair italic text-2xl md:text-3xl mb-8 animate-slide-up">
            "Where Dreams Meet Discipline, Heroes Are Born"
          </p>
          <p className="font-open-sans text-xl md:text-2xl mb-12 leading-relaxed animate-slide-up">
            Premier Defence Academy preparing future officers for NDA, CDS, AFCAT, and SSB interviews. 
            Your journey to serve the nation begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/courses"
              className="bg-deep-saffron hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Courses
            </Link>
            <a
              href="tel:+919876543210"
              className="border-2 border-white hover:bg-white hover:text-navy-blue text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-3xl text-navy-blue mb-2">500+</h3>
              <p className="font-open-sans text-gray-600">Successful Selections</p>
            </div>
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-india-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-3xl text-navy-blue mb-2">15+</h3>
              <p className="font-open-sans text-gray-600">Years of Excellence</p>
            </div>
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-3xl text-navy-blue mb-2">50+</h3>
              <p className="font-open-sans text-gray-600">Expert Faculty</p>
            </div>
            <div className="animate-fade-in">
              <div className="w-16 h-16 bg-india-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-3xl text-navy-blue mb-2">95%</h3>
              <p className="font-open-sans text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-6">
                About Patriot's Path Academy
              </h2>
              <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                For over 15 years, Patriot's Path Academy has been the beacon of excellence in defence coaching. 
                We don't just prepare students for exams; we shape character, build leaders, and instill the values 
                of service before self.
              </p>
              <p className="font-open-sans text-lg text-gray-700 mb-8 leading-relaxed">
                Our academy stands as a testament to the dreams of thousands of young patriots who aspired to 
                serve the nation. With state-of-the-art facilities, experienced faculty, and a proven track record, 
                we continue to be the trusted choice for defence aspirants.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-navy-blue text-white px-6 py-3 rounded-lg font-open-sans font-medium hover:bg-blue-800 transition-colors duration-300"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg"
                alt="Defence Academy Training"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">
              Our Defence Courses
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coaching programs designed to excel in all major defence entrance examinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="h-48 bg-gradient-patriot relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-poppins font-bold text-2xl text-white text-center">{course.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-open-sans text-gray-700 mb-4 leading-relaxed">
                    {course.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-poppins font-bold text-deep-saffron">{course.fees}</span>
                    <button className="bg-navy-blue text-white px-4 py-2 rounded-lg font-open-sans font-medium hover:bg-blue-800 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Board */}
      <NoticeBoard />

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">
              Success Stories
            </h2>
            <p className="font-open-sans text-xl text-gray-600">
              Celebrating the achievements of our proud alumni
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-navy-blue">{testimonial.name}</h3>
                    <p className="font-open-sans text-deep-saffron font-medium">{testimonial.achievement}</p>
                    <p className="font-open-sans text-sm text-gray-500">{testimonial.course} • {testimonial.year}</p>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-deep-saffron mb-4" />
                  <p className="font-open-sans text-gray-700 leading-relaxed italic">
                    "{testimonial.story}"
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-patriot">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-playfair italic text-2xl text-white mb-8">
            "Every great journey begins with a single step towards excellence"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-navy-blue px-8 py-4 rounded-lg font-poppins font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello! I want to know more about defence coaching at Patriot's Path Academy."
              className="border-2 border-white hover:bg-white hover:text-navy-blue text-white px-8 py-4 rounded-lg font-poppins font-bold text-lg transition-all duration-300"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>

      {/* Course Modal */}
      <CourseModal
        course={selectedCourse}
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
};

export default Home;