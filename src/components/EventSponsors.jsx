import React, { useEffect, useRef } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const SponsorCard = ({ sponsor }) => (
  <div className="min-w-[250px] max-w-[250px] bg-white shadow-lg rounded-xl p-4 m-2 flex flex-col items-center 
    transition-transform duration-200 ease-in-out hover:scale-105 overflow-hidden">
    <img src={sponsor.logo} alt={sponsor.name} className="w-20 h-20 object-contain mb-2" />

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

const EventSponsors = ({ sponsors }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let position = 0;
    const speed = 0.5; // Adjust speed as needed

    const scroll = () => {
      if (scrollContainer) {
        position -= speed;
        scrollContainer.style.transform = `translateX(${position}px)`;

        // Reset position for seamless loop
        const totalWidth = scrollContainer.scrollWidth / 2;
        if (Math.abs(position) >= totalWidth) {
          position = 0;
        }
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
