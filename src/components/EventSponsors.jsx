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
      sponsor.level === 'Gold' ? 'bg-yellow-500' : 
      sponsor.level === 'Silver' ? 'bg-gray-400' : 
      'bg-purple-500'
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

const EventSponsors = () => {
  const sponsors = [
    {
      name: "ALX-Ethiopia",
      logo: "/src/assets/alx.jpg",
      level: "Gold",
      description: "Leading IT training in Ethiopia.",
      socials: {
        linkedin: "https://www.linkedin.com/company/alx-ethiopia",
        instagram: "https://www.instagram.com/alx_ethiopia"
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
      name: "SAND Technologies",
      logo: "/src/assets/sand.jpg",
      level: "Bronze",
      description: "Pioneering technology solutions for sustainable development.",
      socials: {
        linkedin: "https://www.linkedin.com/company/sand-technologies",
        instagram: "https://www.instagram.com/sand_technologies"
      }
    }
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-purple-600 to-purple-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Sponsors</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="sponsor-swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {sponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <SponsorCard sponsor={sponsor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventSponsors;