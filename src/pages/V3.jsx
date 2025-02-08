import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaComments, FaCalendarAlt, FaStar } from "react-icons/fa";
import { motion } from 'framer-motion';
import { eventDetails, scheduleItems, organizers, volunteers, sponsors } from "../data/eventData";

const V3 = () => {
  // Create refs for sections
  const chatRef = useRef(null);
  const scheduleRef = useRef(null);
  const sponsorsRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const renderSpeaker = (speaker) => {
    if (typeof speaker === 'string') return speaker;
    if (!speaker) return 'TBA';
    const { name, role, company } = speaker;
    let speakerText = name || '';
    if (role) speakerText += ` - ${role}`;
    if (company) speakerText += ` (${company})`;
    return speakerText;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-pink-500 pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-white mb-4">
              {eventDetails.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {eventDetails.date} at {eventDetails.location}
            </p>
            <button 
              className="bg-white px-8 py-3 rounded-full text-lg font-medium text-indigo-600 hover:bg-opacity-90 transition-all mb-4"
              onClick={() => window.location.href = '/register'}
            >
              Register Now
            </button>
            <p className="text-white/60 text-sm">Limited spots available!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Community Chat Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all cursor-pointer transform hover:scale-105"
              onClick={() => scrollToSection(chatRef)}
            >
              <FaComments className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Community Chat</h3>
              <p className="text-white/80">Join the conversation in our V3 chat room</p>
            </div>

            {/* Event Details Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all cursor-pointer transform hover:scale-105"
              onClick={() => scrollToSection(scheduleRef)}
            >
              <FaCalendarAlt className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Event Details</h3>
              <p className="text-white/80">View schedule and venue information</p>
            </div>

            {/* Event Sponsors Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all cursor-pointer transform hover:scale-105"
              onClick={() => scrollToSection(sponsorsRef)}
            >
              <FaStar className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold text-white mb-2">Event Sponsors</h3>
              <p className="text-white/80">Meet the companies supporting our event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section ref={scheduleRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Schedule</h2>
          <div className="space-y-4">
            {scheduleItems?.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{renderSpeaker(item.speaker)}</p>
                    {item.description && (
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    )}
                  </div>
                  <div className="text-indigo-600 whitespace-nowrap font-medium">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Chat Section */}
      <section ref={chatRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Community Chat</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Join our vibrant community chat to connect with fellow developers, share ideas, and stay updated on event details.
          </p>
          <div className="max-w-4xl mx-auto">
            <Link
              to="/chat"
              className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">DevMeetup Community</h3>
                  <span className="bg-green-500 text-white text-sm py-1 px-3 rounded-full">Live</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <div className="flex-1 bg-gray-100 rounded-2xl p-3">
                      <p className="text-sm text-gray-800">Hey everyone! Excited for the upcoming meetup! 🚀</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex-shrink-0"></div>
                    <div className="flex-1 bg-gray-100 rounded-2xl p-3">
                      <p className="text-sm text-gray-800">The speaker lineup looks amazing this year!</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700">
                    Join the conversation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Event Organizers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-28 h-28 rounded-full object-cover ring-2 ring-indigo-50 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{organizer.name}</h3>
                  <p className="text-sm font-medium text-indigo-600 mb-1">{organizer.role}</p>
                  <p className="text-sm text-gray-500 mb-1">{organizer.company}</p>
                  <p className="text-sm text-gray-600 mb-4 text-center line-clamp-3 hover:line-clamp-none transition-all duration-300">
                    {organizer.description}
                  </p>
                  <div className="flex space-x-4">
                    {organizer.linkedin && (
                      <a 
                        href={organizer.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all"
                      >
                        <FaLinkedin size={18} />
                      </a>
                    )}
                    {organizer.github && (
                      <a 
                        href={organizer.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-gray-700 transform hover:scale-110 transition-all"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {organizer.twitter && (
                      <a 
                        href={organizer.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all"
                      >
                        <FaTwitter size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Event Volunteers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col items-center">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-20 h-20 rounded-full object-cover ring-2 ring-indigo-50 mb-3"
                  />
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{volunteer.name}</h3>
                  <p className="text-sm font-medium text-indigo-600 mb-2">{volunteer.role}</p>
                  <p className="text-sm text-gray-600 mb-3 text-center line-clamp-2 hover:line-clamp-none transition-all duration-300">
                    {volunteer.description}
                  </p>
                  <div className="flex space-x-3">
                    {volunteer.linkedin && (
                      <a 
                        href={volunteer.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition-all"
                      >
                        <FaLinkedin size={16} />
                      </a>
                    )}
                    {volunteer.github && (
                      <a 
                        href={volunteer.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-gray-700 transform hover:scale-110 transition-all"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    {volunteer.twitter && (
                      <a 
                        href={volunteer.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all"
                      >
                        <FaTwitter size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Our Sponsors</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We're proud to partner with leading technology companies who share our vision for advancing the tech ecosystem in Ethiopia.
          </p>
          
          {/* Platinum Sponsors */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sponsors.platinum.map((sponsor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="h-24 flex items-center justify-center mb-4">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-medium text-center text-gray-800 mb-2">{sponsor.name}</h4>
                    <p className="text-gray-600 text-center text-sm">{sponsor.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {sponsors.gold.map((sponsor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-base font-medium text-center text-gray-800 mb-1">{sponsor.name}</h4>
                    <p className="text-gray-600 text-center text-xs">{sponsor.description}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-xl font-semibold text-center mb-8 text-gray-800">Silver Sponsors</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {sponsors.silver.map((sponsor, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-center text-gray-800">{sponsor.name}</h4>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call for Sponsors */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Become a Sponsor</h2>
            <p className="text-lg mb-8 opacity-90">
              Join us in shaping the future of technology in Ethiopia. Partner with DevMeetup and connect with the region's most innovative developers and tech companies.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Brand Visibility</h3>
                <p className="text-sm opacity-90">
                  Showcase your brand to 1000+ developers, tech enthusiasts, and industry leaders
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Talent Access</h3>
                <p className="text-sm opacity-90">
                  Connect with top tech talent and potential hires during networking sessions
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
                <p className="text-sm opacity-90">
                  Support the growth of Ethiopia's tech ecosystem and make a lasting impact
                </p>
              </div>
            </div>
            <div className="space-x-4">
              <a
                href="#sponsorship-packages"
                className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                View Packages
              </a>
              <a
                href="mailto:sponsor@devmeetup.com"
                className="inline-block px-8 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default V3;
