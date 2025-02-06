import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';
import chapi from "../assets/chapi.jpg"
import dagi from "../assets/dagi.jpeg"
import luna from "../assets/luna.jpg"
import disscusion from "../assets/disscusion.jpg"
import ppl from "../assets/ppl.jpg"
import food from "../assets/food.jpg"
import guest from "../assets/guest.jpg"
import alx from "../assets/alx.jpg"
import sand from "../assets/sand.jpg"
import zare from "../assets/zare.jpg"
import chapa from "../assets/chapa.jpg"
import addis from "../assets/addis.jpg"
import gebetamaps from "../assets/gebetamaps.jpg"
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"
import platinumBadge from "../assets/platinum-badge.svg"
import goldBadge from "../assets/gold-badge.svg"
import silverBadge from "../assets/silver-badge.svg"

const eventDetails = [
  { label: "Organizers:", value: "CodeNight & TechHub" },
  { label: "Sponsors:", value: "Vercel, GitHub, MongoDB" },
  { label: "Venue:", value: "Hybrid (Online & In-person)" },
  { label: "Date:", value: "February 24, 2024" },
  { label: "Participants:", value: "200+" },
  { label: "Highlights:", value: "Keynotes, Workshops, Networking" }
]

const galleryImages = [disscusion, ppl, food, guest]

const platinumSponsors = [
  { 
    name: "ALX", 
    logo: alx, 
    description: "Leading tech education platform empowering the next generation of African tech talent."
  },
  { 
    name: "SandTechnologies", 
    logo: sand, 
    description: "Innovative software solutions provider specializing in enterprise applications."
  },
  { 
    name: "Chapa", 
    logo: chapa, 
    description: "Ethiopia's premier digital payment gateway revolutionizing financial transactions."
  }
]

const goldSponsors = [
  { name: "Gold Sponsor 1", logo: "/placeholder-logo.png" },
  { name: "Gold Sponsor 2", logo: "/placeholder-logo.png" },
  { name: "Gold Sponsor 3", logo: "/placeholder-logo.png" }
]

const silverSponsors = [
  { name: "Addis Software", logo: addis },
  { name: "Gebeta Maps", logo: gebetamaps }
]

const organizers = [
  {
    name: "Chapi Menge",
    role: "Lead Organizer",
    avatar: chapi,
    description: "DevMeetup Lead Organizer"
  },
  {
    name: "Dagmawi Babi",
    role: "Co-organizer",
    avatar: dagi,
    description: "Technical Lead"
  },
  {
    name: "Luna Solomon",
    role: "Co-organizer",
    avatar: luna,
    description: "Community Manager"
  }
];

const volunteers = [
  {
    team: "Technical Team",
    members: [
      { name: "John Doe", role: "Technical Support" },
      { name: "Jane Smith", role: "Workshop Assistant" }
    ]
  },
  {
    team: "Event Management",
    members: [
      { name: "Alex Johnson", role: "Registration" },
      { name: "Sarah Williams", role: "Venue Coordination" }
    ]
  }
];

const testimonials = [
  {
    name: "Michael Ethiopian",
    role: "Software Developer",
    image: avatar1,
    content: "DevMeetup V2 was an incredible experience! The workshops were informative and the networking opportunities were invaluable. Looking forward to V3!"
  },
  {
    name: "Sara Tekle",
    role: "UI/UX Designer",
    image: avatar2,
    content: "The hybrid format made it accessible for everyone. The quality of speakers and content was outstanding. Great job by the organizing team!"
  },
  {
    name: "Abebe Kebede",
    role: "Tech Lead",
    image: avatar3,
    content: "Amazing community and organization. The hackathon was particularly exciting, and I met so many talented developers!"
  },
  {
    name: "Helen Alemu",
    role: "Product Manager",
    image: avatar1,
    content: "Fantastic event! The mix of technical and soft skills sessions was perfect. Can't wait for the next edition!"
  }
];

function V2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#fefaff] pt-8 pb-16"
    >
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-16"
      >
        DevMeetup V2: Expanding Horizons
      </motion.h1>

      {/* Event Details and Gallery Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details Column */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-8">Event Details</h2>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="space-y-6">
                {eventDetails.map((detail, index) => (
                  <div key={index} className="flex border-b border-gray-100 pb-4">
                    <span className="text-purple-600 font-medium w-32">{detail.label}</span>
                    <span className="text-gray-600">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Column */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-8">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 4).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 pt-16">
        <h2 className="text-2xl font-semibold text-purple-600 mb-16 text-center">Our Sponsors</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Platinum Sponsors */}
          <div className="lg:pr-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-8">Platinum Sponsors</h2>
            <div className="bg-white rounded-2xl shadow-md p-4 h-[200px] flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {platinumSponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center p-2">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="max-h-16 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="lg:pl-6">
            <h2 className="text-2xl font-semibold text-purple-600 mb-8">Gold Sponsors</h2>
            <div className="bg-white rounded-2xl shadow-md p-4 h-[200px] flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                {goldSponsors.map((sponsor, index) => (
                  <div key={index} className="flex items-center justify-center p-2">
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="max-h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-purple-600 mb-8 text-center">Silver Sponsors</h2>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="grid grid-cols-3 gap-4">
              {silverSponsors.map((sponsor, index) => (
                <div key={index} className="flex items-center justify-center p-2">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Organizers Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-purple-600 mb-8 text-center">Meet Our Organizers</h2>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-center gap-5">
                  <img
                    src={organizer.avatar}
                    alt={organizer.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{organizer.name}</h3>
                    <p className="text-gray-500">{organizer.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{organizer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Volunteers</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {volunteers.map((team, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">{team.team}</h3>
              <div className="grid gap-2">
                {team.members.map((member, mIndex) => (
                  <div key={mIndex} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-600 font-medium text-sm">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{member.name}</h4>
                      <p className="text-xs text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">What People Say</h2>
        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper !pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-button-next !text-gray-800 after:!text-2xl"></div>
            <div className="swiper-button-prev !text-gray-800 after:!text-2xl"></div>
          </Swiper>
        </div>
      </section>
    </motion.div>
  )
}

export default V2
