import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaComments, FaCalendarAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { sponsors, scheduleItems, volunteerItems, keynoteSpeakers, volunteers } from '../data/eventData';
import '../styles/sponsors.css';
import EventSponsors from '../components/EventSponsors';
import EventSchedule from '../components/EventSchedule';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import VolunteersSection from '../components/VolunteersSection';
import EventOrganizers from '../components/EventOrganizers';


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
      }, 1500); // Changed from 3000 to 1500 for faster slides
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
    }, 1500);
  };

  const handlePrevClick = () => {
    setCurrentIndex(prev => prev === 0 ? Object.keys(sponsors).length - 1 : prev - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => prev + 1 >= Object.keys(sponsors).length ? 0 : prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pb-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-8">
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
          <div className="space-y-6 text-center">
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
        <div ref={scheduleRef}>
          <EventSchedule scheduleItems={scheduleItems}/>
        </div>
      </section>
  
      
   

      {/* Keynote Speakers Section */}
      <section>
        <KeynoteSpeakers speakers={keynoteSpeakers}/>
      </section>


<section className='w-full overflow-hidden'>

<div ref={sponsorsRef}>
  <EventSponsors/>
</div>

</section>


{/* Organizers Section */}
<div>
      {/* Other sections */}
      
     <EventOrganizers/>

      {/* Other sections */}
    </div>


 
    

       {/* Volunteers Section */}
       <section>
      <VolunteersSection volunteers={volunteers}/>
       </section>
       
 

 
    </div>
  );
};

export default V3;