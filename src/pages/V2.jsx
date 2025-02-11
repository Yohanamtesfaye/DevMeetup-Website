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
import organizer from "../assets/organizers.png"
import lunch from "../assets/lunch.png"
import QA from "../assets/Q&A.png"
import EventSponsors from "../components/EventSponsors";
import KeynoteSpeakers from "../components/KeynoteSpeakers";
import EventDetails from "../components/EventDetails";
import { eventData2, keynoteSpeakers, scheduleItems, volunteers } from "../data/eventData";
import Gallery from "../components/Gallary";
import EventSchedule from "../components/EventSchedule";
import VolunteersSection from "../components/VolunteersSection";
import EventHighlights from "../components/EventHighlights";
import EventOrganizers from "../components/EventOrganizers";

const eventDetails = [
  { label: "Organizers:", value: "CodeNight & TechHub" },
  { label: "Venue:", value: "Hybrid (Online & In-person)" },
  { label: "Date:", value: "February 24, 2024" },
  { label: "Participants:", value: "200+" },
  { label: "Highlights:", value: "Keynotes, Workshops, Networking" }
]

const galleryImages= [food, disscusion, 
  ppl,guest, organizer, QA];

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
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen "
    >
      {/* Hero Section */}
     
      {/* Event Details and Gallery Section */}
      <div className=" ">
        <div className="flex flex-col">
       
          {/* Event Details Column */}
          <section>
            <EventDetails  data = {eventData2}/>
          </section>
 
        </div>
      </div>
      <section>
       <EventSchedule scheduleItems={scheduleItems}/>
      </section>
      
      <section>
        <EventHighlights/>
      </section>

     
      <KeynoteSpeakers speakers={keynoteSpeakers}/>
      
      <section className="w-full  ">  
        <EventSponsors/>
      </section>

     <section>
      <EventOrganizers/>
     </section>

      

     <section>
      <VolunteersSection volunteers={volunteers}/>
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
                <div className="bg-white rounded-xl   p-6 h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
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
    <section className="m-10">
            <Gallery galleryImages={galleryImages}/>
    </section>

    
 </> )
}

export default V2
