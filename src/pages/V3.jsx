import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaComments, FaCalendarAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { sponsors, scheduleItems, volunteerItems, keynoteSpeakers } from '../data/eventData';
import '../styles/sponsors.css';
import EventSponsors from '../components/EventSponsors';
import EventSchedule from '../components/EventSchedule';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import Volunteers from '../components/Volunteers';


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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12">
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
      

      <section>
        <EventSchedule scheduleItems={scheduleItems}/>
      </section>
  
      
   

      {/* Keynote Speakers Section */}
      <section>
        <KeynoteSpeakers speakers={keynoteSpeakers}/>
      </section>
      

      {/* Organizers Section */}
      <section className="py-12 bg-white">
        <div className=" mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3">Event Organizers</h2>
          <p className="text-gray-600 text-center text-sm mb-8 max-w-3xl mx-auto">
            Meet the dedicated team behind DevMeetup V3
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center   rounded-xl p-4">
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
            <div className="text-center   rounded-xl p-4">
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
            <div className="text-center   rounded-xl p-4">
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
            <div className="text-center   rounded-xl p-4">
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
       <section>
       <Volunteers volunteers={volunteerItems} />
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
