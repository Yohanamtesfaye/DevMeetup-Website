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
import { eventData1, keynoteSpeakers, scheduleItems, volunteers } from "../data/eventData"
import EventSchedule from "../components/EventSchedule"
import VolunteersSection from "../components/VolunteersSection"
import Gallery from "../components/Gallary"
import EventOrganizers from "../components/EventOrganizers"
import EventHighlights from "../components/EventHighlights"

const eventDetails = [
  { label: "Organizers", value: "CodeNight" },
  // { label: "Sponsors", value: "Vercel, GitHub" },
  { label: "Venue", value: "Online" },
  { label: "Date", value: "May 15-16, 2022" },
  { label: "Participants", value: "500+" },
  { label: "Highlights", value: "Talks, Workshops, Networking" },
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
const galleryImages= [food, disscusion, 
  ppl,guest, organizer, QA];


function V1() {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white "
    >
      <div className="">

        <div className="flex flex-col">
        <section>
            <EventDetails  data = {eventData1}/>
          </section>
          <section>
            <EventSchedule scheduleItems={scheduleItems}/>
          </section>
         
        </div>
        <EventHighlights/>

        <KeynoteSpeakers speakers={keynoteSpeakers}/>

        
        <section className="w-full  ">
       <EventSponsors/>


        </section>

        {/* Organizers Section */}
        <section>
          <EventOrganizers/>
        </section>
       

        {/* Volunteers Section */}
       
       <section>
<VolunteersSection volunteers={volunteers}/>
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