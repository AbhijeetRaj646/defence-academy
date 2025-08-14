import React from 'react';
import { X, Clock, Users, BookOpen, Target } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  batchSize: string;
  syllabus: string[];
  features: string[];
  fees: string;
  image: string;
}

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header Image */}
          <div className="h-64 bg-gradient-patriot relative">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-poppins font-bold text-4xl text-white text-center">{course.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Overview */}
            <div>
              <h3 className="font-poppins font-bold text-2xl text-navy-blue mb-4">Course Overview</h3>
              <p className="font-open-sans text-gray-700 text-lg leading-relaxed">{course.description}</p>
            </div>

            {/* Course Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-deep-saffron" />
                  <h4 className="font-poppins font-bold text-lg text-navy-blue">Duration</h4>
                </div>
                <p className="font-open-sans text-gray-700">{course.duration}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-deep-saffron" />
                  <h4 className="font-poppins font-bold text-lg text-navy-blue">Batch Size</h4>
                </div>
                <p className="font-open-sans text-gray-700">{course.batchSize}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="w-6 h-6 text-deep-saffron" />
                  <h4 className="font-poppins font-bold text-lg text-navy-blue">Course Fees</h4>
                </div>
                <p className="font-open-sans text-gray-700">{course.fees}</p>
              </div>
            </div>

            {/* Syllabus */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="w-6 h-6 text-deep-saffron" />
                <h3 className="font-poppins font-bold text-2xl text-navy-blue">Syllabus Coverage</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {course.syllabus.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-deep-saffron rounded-full"></div>
                    <span className="font-open-sans text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-poppins font-bold text-2xl text-navy-blue mb-4">Course Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-india-green rounded-full flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-open-sans text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="text-center pt-4">
              <a
                href={`https://wa.me/919876543210?text=I'm interested in the ${course.title} course. Please provide more details.`}
                className="inline-flex items-center space-x-2 bg-india-green text-white px-8 py-3 rounded-lg font-open-sans font-medium hover:bg-green-700 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Course Details</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;