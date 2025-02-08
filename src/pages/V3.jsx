import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaComments, FaCalendarAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { organizers, volunteers, sponsors, scheduleItems } from '../data/eventData';
import '../styles/sponsors.css';

const V3 = () => {
  const navigate = useNavigate();
  const scheduleRef = useRef(null);
  const sponsorsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChatClick = () => {
    navigate('/chat');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const allSponsors = [...sponsors.platinum, ...sponsors.gold, ...sponsors.silver];
  const [currentSponsor, setCurrentSponsor] = useState(0);
  const autoSlideInterval = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideInterval.current = setInterval(() => {
        setCurrentSponsor(prev => {
          const nextSlide = prev + 3;
          return nextSlide >= allSponsors.length ? 0 : nextSlide;
        });
      }, 3000); // Change slides every 3 seconds
    };

    startAutoSlide();

    // Cleanup interval on component unmount
    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [allSponsors.length]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentSponsor(prev => {
        const nextSlide = prev + 3;
        return nextSlide >= allSponsors.length ? 0 : nextSlide;
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              DevMeetup V3
            </h1>
            <p className="text-lg text-white/90 mb-4">
              March 15, 2025 at Tech Hub Conference Center, Addis Ababa
            </p>
            <button 
              onClick={handleRegisterClick}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all mb-6"
            >
              Register Now
            </button>
            <p className="text-sm text-white/80">Limited spots available!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div 
              onClick={handleChatClick}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaComments className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">Community Chat</h3>
                <p className="text-sm text-white/80 text-center">Join the conversation in our V3 chat room</p>
              </div>
            </div>

            <div 
              onClick={() => scrollToSection(scheduleRef)}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaCalendarAlt className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">Event Details</h3>
                <p className="text-sm text-white/80 text-center">View schedule and venue information</p>
              </div>
            </div>

            <div 
              onClick={() => scrollToSection(sponsorsRef)}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-all">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FaStar className="text-white text-xl" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">Event Sponsors</h3>
                <p className="text-sm text-white/80 text-center">Meet the companies supporting our event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section ref={scheduleRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Event Schedule</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {Array.isArray(scheduleItems) && scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg p-6 border-l-4 ${
                  item.type === 'keynote' ? 'border-indigo-500' :
                  item.type === 'talk' ? 'border-purple-500' :
                  item.type === 'workshop' ? 'border-pink-500' :
                  'border-gray-300'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <div className="text-gray-600 mt-1">
                      {typeof item.speaker === 'string' ? item.speaker : 
                        item.speaker ? `${item.speaker.name}${item.speaker.role ? ` - ${item.speaker.role}` : ''}${item.speaker.company ? ` (${item.speaker.company})` : ''}` : 'TBA'
                      }
                    </div>
                  </div>
                  <div className="text-indigo-600 whitespace-nowrap font-medium">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3">Keynote Speakers</h2>
          <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
            Learn from industry leaders and innovators
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Getnet Aseffa */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://icog-labs.com/wp-content/uploads/2023/05/Getnet-Aseffa.jpg"
                  alt="Getnet Aseffa"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Getnet Aseffa</h3>
              <p className="text-indigo-600 text-sm text-center mb-3">CEO & Founder at iCog Labs</p>
              <p className="text-gray-600 text-sm text-center mb-4">
                Leading expert in AI and robotics, pioneering technological advancement in Ethiopia and Africa.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/getnet-aseffa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/getnetaseffa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Betelhem Dessie */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://media.licdn.com/dms/image/C4D03AQHvszz8fS8yvw/profile-displayphoto-shrink_800_800/0/1641983652761?e=2147483647&v=beta&t=WvHVr4nxUXrEqqvDHyRYVZGPqBjjJDhB2YPiKvBrh2U"
                  alt="Betelhem Dessie"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Betelhem Dessie</h3>
              <p className="text-indigo-600 text-sm text-center mb-3">CEO at Anyone Can Code</p>
              <p className="text-gray-600 text-sm text-center mb-4">
                Tech prodigy and advocate for youth education in technology, inspiring the next generation of developers.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/betelhem-dessie" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/betelhemdessiee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Nael Hailemariam */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQFz0TH14XpQwg/profile-displayphoto-shrink_800_800/0/1650587241937?e=2147483647&v=beta&t=3iUd2J_5CGQIlRzGqWxBaLhQWxKqKZWXELwJghF0WZY"
                  alt="Nael Hailemariam"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Nael Hailemariam</h3>
              <p className="text-indigo-600 text-sm text-center mb-3">CTO at Qene Games</p>
              <p className="text-gray-600 text-sm text-center mb-4">
                Gaming industry pioneer, leading the development of African-inspired games and fostering local talent.
              </p>
              <div className="flex justify-center gap-4">
                <a href="https://www.linkedin.com/in/nael-hailemariam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/naelh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3">Event Organizers</h2>
          <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
            Meet the dedicated team behind DevMeetup V3
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {organizers.map((organizer, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 overflow-hidden rounded-full">
                  <img
                    src={organizer.image}
                    alt={organizer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{organizer.name}</h3>
                <p className="text-xs text-gray-500">{organizer.role}</p>
                <div className="flex justify-center gap-2 mt-2">
                  {organizer.github && (
                    <a href={organizer.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <FaGithub className="w-3 h-3" />
                    </a>
                  )}
                  {organizer.twitter && (
                    <a href={organizer.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <FaTwitter className="w-3 h-3" />
                    </a>
                  )}
                  {organizer.linkedin && (
                    <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <FaLinkedin className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3">Our Volunteers</h2>
          <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
            The amazing people helping to make this event possible
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {volunteers.map((volunteer, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 overflow-hidden rounded-full">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs font-semibold text-gray-800">{volunteer.name}</h3>
                <p className="text-xs text-gray-500 mb-1">{volunteer.role}</p>
                <div className="flex justify-center gap-2">
                  {volunteer.github && (
                    <a href={volunteer.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <FaGithub className="w-3 h-3" />
                    </a>
                  )}
                  {volunteer.twitter && (
                    <a href={volunteer.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <FaTwitter className="w-3 h-3" />
                    </a>
                  )}
                  {volunteer.linkedin && (
                    <a href={volunteer.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <FaLinkedin className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section ref={sponsorsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
            <p className="text-gray-600 mb-6">Meet the companies making DevMeetup V3 possible</p>
            <Link 
              to="/sponser-us" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
            >
              View Sponsorship Packages
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative max-w-7xl mx-auto">
            {/* Previous Button */}
            <button 
              onClick={() => setCurrentSponsor(prev => prev === 0 ? Math.max(0, allSponsors.length - 3) : Math.max(0, prev - 3))}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center"
            >
              <span className="text-2xl text-gray-400">&lt;</span>
            </button>

            {/* Sponsors Carousel */}
            <div 
              className="overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSponsor * (100/3)}%)` }}
              >
                {allSponsors.map((sponsor, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div className="bg-transparent border border-gray-200 rounded-3xl p-8 mx-auto relative hover:border-gray-300 transition-colors">
                      <div className="absolute top-4 right-4 w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-400">↗</span>
                      </div>
                      <div className="flex justify-center mb-6">
                        <img 
                          src={sponsor.logo} 
                          alt={sponsor.name}
                          className="h-12 object-contain"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                        {sponsor.name}
                      </h3>
                      <p className="text-gray-500 text-center text-sm">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={() => setCurrentSponsor(prev => prev + 3 >= allSponsors.length ? 0 : prev + 3)}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center"
            >
              <span className="text-2xl text-gray-400">&gt;</span>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              {[...Array(Math.ceil(allSponsors.length / 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSponsor(index * 3)}
                  className={`w-2 h-2 rounded-full ${
                    Math.floor(currentSponsor / 3) === index 
                      ? 'bg-purple-600' 
                      : 'bg-gray-300'
                  }`}
                />
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
            <p className="text-lg mb-8">
              Support the Ethiopian developer community and showcase your brand to hundreds of passionate developers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Brand Visibility</h3>
                <p className="text-white/80">
                  Get your brand in front of hundreds of developers, tech enthusiasts, and industry leaders.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Talent Access</h3>
                <p className="text-white/80">
                  Connect with top developers and tech talent in Ethiopia for recruitment opportunities.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                <p className="text-white/80">
                  Support the growth of Ethiopia's tech ecosystem and make a lasting impact.
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
