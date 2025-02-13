import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaComments, FaCalendarAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { sponsors, scheduleItems, volunteerItems, keynoteSpeakers, volunteers, volunteersV3 } from '../data/eventData';
import '../styles/sponsors.css';
import EventSponsors from '../components/EventSponsors';
import EventSchedule from '../components/EventSchedule';
import KeynoteSpeakers from '../components/KeynoteSpeakers';
import VolunteersSection from '../components/VolunteersSection';
import EventOrganizers from '../components/EventOrganizers';
import { Facebook, Github, Instagram, Twitter, Linkedin, Youtube, Slack, Dribbble } from 'lucide-react';
import CountdownTimer from '../components/TimeCounter';

import img1 from '../assets/pic/573A3634.jpg';
import img2 from '../assets/pic/573A3644.jpg';
import img3 from '../assets/pic/573A3682.jpg';
import img4 from '../assets/pic/photo_2024-04-15_07-35-56.jpg';
import img5 from '../assets/pic/573A3724.jpg';
import img6 from '../assets/pic/573A3643.JPG.jpg';
import img7 from '../assets/pic/573A3735.jpg';
import img8 from '../assets/pic/photo_2025-02-12_00-20-25.jpg';
import img9 from '../assets/pic/photo_2024-04-14_19-10-34.jpg';
import img10 from '../assets/pic/photo_2025-02-10_15-11-04.jpg';
import img11 from '../assets/pic/photo_2025-02-10_15-11-11.jpg';
import img12 from '../assets/pic/photo_2025-02-12_00-19-44.jpg';
import img13 from '../assets/pic/photo_2025-02-12_00-20-46.jpg';
import img14 from '../assets/pic/photo_2025-02-12_00-22-27.jpg';
import img15 from '../assets/pic/photo_2025-02-12_00-22-49.jpg';

import logo1 from '../assets/alx.jpg';
import logo2 from '../assets/addis.jpg';
import logo3 from '../assets/sand.jpg';
import logo4 from '../assets/horan.jpg';
import logo5 from '../assets/convex-logo.png';
import logo6 from '../assets/chapa.jpg';

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
];

const sponsorLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6
];

const V3 = () => {
  const sponsors = [
    {
      name: "ALX-Ethiopia",
      logo: logo1,
      level: "Platinum",
      description: "Leading IT training in Ethiopia.",
      socials: {
        linkedin: "https://www.linkedin.com/company/alx-ethiopia",
        instagram: "https://www.instagram.com/alx_ethiopia"
      }
    },
    {
      name: "SAND Technologies",
      logo: logo3,
      level: "Platinum",
      description: "Pioneering technology solutions for sustainable development.",
      socials: {
        linkedin: "https://www.linkedin.com/company/sand-technologies",
        instagram: "https://www.instagram.com/sand_technologies"
      }
    },
    {
      name: "ICE Addis",
      logo: "/src/assets/iceaddis.jpg-removebg-preview.png",
      level: "Platinum",
      description: "Innovation hub fostering tech entrepreneurship.",
      socials: {
        linkedin: "https://www.linkedin.com/company/iceaddis",
        instagram: "https://www.instagram.com/iceaddis"
      }
    },
    {
      name: "Chapa",
      logo: logo6,
      level: "Platinum",
      description: "Leading payment solutions provider in Ethiopia.",
      socials: {
        linkedin: "https://www.linkedin.com/company/chapa",
        instagram: "https://www.instagram.com/chapa"
      }
    },
    {
      name: "Convex",
      logo: logo5,
      level: "Platinum",
      description: "Innovative tech solutions provider.",
      socials: {
        linkedin: "https://www.linkedin.com/company/convex",
        instagram: "https://www.instagram.com/convex"
      }
    },
    {
      name: "Horan Tech",
      logo: logo4,
      level: "Silver",
      description: "Innovative tech solutions for modern businesses.",
      socials: {
        linkedin: "https://www.linkedin.com/company/horan-tech",
        instagram: "https://www.instagram.com/horan_tech"
      }
    },
    {
      name: "Dagmawi Babi",
      logo: "/src/assets/dagi.jpg",
      level: "Individual",
      description: "Individual Sponsor",
      socials: {
        linkedin: "https://www.linkedin.com/in/dagmawi-babi",
        instagram: "https://www.instagram.com/dagmawi.babi"
      }
    }
  ];

  const navigate = useNavigate();
  const scheduleRef = useRef(null);
  const sponsorsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleSponser = () => {
    navigate('/sponser-us');
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white pb-12 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col md:h-screen md:grid md:grid-cols-2 border-y-2 shadow-lg border-white py-4">
        <div className="mx-auto md:px-4 flex md:flex-col z-10 md:ml-12 md:justify-between" style={{ height: '70%' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative min-h-[400px]">
            <div className="mx-auto px-4 p relative z-10">
              <motion.h1
                className="text-5xl md:text-6xl text-indigo-600 font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  type: "spring",
                  stiffness: 50,
                }}
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Dev Meetup V3
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 md:text-xl text-center mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ fontFamily: "'Roboto Mono', monospace" }}
              >
                Time to meet Codenighters you have been seeking out for long
              </motion.p>

              {/* Countdown Timer */}
              <motion.div
                className="flex justify-center space-x-4 mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
               <CountdownTimer />
              </motion.div>

              <motion.div
                className="flex justify-center space-x-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link to="/register">
                  <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Register Now
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="relative hidden md:flex flex-col h-full" style={{ height: '70%' }}>
          <div className="first-row flex-grow flex items-center justify-center">
            <div className="right-trapezoid">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`right-trapezoid-inner ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="w-full lg:mt-24 mt-9 md:mt-6 md:absolute md:top-95 ">
        <h2 className="text-xl font-bold text-gray-800 ml-5 md:ml-10 mb-4">POWERED BY</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap justify-center md:justify-start gap-4 px-4 w-full max-w-screen-xl mx-auto">
          {sponsorLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className={`h-10 md:h-16 w-32 object-contain ${index === 5 ? 'md:ml-8' : ''}`}
            />
          ))}
        </div>
      </section>

      {/* Event Details Section */}
      <section className='mt-16'>
        <div ref={scheduleRef}>
          <EventSchedule scheduleItems={scheduleItems} />
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section>
        <KeynoteSpeakers speakers={keynoteSpeakers} />
      </section>

      {/* Sponsors Section */}
      <section className="w-full">
        <div ref={sponsorsRef}>
          <EventSponsors sponsors={sponsors} />
        </div>
      </section>

      {/* Organizers Section */}
      <section>
        <EventOrganizers />
      </section>

      {/* Volunteers Section */}
      <section className='bg-white'>
        <VolunteersSection volunteers={volunteersV3} />
      </section>
    </div>
  );
};

export default V3;