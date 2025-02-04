import { motion } from "framer-motion"
import chapi from "../assets/chapi.jpg"
import dagi from "../assets/dagi.jpeg"
import luna from "../assets/luna.jpg"
import disscusion from "../assets/disscusion.jpg"
import ppl from "../assets/ppl.jpg"
import food from "../assets/food.jpg"
import guest from "../assets/guest.jpg"

const eventDetails = [
  { label: "Organizers", value: "CodeNight & TechHub" },
  { label: "Sponsors", value: "Vercel, GitHub, MongoDB" },
  { label: "Venue", value: "Hybrid (Online & In-person)" },
  { label: "Date", value: "September 10-12, 2022" },
  { label: "Participants", value: "1000+" },
  { label: "Highlights", value: "Keynotes, Workshops, Hackathon" },
]

const galleryImages = [disscusion, ppl, food, guest]

function V2() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-purple-600"
        >
          DevMeetup V2: Expanding Horizons
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-purple-500">Event Details</h2>
            <ul className="space-y-4 bg-white shadow-lg rounded-lg overflow-hidden">
              {eventDetails.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex py-4 px-6 border-b border-gray-200 last:border-b-0 hover:bg-purple-50 transition-colors duration-200"
                >
                  <span className="font-bold w-32 text-purple-600">{detail.label}:</span>
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
            <h2 className="text-2xl font-semibold mb-6 text-purple-500">Gallery</h2>
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
                    alt={`V2 Image ${index + 1}`}
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
          <h2 className="text-2xl font-semibold mb-6 text-center text-purple-500">New Features in V2</h2>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {[
              {
                title: "Hybrid Format",
                description:
                  "We introduced a hybrid format, allowing both in-person and online participation for a more inclusive experience.",
              },
              {
                title: "24-Hour Hackathon",
                description:
                  "Our first-ever hackathon challenged participants to create innovative solutions using cutting-edge technologies.",
              },
              {
                title: "Career Fair",
                description:
                  "We partnered with top tech companies to provide job opportunities and career guidance to our attendees.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-5 border-b border-gray-200 last:border-b-0 hover:bg-purple-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-purple-600">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-purple-500">Keynote Speakers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Chapi", role: "Developer", image: chapi },
              { name: "Dagmawi Babi", role: "Developer", image: dagi },
              { name: "Mulu Tsega (Luna)", role: "Software Product Manager", image: luna },
            ].map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-medium text-gray-900">{speaker.name}</h3>
                <p className="text-sm text-gray-500">{speaker.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-purple-500">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Yohana Mekuria",
                role: "Software Engineer",
                quote:
                  "The hybrid format of DevMeetup V2 was fantastic. I could network with people from all over the world!",
              },
              {
                name: "Yeabsira Mekonen",
                role: "UX Designer",
                quote:
                  "The workshops at DevMeetup V2 were incredibly insightful. I learned so much about the latest design trends and tools.",
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
                <p className="text-purple-600 font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default V2

