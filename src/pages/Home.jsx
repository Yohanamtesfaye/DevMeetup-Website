import {useState} from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import Testimonials from "../components/Testimonials"
import { useEffect } from "react"

const sponsors = [
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png",
    tier: "platinum",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png",
    tier: "platinum",
  },
  {
    name: "GitHub",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    tier: "gold",
  },
  {
    name: "MongoDB",
    logo: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    tier: "gold",
  },
  {
    name: "Tailwind CSS",
    logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg",
    tier: "silver",
  },
]

const tierStyles = {
  platinum: "bg-gradient-to-r from-slate-300 to-slate-100 text-slate-800",
  gold: "bg-gradient-to-r from-amber-300 to-amber-100 text-amber-800",
  silver: "bg-gradient-to-r from-gray-300 to-gray-100 text-gray-800",
}

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
]
const SLIDE_DURATION = 3000 // 3 seconds per slide
const SPONSORS_PER_SLIDE = 4

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = Math.ceil(sponsors.length / SPONSORS_PER_SLIDE)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [totalSlides])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      <main>
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
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
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8 transition duration-300 ease-in-out"
                    >
                      Register for V3
                    </Link>
                    <Link
                      to="/v3"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 transition duration-300 ease-in-out"
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
          className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24"
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
                  className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
        <Testimonials />

        {/* Sponsors Section */}
        <motion.section
          className="bg-indigo-50 py-16 sm:py-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

    <section className="bg-indigo-50 py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-indigo-600 text-center mb-12">Our Sponsors</h2>

        <div className="relative h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-2 gap-8">
                {sponsors
                  .slice(currentSlide * SPONSORS_PER_SLIDE, currentSlide * SPONSORS_PER_SLIDE + SPONSORS_PER_SLIDE)
                  .map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md relative hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize ${tierStyles[sponsor.tier]}`}
                        >
                          {sponsor.tier}
                        </span>
                      </div>
                      <img
                        className="h-12 object-contain mb-4"
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={`${sponsor.name} - ${sponsor.tier} sponsor`}
                      />
                      <span className="text-sm text-gray-600 font-medium">{sponsor.name}</span>
                    </div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-indigo-600" : "bg-indigo-200"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>





        </motion.section>

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
  )
}

export default Home
