import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaComments, FaCalendarAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { organizers, volunteers, sponsors, scheduleItems } from '../data/eventData';
import '../styles/sponsors.css';
import EventSponsors from '../components/EventSponsors';

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

  // const allSponsors = [...sponsors.platinum, ...sponsors.gold, ...sponsors.silver];
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoSlideInterval = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideInterval.current = setInterval(() => {
        setCurrentIndex(prev => {
          const nextSlide = prev + 1;
          return nextSlide >= Object.keys(sponsors).length ? 0 : nextSlide;
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
  }, [sponsors]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex(prev => {
        const nextSlide = prev + 1;
        return nextSlide >= Object.keys(sponsors).length ? 0 : nextSlide;
      });
    }, 3000);
  };

  const handlePrevClick = () => {
    setCurrentIndex(prev => prev === 0 ? Object.keys(sponsors).length - 1 : prev - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => prev + 1 >= Object.keys(sponsors).length ? 0 : prev + 1);
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

      {/* Event Details Section */}
      <section ref={scheduleRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-6xl mx-auto">
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
      <section className="py-12 px-4 bg-white">
        <div className=" mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">Event Organizers</h2>
          <p className="text-gray-600 text-center text-sm mb-8 max-w-3xl mx-auto">
            Meet the dedicated team behind DevMeetup V3
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center shadow-lg rounded-xl p-4">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://example.com/organizer1.jpg"
                  alt="Yohannes Tesfaye"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Yohannes Tesfaye</h3>
              <p className="text-sm text-gray-600 mb-2">Lead Organizer</p>
              <p className="text-sm text-gray-500 mb-3">Full-stack developer passionate about community</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg rounded-xl p-4">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://example.com/organizer2.jpg"
                  alt="Sara Mohammed"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Sara Mohammed</h3>
              <p className="text-sm text-gray-600 mb-2">Technical Lead</p>
              <p className="text-sm text-gray-500 mb-3">AI/ML engineer focused on tech education</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg rounded-xl p-4">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://example.com/organizer3.jpg"
                  alt="Dawit Alemu"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Dawit Alemu</h3>
              <p className="text-sm text-gray-600 mb-2">Community Manager</p>
              <p className="text-sm text-gray-500 mb-3">Developer advocate & community builder</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center shadow-lg rounded-xl p-4">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src="https://example.com/organizer4.jpg"
                  alt="Helen Tadesse"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">Helen Tadesse</h3>
              <p className="text-sm text-gray-600 mb-2">Operations Lead</p>
              <p className="text-sm text-gray-500 mb-3">Event coordinator & logistics expert</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-8 lg:px-28 max-md:px-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3">Our Volunteers</h2>
          <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
            Meet our amazing volunteers helping to make this event possible
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <p className="text-xs text-gray-500 mb-2">{volunteer.description}</p>
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


<section>

  <EventSponsors/>
</section>





           
      {/* Become a Sponsor Section */}
      {/* <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="mb-8 max-w-2xl mx-auto">Support the Ethiopian developer community and showcase your brand to hundreds of passionate developers.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Brand Visibility</h3>
              <p className="text-sm">Get your brand in front of hundreds of developers and tech enthusiasts.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Talent Access</h3>
              <p className="text-sm">Connect with top tech talent for recruitment opportunities.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">Community Impact</h3>
              <p className="text-sm">Support Ethiopia's growing tech ecosystem.</p>
            </div>
          </div>
          <Link to="/sponsor-us" className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            View Packages
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default V3;
