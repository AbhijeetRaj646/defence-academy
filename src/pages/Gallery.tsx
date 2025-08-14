import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      title: 'Military Training Session',
      category: 'Training'
    },
    {
      url: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
      title: 'SSB Interview Preparation',
      category: 'SSB Training'
    },
    {
      url: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      title: 'Student Success Ceremony',
      category: 'Events'
    },
    {
      url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Classroom Learning',
      category: 'Academic'
    },
    {
      url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      title: 'Group Discussion Session',
      category: 'SSB Training'
    },
    {
      url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      title: 'Academy Campus',
      category: 'Infrastructure'
    },
    {
      url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      title: 'Physical Training',
      category: 'Training'
    },
    {
      url: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
      title: 'Aviation Workshop',
      category: 'AFCAT'
    }
  ];

  const videos = [
    {
      thumbnail: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      title: 'Academy Overview',
      description: 'Take a virtual tour of our state-of-the-art facilities'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
      title: 'Success Stories',
      description: 'Hear from our successful alumni about their journey'
    },
    {
      thumbnail: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      title: 'SSB Training Session',
      description: 'Behind the scenes of our intensive SSB preparation'
    }
  ];

  const categories = ['All', 'Training', 'SSB Training', 'Events', 'Academic', 'Infrastructure', 'AFCAT'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-patriot text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6 animate-fade-in">Gallery</h1>
          <p className="font-playfair italic text-2xl mb-8 animate-slide-up">
            "Capturing Moments of Pride, Progress, and Patriotism"
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-open-sans font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-deep-saffron text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Photo Gallery</h2>
            <p className="font-open-sans text-xl text-gray-600">
              Moments from our academy life, training sessions, and celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer hover-lift"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 text-white text-center transition-opacity duration-300">
                      <h3 className="font-poppins font-bold text-xl mb-2">{image.title}</h3>
                      <span className="font-open-sans bg-deep-saffron px-3 py-1 rounded-full text-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Video Gallery</h2>
            <p className="font-open-sans text-xl text-gray-600">
              Experience our academy through these inspiring videos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group cursor-pointer hover-lift">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-navy-blue ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-bold text-xl text-navy-blue mb-2">{video.title}</h3>
                  <p className="font-open-sans text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl mb-4">Our Achievements</h2>
            <p className="font-open-sans text-xl">Recognition and awards that motivate us to excel further</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-poppins font-bold text-2xl text-white">1st</span>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2">Best Defence Academy</h3>
              <p className="font-open-sans text-gray-300">State Education Awards 2023</p>
            </div>
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-india-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-poppins font-bold text-2xl text-white">95%</span>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2">Success Rate</h3>
              <p className="font-open-sans text-gray-300">NDA & CDS Combined</p>
            </div>
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-poppins font-bold text-2xl text-white">50+</span>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2">Faculty Members</h3>
              <p className="font-open-sans text-gray-300">Expert Instructors</p>
            </div>
            <div className="animate-fade-in">
              <div className="w-20 h-20 bg-india-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-poppins font-bold text-2xl text-white">15+</span>
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2">Years Experience</h3>
              <p className="font-open-sans text-gray-300">Training Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;