import { motion } from "framer-motion"
import ppl from '../assets/ppl.jpg'
import disscusion from '../assets/disscusion.jpg'
import food from '../assets/food.jpg'
import guest from '../assets/guest.jpg'

const teamImages = [
  {
    src: ppl,
    alt: "V1 Dev Meetup",
    title: "V1 Dev Meetup",
    description: "Our community participating in the first Dev Meetup event",
  },
  {
    src: disscusion,
    alt: "Tech Panel Discussion",
    title: "Tech Panel Discussion",
    description: "DevMeetup's tech Panal Disscusion",
  },
  {
    src: guest,
    alt: "Community meetup",
    title: "Community Meetups",
    description: "Regular meetups where developers share knowledge",
  },
  {
    src: food,
    alt: "Inspiration Talks",
    title: "Inspiration Talks",
    description: "Guest speakers sharing insights and experiences",
  },
]

const teamMembers = [
  {
    name: "Abebe Kebede",
    role: "Community Lead",
    image: "/placeholder.svg?height=300&width=300",
    description: "Leading our community initiatives since 2020",
  },
  {
    name: "Sara Tekle",
    role: "Technical Director",
    image: "/placeholder.svg?height=300&width=300",
    description: "Overseeing technical content and workshops",
  },
  {
    name: "Dawit Alemu",
    role: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300",
    description: "Managing our events and partnerships",
  },
]

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
    >
      <div className="container mx-auto lg:px-16 px-4 sm:px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-600"
        >
          About DevMeetup
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl   p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                DevMeetup is dedicated to fostering a vibrant tech community in Ethiopia. We bring together developers,
                designers, and tech enthusiasts to share knowledge, collaborate, and grow together.
              </p>
            </div>

            <div className="bg-white rounded-xl   p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-500">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the premier tech community platform in Africa, empowering the next generation of tech leaders
                and innovators through meaningful connections and knowledge sharing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl   p-8 space-y-6">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-500">What We Do</h2>
              {[
                {
                  title: "Tech Events",
                  description:
                    "Regular meetups, workshops, and conferences focused on latest technologies and industry trends.",
                },
                {
                  title: "Community Building",
                  description: "Creating spaces for developers to network, collaborate, and share experiences.",
                },
                {
                  title: "Skills Development",
                  description: "Hands-on workshops and training sessions to enhance technical and soft skills.",
                },
                {
                  title: "Industry Connections",
                  description: "Bridging the gap between talent and opportunities in the tech industry.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-l-4 border-indigo-500 pl-4"
                >
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-600">Our Community in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl  "
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        {/* <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl   p-6 transform transition-all duration-300 hover:-translate-y-1 hover:  -xl"
              >
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-indigo-100">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-600 mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-center">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Stats Section */}
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl   p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: "Community Members" },
                { number: "100+", label: "Events Organized" },
                { number: "50+", label: "Tech Partners" },
                { number: "3", label: "Years of Impact" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}

export default AboutUs

