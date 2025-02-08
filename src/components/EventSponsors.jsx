import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';
const SponsorCard = ({ sponsor }) => (
  <div className="min-w-[300px] max-w-[300px] bg-white shadow-lg rounded-xl p-6 m-4 flex flex-col items-center 
    transition-transform duration-200 ease-in-out hover:scale-105 overflow-hidden">
    <img src={sponsor.logo} alt={sponsor.name} className="w-32 h-32 object-contain mb-4" /> {/* Increased size */}

    <span className={`px-3 py-1 rounded-full text-white text-sm mb-1 ${
      sponsor.level === 'Gold' ? 'bg-yellow-500' : sponsor.level === 'Silver' ? 'bg-gray-400' : 'bg-purple-500'
    }`}>
      {sponsor.level}
    </span>

    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{sponsor.name}</h3>

    <p className="text-gray-600 text-sm text-center mb-2 line-clamp-3">
      {sponsor.description}
    </p>


    <div className="flex space-x-4 mt-auto">
      <a href={sponsor.socials.linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
      </a>
      <a href={sponsor.socials.instagram} target="_blank" rel="noopener noreferrer">
        <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700" />
      </a>
    </div>
  </div>
);


const EventSponsors = () => {
  const sponsors = [
    {
      name: "ALX-Ethiopia",
      logo: "src/assets/alx.jpg",
      level: "Gold",
      description: "Leading IT training in Ethiopia.",
      socials: {
        linkedin: "https://www.linkedin.com/company/alx-ethiopia",
        instagram: "https://www.instagram.com/alx_ethiopia"
      }
    },

    
    {
      name: "Horan Tech",
      logo: "src/assets/horan.jpg",
      level: "Silver",
      description: "Innovative tech solutions for modern businesses.",
      socials: {
        linkedin: "https://www.linkedin.com/company/horan-tech",
        instagram: "https://www.instagram.com/horan_tech"
      }
    },
    {
      name: "SAND Technologies",
      logo: "src/assets/sand.jpg",
      level: "Bronze",
      description: "Pioneering technology solutions for sustainable development.",
      socials: {
        linkedin: "https://www.linkedin.com/company/sand-technologies",
        instagram: "https://www.instagram.com/sand_technologies"
      }
    },
  ];

  const scrollRef = useRef(null);
  const [position, setPosition] = useState(0);
  const speed = 0.5;

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer) {
        setPosition(prevPosition => {
          const newPosition = prevPosition - speed;
          const totalWidth = scrollContainer.scrollWidth;
          
          // Reset position for seamless loop
          if (Math.abs(newPosition) >= totalWidth / 2) {
            return 0;
          }
          return newPosition;
        });
      }
      requestAnimationFrame(scroll);
    };

    scroll(); // Start scrolling

    return () => cancelAnimationFrame(scroll); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">Event Sponsors</h2>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap transition-transform duration-300 ease-linear"
          style={{ transform: `translateX(${position}px)` }} // Apply dynamic position
        >
          {/* Duplicate sponsors for infinite loop */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <SponsorCard key={index} sponsor={sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSponsors;
