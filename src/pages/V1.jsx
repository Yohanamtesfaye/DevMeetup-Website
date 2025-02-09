import { motion } from "framer-motion"
import disscusion from "../assets/disscusion.jpg"
import ppl from "../assets/ppl.jpg"
import food from "../assets/food.jpg"
import guest from "../assets/guest.jpg"
import alx from "../assets/alx.jpg"
import sand from "../assets/sand.jpg"

import chapa from "../assets/chapa.jpg"
import addis from "../assets/addis.jpg"
import gebetamaps from "../assets/gebetamaps.jpg"
import avatar1 from "../assets/avatar1.jpg"
import avatar2 from "../assets/avatar2.jpg"
import avatar3 from "../assets/avatar3.jpg"
import organizer from "../assets/organizers.png"

import QA from "../assets/Q&A.png"
import dagi from "../assets/dagi.jpeg"
import chapi from "../assets/chapi.jpg"
import luna from "../assets/luna.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/swiper.css';
import EventSponsors from "../components/EventSponsors"
import KeynoteSpeakers from "../components/KeynoteSpeakers"
import EventDetails from "../components/EventDetails";
import { eventData, keynoteSpeakers, scheduleItems, volunteerItems } from "../data/eventData"
import EventSchedule from "../components/EventSchedule"
import Volunteers from "../components/Volunteers"
import Gallery from "../components/Gallary"

const eventDetails = [
  { label: "Organizers", value: "CodeNight" },
  // { label: "Sponsors", value: "Vercel, GitHub" },
  { label: "Venue", value: "Online" },
  { label: "Date", value: "May 15-16, 2022" },
  { label: "Participants", value: "500+" },
  { label: "Highlights", value: "Talks, Workshops, Networking" },
]

// const galleryImages = [disscusion, ppl, food, guest]

// const platinumSponsors = [
//   { 
//     name: "ALX", 
//     logo: alx,
//     description: "Leading tech education platform empowering the next generation of African tech talent.",
//     website: "https://www.alxafrica.com/",
//     badge: platinumBadge
//   },
//   { 
//     name: "SandTechnologies", 
//     logo: sand,
//     description: "Innovative software solutions provider specializing in enterprise applications.",
//     website: "https://www.sandtechnologies.com/",
//     badge: platinumBadge
//   },
//   { 
//     name: "Chapa", 
//     logo: chapa,
//     description: "Ethiopia's premier digital payment gateway revolutionizing financial transactions.",
//     website: "https://chapa.co/",
//     badge: platinumBadge
//   },
//   { 
//     name: "Addis Software", 
//     logo: addis,
//     description: "Leading software development company in Ethiopia",
//     website: "https://addissoftware.com/",
//     badge: silverBadge
//   },
//   { 
//     name: "Gebeta Maps", 
//     logo: gebetamaps,
//     description: "Ethiopia's digital mapping solution",
//     website: "https://gebeta.app/",
//     badge: silverBadge
//   }
// ];

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
const galleryImages= [food, disscusion, 
  ppl,guest, organizer, QA];

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
]

function V1() {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
    >
      <div className="container mx-auto lg:px-10 px-4 sm:px-6 ">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-600"
        >
          DevMeetup V1: The Beginning
        </motion.h1>

        <div className="flex flex-col">
        <section>
            <EventDetails  data = {eventData}/>
          </section>
          <section>
            <EventSchedule scheduleItems={scheduleItems}/>
          </section>
          {/* <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Event Details</h2>
            <ul className="space-y-4 bg-white   rounded-lg overflow-hidden">
              {eventDetails.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex py-4 px-6 border-b border-gray-200 last:border-b-0 hover:bg-indigo-50 transition-colors duration-200"
                >
                  <span className="font-bold w-32 text-indigo-600">{detail.label}:</span>
                  <span className="text-gray-700">{detail.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-lg   -md hover:  transition-   duration-300"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`V1 Image ${index + 1}`}
                    className="object-cover h-48 w-full"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>

        {/* Event Highlights Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-7xl mx-auto mb-16 pt-24"
        >
          <h2 className="text-2xl font-semibold mb-12 text-center text-indigo-500">Event Highlights</h2>
          <div className="bg-white   rounded-lg overflow-hidden">
            {[
              {
                title: "Keynote Speakers",
                description:
                  "Our inaugural event featured talks from industry leaders in web development, cloud computing, and AI.",
              },
              {
                title: "Interactive Workshops",
                description:
                  "Participants got hands-on experience with the latest technologies through our series of workshops.",
              },
              {
                title: "Networking Sessions",
                description:
                  "Despite being online, we facilitated valuable connections through our virtual networking platform.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border-b border-gray-200 last:border-b-0 hover:bg-indigo-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-indigo-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <br />
        <br />
        <KeynoteSpeakers speakers={keynoteSpeakers}/>

        {/* Sponsors Section
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-12 text-center">Our Sponsors</h2>
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
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
              className="sponsors-swiper !pb-14"
            >
              {platinumSponsors.map((sponsor, index) => (
                <SwiperSlide key={index}>
                  <a 
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="bg-white rounded-xl   p-6 h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
                      <div className="relative">
                        <img 
                          src={sponsor.badge} 
                          alt={`${sponsor.name} badge`}
                          className="absolute -top-2 -right-2 w-8 h-8"
                        />
                      </div>
                      <div className="flex items-center justify-center mb-4 h-24">
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="max-h-full max-w-[80%] object-contain"
                        />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800 mb-2">{sponsor.name}</h4>
                        <p className="text-gray-600 text-sm">{sponsor.description}</p>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section> */}

        <section>
       <EventSponsors/>


        </section>

        {/* Organizers Section */}
        <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-8 text-center text-indigo-600"
          >
            Meet Our Organizers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl   p-6 transform transition-all duration-300 hover:-translate-y-1 hover:  -xl"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={organizer.avatar}
                    alt={organizer.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-100"
                  />
                  <h3 className="text-xl font-semibold text-indigo-600 mb-1">{organizer.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{organizer.role}</p>
                  <p className="text-gray-500 text-center">{organizer.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Volunteers Section */}
       
       <section>
        <Volunteers volunteers={volunteerItems}/>
       </section>
        {/* Testimonials Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">What People Say</h2>
          <div className="max-w-7xl mx-auto px-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="testimonials-swiper"
            >
              {[
                {
                  name: "Sara Tekle",
                  role: "UI/UX Designer",
                  image: avatar1,
                  quote: "The hybrid format made it accessible for everyone. The quality of speakers and content was outstanding. Great job by the organizing team!",
                },
                {
                  name: "Abebe Kebede",
                  role: "Tech Lead",
                  image: avatar2,
                  quote: "Amazing community and organization. The hackathon was particularly exciting, and I met so many talented developers!",
                },
                {
                  name: "Helen Alemu",
                  role: "Product Manager",
                  image: avatar3,
                  quote: "Fantastic event! The mix of technical and soft skills sessions was perfect. Can't wait for the next edition!",
                },
                {
                  name: "Yohannes Tefera",
                  role: "Software Architect",
                  image: avatar1,
                  quote: "The workshops were incredibly practical. The networking opportunities were invaluable for my career growth.",
                },
              ].map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-2xl   p-8 min-h-[280px] relative">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </motion.div>
    <section>
      <Gallery galleryImages={galleryImages}/>
    </section>
 </> )
}

export default V1