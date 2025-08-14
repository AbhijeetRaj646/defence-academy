import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Target, Award } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'NDA 148 Course: Complete Preparation Strategy',
      excerpt: 'A comprehensive guide to crack NDA 148 with effective preparation strategies, time management tips, and success mantras from our expert faculty.',
      author: 'Col. Rajesh Kumar',
      date: '2024-02-20',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg',
      category: 'NDA Preparation'
    },
    {
      id: '2',
      title: 'SSB Interview: Common Mistakes to Avoid',
      excerpt: 'Learn about the most common mistakes candidates make during SSB interviews and how to avoid them for a successful selection.',
      author: 'Wg Cdr. Priya Sharma',
      date: '2024-02-18',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg',
      category: 'SSB Interview'
    },
    {
      id: '3',
      title: 'AFCAT 2024: Key Changes and Updates',
      excerpt: 'Stay updated with the latest changes in AFCAT examination pattern, syllabus modifications, and preparation strategies for 2024.',
      author: 'Dr. Anjali Verma',
      date: '2024-02-15',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg',
      category: 'AFCAT'
    },
    {
      id: '4',
      title: 'Physical Fitness for Defence Aspirants',
      excerpt: 'Essential physical fitness requirements and training regimen for defence service candidates to excel in medical and physical tests.',
      author: 'Cdr. Vikram Singh',
      date: '2024-02-12',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      category: 'Fitness'
    },
    {
      id: '5',
      title: 'CDS Mathematics: Quick Revision Tips',
      excerpt: 'Master CDS mathematics with these quick revision techniques, important formulas, and shortcut methods from our expert faculty.',
      author: 'Dr. Rajesh Gupta',
      date: '2024-02-10',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
      category: 'CDS Preparation'
    },
    {
      id: '6',
      title: 'Life at Defence Academies: What to Expect',
      excerpt: 'An insider\'s guide to life at NDA, IMA, and other defence academies - training, routine, and the transformation journey.',
      author: 'Lt. Col. Meera Patel',
      date: '2024-02-08',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      category: 'Academy Life'
    }
  ];

  const categories = ['All', 'NDA Preparation', 'SSB Interview', 'AFCAT', 'CDS Preparation', 'Fitness', 'Academy Life'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-patriot text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6 animate-fade-in">Blog & News</h1>
          <p className="font-playfair italic text-2xl mb-8 animate-slide-up">
            "Knowledge Shared is Knowledge Multiplied"
          </p>
          <p className="font-open-sans text-xl max-w-3xl mx-auto">
            Stay informed with the latest defence exam updates, preparation tips, and success strategies
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="h-80 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <span className="inline-block bg-deep-saffron text-white px-4 py-2 rounded-full text-sm font-poppins font-medium mb-4 w-fit">
                  Featured Article
                </span>
                <h2 className="font-poppins font-bold text-3xl text-navy-blue mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="font-open-sans text-gray-700 text-lg leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="font-open-sans text-sm">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-open-sans text-sm">{blogPosts[0].date}</span>
                  </div>
                </div>
                <button className="inline-flex items-center space-x-2 bg-navy-blue text-white px-6 py-3 rounded-lg font-open-sans font-medium hover:bg-blue-800 transition-colors duration-300 w-fit">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-open-sans font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-deep-saffron text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-deep-saffron text-white px-3 py-1 rounded-full text-xs font-poppins font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-poppins font-bold text-xl text-navy-blue mb-3 hover:text-deep-saffron transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-open-sans text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span className="font-open-sans">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-open-sans">{post.date}</span>
                      </div>
                    </div>
                    <span className="font-open-sans">{post.readTime}</span>
                  </div>
                  <button className="inline-flex items-center space-x-2 text-deep-saffron hover:text-orange-600 font-open-sans font-medium transition-colors duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">Quick Preparation Tips</h2>
            <p className="font-open-sans text-xl text-gray-600">Expert advice for defence exam preparation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-deep-saffron rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Study Smart</h3>
              <p className="font-open-sans text-gray-700">
                Focus on understanding concepts rather than rote learning. Create a structured study plan and stick to it consistently.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-india-green rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Practice Regularly</h3>
              <p className="font-open-sans text-gray-700">
                Regular mock tests and practice sessions are key to building confidence and improving time management skills.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl hover-lift">
              <div className="w-12 h-12 bg-navy-blue rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-navy-blue mb-4">Stay Motivated</h3>
              <p className="font-open-sans text-gray-700">
                Remember your goal of serving the nation. Maintain physical fitness and mental resilience throughout your preparation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;