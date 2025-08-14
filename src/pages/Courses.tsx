import React, { useState } from 'react';
import { Clock, Users, BookOpen, CheckCircle, Trophy } from 'lucide-react';
import CourseModal from '../components/CourseModal';
import { courses, Course } from '../data/courses';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-patriot text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6 animate-fade-in">Courses & Fees</h1>
          <p className="font-playfair italic text-2xl mb-8 animate-slide-up">
            "Excellence is not a skill, it's an attitude we cultivate"
          </p>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            Comprehensive coaching programs designed to ensure success in all major defence entrance examinations
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-slide-up`}>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-up`}>
                  <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-6">{course.title}</h2>
                  <p className="font-open-sans text-lg text-gray-700 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <Clock className="w-6 h-6 text-deep-saffron" />
                      <div>
                        <p className="font-open-sans text-sm text-gray-600">Duration</p>
                        <p className="font-poppins font-bold text-navy-blue">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <Users className="w-6 h-6 text-deep-saffron" />
                      <div>
                        <p className="font-open-sans text-sm text-gray-600">Batch Size</p>
                        <p className="font-poppins font-bold text-navy-blue">{course.batchSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                      <BookOpen className="w-6 h-6 text-deep-saffron" />
                      <div>
                        <p className="font-open-sans text-sm text-gray-600">Course Fees</p>
                        <p className="font-poppins font-bold text-navy-blue">{course.fees}</p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-india-green" />
                          <span className="font-open-sans text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-deep-saffron hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-poppins font-bold text-lg transition-all duration-300 hover:scale-105"
                  >
                    View Complete Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Why Choose Patriot's Path?</h2>
            <p className="font-open-sans text-xl text-gray-600">What sets us apart from other coaching institutes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Proven Track Record</h3>
              <p className="font-open-sans text-gray-700">
                Over 500 successful selections in NDA, CDS, AFCAT, and other defence services with consistently high success rates.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-india-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Expert Faculty</h3>
              <p className="font-open-sans text-gray-700">
                Learn from retired defence officers and subject experts who bring real-world experience to the classroom.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Comprehensive Material</h3>
              <p className="font-open-sans text-gray-700">
                Updated study materials, practice tests, and resources designed specifically for defence examinations.
              </p>
            </div>
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

export default Courses;