import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SponsorCard = ({ sponsor }) => (
  <div className="min-w-[300px] max-w-[300px] bg-transparent border-2 border-gray-300 rounded-xl p-6 m-4 flex flex-col items-center 
    transition-transform duration-200 ease-in-out hover:scale-105">
    <img src={sponsor.logo} alt={sponsor.name} className="w-32 h-32 object-contain mb-4" />
    <span className={`px-3 py-1 rounded-full text-white text-sm mb-1 ${
      sponsor.level === 'Platinum' ? 'bg-indigo-600' : 
      sponsor.level === 'Silver' ? 'bg-gray-400' : 
      sponsor.level === 'Individual' ? 'bg-green-500' :
      'bg-yellow-500'
    }`}>
      {sponsor.level}
    </span>
    <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center">{sponsor.name}</h3>
    <p className="text-gray-600 text-sm text-center mb-2 line-clamp-3">
      {sponsor.description}
    </p>
    <div className="flex space-x-4 mt-auto">
      {sponsor.socials?.linkedin && (
        <a href={sponsor.socials.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 text-blue-600 hover:text-blue-800" />
        </a>
      )}
      {sponsor.socials?.instagram && (
        <a href={sponsor.socials.instagram} target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700" />
        </a>
      )}
    </div>
  </div>
);

const EventSponsors = ({sponsors}) => {
  const sponsor = [
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

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Sponsors</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="sponsor-swiper"
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <div className="sponsor-card">
                <img src={sponsor.logo} alt={sponsor.name} className="w-24 h-24 object-contain mb-4" />
                {sponsor.level && (
                  <span className={`px-3 py-1 rounded-full text-white text-sm mb-2 ${
                    sponsor.level === 'Platinum' ? 'bg-indigo-600' : 
                    sponsor.level === 'Silver' ? 'bg-gray-400' : 
                    sponsor.level === 'Individual' ? 'bg-green-500' :
                    'bg-yellow-500'
                  }`}>
                    {sponsor.level}
                  </span>
                )}
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{sponsor.name}</h3>
                <div className="flex justify-center space-x-4">
                  {sponsor.socials?.linkedin && (
                    <a href={sponsor.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {sponsor.socials?.instagram && (
                    <a href={sponsor.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventSponsors;