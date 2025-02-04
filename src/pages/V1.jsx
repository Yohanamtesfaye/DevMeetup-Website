import { motion } from "framer-motion"
import disscusion from "../assets/disscusion.jpg"
import ppl from "../assets/ppl.jpg"
import food from "../assets/food.jpg"
import guest from "../assets/guest.jpg"

const eventDetails = [
  { label: "Organizers", value: "CodeNight" },
  { label: "Sponsors", value: "Vercel, GitHub" },
  { label: "Venue", value: "Online" },
  { label: "Date", value: "May 15-16, 2022" },
  { label: "Participants", value: "500+" },
  { label: "Highlights", value: "Talks, Workshops, Networking" },
]

const galleryImages = [disscusion, ppl, food, guest]

function V1() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-600"
        >
          DevMeetup V1: The Beginning
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Event Details</h2>
            <ul className="space-y-4 bg-white shadow-lg rounded-lg overflow-hidden">
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
                  className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`V1 Image ${index + 1}`}
                    className="object-cover h-48 w-full"
                  />
                
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-500">Event Highlights</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                className="px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-indigo-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-indigo-600">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-500">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Dagmawi Babi",
                role: "DevOps Engineer",
                quote:
                  "DevMeetup V1 was an eye-opening experience. The quality of talks and workshops was exceptional!",
              },
              {
                name: "Chapi",
                role: "Full Stack Engineer",
                quote: "I made so many great connections at DevMeetup V1. Can't wait for the next one!",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-indigo-600 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default V1

