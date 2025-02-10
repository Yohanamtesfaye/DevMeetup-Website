import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "John Doe",
    role: "Software Developer",
    testimonial: "DevMeetup was an incredible experience! The workshops were informative and the networking opportunities were invaluable.",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Jane Smith",
    role: "Frontend Engineer",
    testimonial: "The quality of speakers and content was exceptional. I learned so much about modern web development practices.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Tech Lead",
    testimonial: "Great organization and amazing community. Looking forward to the next DevMeetup event!",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];

function Testimonials() {
  return (
    <div className="py-12 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          What Attendees Say
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white   rounded-lg overflow-hidden p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 flex-grow">{testimonial.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
