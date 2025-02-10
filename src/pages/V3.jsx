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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-white to-gray-50"
    >
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute w-64 h-64 bg-blue-50/50 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gray-50/50 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [100, -100, 100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-gray-800 mb-8"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DevMeetup V3
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join us for the biggest developer event in Ethiopia
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={handleRegisterClick}
              className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Register Now
            </button>
            <button
              onClick={handleChatClick}
              className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Join Chat
            </button>
          </motion.div>
        </div>
      </div>

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
       
 

 
    </motion.div>
  );
};

export default V3;