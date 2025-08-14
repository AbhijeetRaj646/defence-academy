import React from 'react';
import { Award, Users, Target, Heart, Book, Trophy } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2009', event: 'Academy Established', description: 'Founded with a vision to shape future defenders' },
    { year: '2012', event: 'First 100 Selections', description: 'Achieved milestone of 100 successful candidates' },
    { year: '2016', event: 'Expansion & Growth', description: 'Expanded facilities and introduced new courses' },
    { year: '2020', event: 'Digital Transformation', description: 'Launched online coaching and virtual classrooms' },
    { year: '2024', event: '500+ Success Stories', description: 'Proud to have trained over 500 successful officers' },
  ];

  const faculty = [
    {
      name: 'Col. Rajesh Kumar (Retd.)',
      position: 'Director & Head of SSB Training',
      experience: '25 years in Indian Army',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      name: 'Wg Cdr. Priya Sharma (Retd.)',
      position: 'AFCAT Faculty Head',
      experience: '20 years in Indian Air Force',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Cdr. Vikram Singh (Retd.)',
      position: 'CDS Mathematics Faculty',
      experience: '18 years in Indian Navy',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
    },
    {
      name: 'Dr. Anjali Verma',
      position: 'English & General Studies',
      experience: 'PhD in English Literature',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg'
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-patriot text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6 animate-fade-in">About Us</h1>
          <p className="font-playfair italic text-2xl mb-8 animate-slide-up">
            "Building Tomorrow's Defenders with Honor, Integrity, and Excellence"
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-deep-saffron" />
                <h2 className="font-poppins font-bold text-3xl text-navy-blue">Our Mission</h2>
              </div>
              <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
                To provide world-class coaching and mentorship for defence aspirants, focusing not just on academic excellence 
                but also on character building, leadership development, and instilling the core values of service before self.
              </p>
              <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                We believe that every student who walks through our doors has the potential to become a great leader and 
                defender of our nation. Our mission is to unlock that potential through dedicated training, 
                personalized attention, and unwavering support.
              </p>
            </div>
            <div className="animate-slide-up">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8 text-deep-saffron" />
                <h2 className="font-poppins font-bold text-3xl text-navy-blue">Our Vision</h2>
              </div>
              <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
                To be the most trusted and respected defence coaching academy in India, known for producing officers 
                who serve with distinction and bring honor to the uniform and the nation.
              </p>
              <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                We envision a future where every student who graduates from Patriot's Path Academy becomes not just 
                a successful officer, but a beacon of integrity, courage, and patriotism that inspires others to 
                follow the path of service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Our Core Values</h2>
            <p className="font-open-sans text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-deep-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Excellence</h3>
              <p className="font-open-sans text-gray-700">
                Striving for the highest standards in education, training, and personal development.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-india-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Integrity</h3>
              <p className="font-open-sans text-gray-700">
                Building character and moral strength that forms the foundation of great leadership.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift">
              <div className="w-16 h-16 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Service</h3>
              <p className="font-open-sans text-gray-700">
                Instilling the spirit of service before self and dedication to the nation's welfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Our Journey</h2>
            <p className="font-open-sans text-xl text-gray-600">Milestones in our path of excellence</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="w-24 h-24 bg-deep-saffron rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-bold text-white text-lg">{milestone.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-poppins font-bold text-2xl text-navy-blue mb-2">{milestone.event}</h3>
                  <p className="font-open-sans text-lg text-gray-700">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Our Expert Faculty</h2>
            <p className="font-open-sans text-xl text-gray-600">
              Learn from experienced defence personnel and subject matter experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="font-poppins font-bold text-xl text-navy-blue mb-2">{member.name}</h3>
                  <p className="font-open-sans text-deep-saffron font-medium mb-2">{member.position}</p>
                  <p className="font-open-sans text-gray-600 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-navy-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-playfair italic text-3xl md:text-4xl mb-8 leading-relaxed">
            "The path of a warrior is not easy, but it is the most honorable journey one can undertake. 
            At Patriot's Path, we don't just prepare students for exams – we prepare them for life."
          </p>
          <p className="font-open-sans text-xl">- Col. Rajesh Kumar (Retd.), Director</p>
        </div>
      </section>
    </div>
  );
};

export default About;