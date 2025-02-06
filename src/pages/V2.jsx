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

const eventDetails = [
  { label: "Organizers", value: "CodeNight & TechHub" },
  { label: "Sponsors", value: "ALX, SandTechnologies, Chapa, and more" },
  { label: "Venue", value: "Hybrid (Online & In-person)" },
  { label: "Date", value: "September 10-12, 2022" },
  { label: "Participants", value: "1000+" },
  { label: "Highlights", value: "Keynotes, Workshops, Hackathon" },
]

const galleryImages = [disscusion, ppl, food, guest]

const sponsors = {
  platinum: [
    { name: "ALX", logo: alx },
    { name: "SandTechnologies", logo: sand },
    { name: "Zare Innovations", logo: zare },
    { name: "Chapa", logo: chapa }
  ],
  gold: [
    { name: "Gold Sponsor 1", logo: "/placeholder-logo.png" },
    { name: "Gold Sponsor 2", logo: "/placeholder-logo.png" },
    { name: "Gold Sponsor 3", logo: "/placeholder-logo.png" }
  ],
  silver: [
    { name: "Addis Software", logo: addis },
    { name: "Gebeta Maps", logo: gebetamaps }
  ],
  individual: [
    { name: "John Doe", avatar: avatar1 },
    { name: "Jane Smith", avatar: avatar3 },
    { name: "Alex Johnson", avatar: avatar2 }
  ]
};

const organizers = [
  {
    name: "Chapi Menge",
    role: "Lead Organizer",
    image: chapi,
    description: "DevMeetup Lead Organizer"
  },
  {
    name: "Dagmawi Babi",
    role: "Co-organizer",
    image: dagi,
    description: "Technical Lead"
  },
  {
    name: "Luna Solomon",
    role: "Co-organizer",
    image: luna,
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
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500"
        >
          DevMeetup V2: Expanding Horizons
        </motion.h1>

        {/* Event Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 sm:mb-12">
          {eventDetails.map((detail, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-700 text-sm sm:text-base">{detail.label}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Sponsors Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Our Sponsors</h2>
          
          {/* Platinum Sponsors */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 p-2 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">Platinum Sponsors</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">Premium Partners</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {sponsors.platinum.map((sponsor, index) => (
                <div key={index} className="bg-gradient-to-b from-gray-50 to-white p-4 sm:p-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-16 sm:h-24 object-contain mb-4 sm:mb-6 mx-auto" />
                  <h4 className="text-lg sm:text-xl font-semibold text-center text-gray-800">{sponsor.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 p-2 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-yellow-800">Gold Sponsors</h3>
                <p className="text-xs sm:text-sm text-yellow-700 text-center">Major Contributors</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {sponsors.gold.map((sponsor, index) => (
                <div key={index} className="bg-gradient-to-b from-yellow-50 to-white p-4 sm:p-6 rounded-lg shadow-md">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-16 sm:h-20 object-contain mb-3 sm:mb-4 mx-auto" />
                  <h4 className="text-base sm:text-lg font-medium text-center text-gray-800">{sponsor.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 p-2 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-700">Silver Sponsors</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">Supporting Partners</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {sponsors.silver.map((sponsor, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                  <img src={sponsor.logo} alt={sponsor.name} className="h-12 sm:h-16 object-contain mb-2 sm:mb-3 mx-auto" />
                  <h4 className="text-sm sm:text-base font-medium text-center text-gray-800">{sponsor.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Sponsors */}
          <div>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 p-2 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-center text-blue-800">Individual Sponsors</h3>
                <p className="text-xs sm:text-sm text-blue-600 text-center">Community Supporters</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {sponsors.individual.map((sponsor, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-full shadow-md flex items-center space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm sm:text-base">{sponsor.name.charAt(0)}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Organizers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{organizer.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2">{organizer.role}</p>
                <p className="text-xs sm:text-sm text-gray-500">{organizer.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteers Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Volunteers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {volunteers.map((team, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{team.team}</h3>
                <div className="grid gap-3 sm:gap-4">
                  {team.members.map((member, mIndex) => (
                    <div key={mIndex} className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-sm sm:text-base">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-medium">{member.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{member.role}</p>
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

        {/* Gallery Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default V2
