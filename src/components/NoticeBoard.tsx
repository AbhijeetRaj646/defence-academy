import React, { useState } from 'react';
import { Bell, Calendar, AlertTriangle, Users, X } from 'lucide-react';
import { announcements, Announcement } from '../data/announcements';

const NoticeBoard = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'urgent':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'event':
        return <Users className="w-5 h-5 text-blue-500" />;
      default:
        return <Bell className="w-5 h-5 text-deep-saffron" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'urgent':
        return 'border-l-red-500 bg-red-50';
      case 'event':
        return 'border-l-blue-500 bg-blue-50';
      default:
        return 'border-l-deep-saffron bg-orange-50';
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl text-navy-blue mb-4">
              Notice Board
            </h2>
            <p className="font-open-sans text-xl text-gray-600">
              Stay updated with latest announcements and important notifications
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`border-l-4 p-6 rounded-r-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${getTypeColor(announcement.type)}`}
                onClick={() => setSelectedAnnouncement(announcement)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    {getIcon(announcement.type)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-poppins font-bold text-lg text-navy-blue">
                          {announcement.title}
                        </h3>
                        {announcement.isNew && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-open-sans font-medium">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="font-open-sans text-gray-700 mb-2">
                        {announcement.description}
                      </p>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="font-open-sans">{new Date(announcement.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm font-open-sans">Click for details</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  {getIcon(selectedAnnouncement.type)}
                  <h2 className="font-poppins font-bold text-2xl text-navy-blue">
                    {selectedAnnouncement.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedAnnouncement(null)}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="font-open-sans">{new Date(selectedAnnouncement.date).toLocaleDateString()}</span>
                </div>

                <p className="font-open-sans text-gray-700 text-lg leading-relaxed">
                  {selectedAnnouncement.description}
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-poppins font-bold text-lg text-navy-blue mb-2">Additional Information</h3>
                  <p className="font-open-sans text-gray-700">
                    For more details about this announcement, please contact our academy office or reach out through WhatsApp. Our counselors are available to answer all your queries and provide personalized guidance.
                  </p>
                </div>

                <div className="text-center pt-4">
                  <a
                    href={`https://wa.me/919876543210?text=I need more information about: ${selectedAnnouncement.title}`}
                    className="inline-flex items-center space-x-2 bg-india-green text-white px-6 py-3 rounded-lg font-open-sans font-medium hover:bg-green-700 transition-colors duration-300"
                  >
                    <span>Get More Details</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticeBoard;