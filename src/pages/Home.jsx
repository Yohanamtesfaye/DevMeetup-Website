import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Testimonials from "../components/Testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper.css";
import platinumBadge from "../assets/platinum-badge.svg";
import goldBadge from "../assets/gold-badge.svg";
import silverBadge from "../assets/silver-badge.svg";
import sand from "../assets/sand.jpg";
import chapa from "../assets/chapa.jpg";
import addis from "../assets/addis.jpg";
import gebetamaps from "../assets/gebetamaps.jpg";
import EventSponsors from "../components/EventSponsors";


  

const highlights = [
  { title: "Expert Speakers", description: "Learn from industry leaders and innovators", icon: "🎤" },
  { title: "Hands-on Workshops", description: "Get practical experience with cutting-edge technologies", icon: "💻" },
  {
    title: "Networking Opportunities",
    description: "Connect with like-minded developers and potential employers",
    icon: "🤝",
  },
  {
    title: "Tech Showcase",
    description: "Explore the latest tools and technologies in our exhibition area",
    icon: "🚀",
  },
  { title: "Career Fair", description: "Meet top tech companies and explore job opportunities", icon: "💼" },
];



function Home() {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="">
      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative   -xl sm:rounded-2xl sm: ">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">DevMeetup V3</span>
                  <span className="block text-indigo-200">Join the Developer Community</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Connect with fellow developers, learn from industry experts, and stay up-to-date with the latest
                  technologies.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link
                      to="/register"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md   -sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8 transition duration-300 ease-in-out"
                    >
                      Register for V3
                    </Link>
                    <Link
                      to="/v3"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md   -sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 transition duration-300 ease-in-out"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Highlights */}
        <motion.section
          className="bg-gradient-to-b lg:px-16 from-gray-50 to-white py-16 sm:py-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">Event Highlights</h2>
              <p className="mt-4 text-xl text-gray-500">Experience the best of DevMeetup V3</p>
            </motion.div>
            <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white    rounded-lg hover:  -xl transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="px-6 py-8">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-base text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* Sponsors Section */}
        <section className="w-full  ">
        <EventSponsors/>

        </section>

        {/* Call to Action */}
        <motion.section
          className="bg-gradient-to-r from-indigo-600 to-indigo-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block mt-2">Join DevMeetup V3 today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-100">
              Don't miss this opportunity to be part of the most exciting developer event of the year!
            </p>
            <motion.div className="mt-8 flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition duration-300 ease-in-out"
              >
                Register Now
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </motion.div>
  );
}

export default Home;