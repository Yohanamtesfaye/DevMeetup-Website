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

const images = [
  "src/assets/pic/573A3634.jpg",
  "src/assets/pic/573A3644.jpg",
  "src/assets/pic/573A3682.jpg",
  "src/assets/pic/photo_2024-04-15_07-35-56.jpg",
  "src/assets/pic/573A3724.jpg",
  "src/assets/pic/573A3643.JPG.jpg",
  "src/assets/pic/573A3735.jpg",
  "src/assets/pic/photo_2025-02-12_00-20-25.jpg",
  "src/assets/pic/photo_2024-04-14_19-10-34.jpg",
  "src/assets/pic/photo_2025-02-10_15-11-04.jpg",
  "src/assets/pic/photo_2025-02-10_15-11-11.jpg",
  "src/assets/pic/photo_2025-02-12_00-19-44.jpg",
  "src/assets/pic/photo_2025-02-12_00-20-46.jpg",
  "src/assets/pic/photo_2025-02-12_00-22-27.jpg",
  "src/assets/pic/photo_2025-02-12_00-22-49.jpg"
];

const sponsorLogos = [
  "src/assets/alx.jpg",
  "src/assets/addis.jpg",
  "src/assets/sand.jpg",
  "src/assets/horan.jpg",
  "src/assets/convex-logo.png",
  "src/assets/chapa.jpg"
];

const V3 = () => {
  const sponsors = [
    {
      name: "ALX-Ethiopia",
      logo: "/src/assets/alx.jpg",
      level: "Platinum",
      description: "Leading IT training in Ethiopia.",
      socials: {
        linkedin: "https://www.linkedin.com/company/alx-ethiopia",
        instagram: "https://www.instagram.com/alx_ethiopia"
      }
    },
    {
      name: "SAND Technologies",
      logo: "/src/assets/sand.jpg",
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
      logo: "/src/assets/chapa.jpg",
      level: "Platinum",
      description: "Leading payment solutions provider in Ethiopia.",
      socials: {
        linkedin: "https://www.linkedin.com/company/chapa",
        instagram: "https://www.instagram.com/chapa"
      }
    },
    {
      name: "Convex",
      logo: "/src/assets/convex-logo.png",
      level: "Platinum",
      description: "Innovative tech solutions provider.",
      socials: {
        linkedin: "https://www.linkedin.com/company/convex",
        instagram: "https://www.instagram.com/convex"
      }
    },
    {
      name: "Horan Tech",
      logo: "/src/assets/horan.jpg",
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
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  bg-white pb-12">

      {/* Hero Section */}
      <section className="relative flex flex-col md:h-screen md:grid md:grid-cols-2 border-y-2 shadow-lg border-white py-4">
        <div className=" mx-auto md:px-4 flex md:flex-col z-10 md:ml-12 md:justify-between" style={{ height: '70%' }}>
          <div>
            <div className="text-center mt-6">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4 " >
                Dev Meetup V3
              </h1>
              <p className="text-2xl md:text-4xl md:ml-8 absolute z-10 text-gray-700 mb-4" style={{ fontFamily: "'Caveat', cursive" }}>
              Time to meet Codenighters you have been <br /> seeking out for long
              </p>
              <div className="flex flex-row gap-6 justify-center">
              <button
                  onClick={handleRegisterClick}
                  className="bg-gray-800 text-white mt-20 md:mt-28 px-4 py-2 font-semibold hover:bg-gray-700 transition-all mb-6"
                >
                  Register Now
                </button>

                {/* <button
                  onClick={handleSponser}
                  className="bg-gray-800 text-white mt-28 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all mb-6"
                >
                  Support US
                </button> */}
                
              </div>
            </div>
            
          </div>
        </div>
        <div className="relative hidden md:flex flex-col h-full" style={{ height: '70%' }}>
          <div className="first-row flex-grow flex items-center  justify-center">
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
         {/* Sponsors Section */}
      <section className="w-full mt-9 md:mt-6 md:top-95 md:absolute " >
        <h2 className="text-xl  font-bold md:ml-10 text-gray-800 ml-5 mb-4">POWERED BY</h2>
        <div className="grid grid-cols-3 px-4 md:flex md:flex-wrap justify-center md:justify-start gap-4 w-full">
          {sponsorLogos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Sponsor ${index + 1}`} 
              className={`h-10 md:h-20 w-20 md:w-40 object-contain ${index === 5 ? 'ml-8' : ''}`} 
            />
          ))}
        </div>
      </section>
      </section>

     

      {/* Event Details Section */}
      <section>
        <div ref={scheduleRef}>
          <EventSchedule scheduleItems={scheduleItems} />
        </div>
      </section>
  
      {/* Keynote Speakers Section */}
      <section>
        <KeynoteSpeakers speakers={keynoteSpeakers} />
      </section>

      {/* Sponsors Section */}
      <section className='w-full'>
        <div ref={sponsorsRef}>
          <EventSponsors sponsors={sponsors} />
        </div>
      </section>

      {/* Organizers Section */}
      <section>
        <EventOrganizers />
      </section>

      {/* Volunteers Section */}
      <section>
        <VolunteersSection volunteers={volunteersV3} />
      </section>
    </div>
  );
};

export default V3;