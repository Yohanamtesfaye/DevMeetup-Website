import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaTwitter, FaChevronDown, FaChevronUp } from "react-icons/fa"
import chapi from "../assets/chapi.jpg"
import dagi from "../assets/dagi.jpeg"
import luna from "../assets/luna.jpg"

const speakers = [
  {
    name: "Dagmawi Babi",
    photo: dagi,
    role: "Developer",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Chapi",
    photo: chapi,
    role: "Developer",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Mulu Tsega (Luna)",
    photo: luna,
    role: "Software Product Manager",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "Michael Chen",
    photo:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    role: "DevOps Engineer",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
]

const schedule = [
  { time: "9:00 AM", event: "Opening Keynote: The Future of Tech", speaker: "Chapi" },
  { time: "10:30 AM", event: "Workshop: Mastering React 18 Features", speaker: "Dagmawi babi" },
  { time: "12:00 PM", event: "Lunch Break & Networking" },
  { time: "1:30 PM", event: "Panel: Ethical AI Development", speaker: "Luna, Chapi" },
  { time: "3:00 PM", event: "Workshop: Building Scalable Cloud Solutions", speaker: "Dagmawi Babi" },
  { time: "4:30 PM", event: "Closing Remarks & Networking Session" },
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

function V3() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
    >
      <div className="container lg:px-16 mx-auto px-4 sm:px-6 ">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-600"
        >
          DevMeetup V3: The Future of Tech
        </motion.h1>

        <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-6 text-indigo-500"
          >
            Event Highlights
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🌐", title: "Global Reach", description: "Connect with developers from over 50 countries" },
              { icon: "🎓", title: "Expert-Led Sessions", description: "30+ workshops and talks by industry leaders" },
              {
                icon: "🤝",
                title: "Networking Opportunities",
                description: "AI-powered matchmaking for meaningful connections",
              },
              {
                icon: "🏆",
                title: "Tech Showcase",
                description: "Explore the latest tools and technologies in our exhibition area",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-6 text-indigo-500"
          >
            Dynamic Schedule
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {isMobile ? (
              <MobileSchedule schedule={schedule} />
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Event
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Speaker
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {schedule.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.event}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.speaker || "-"}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-6 text-indigo-500"
          >
            Featured Speakers
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={speaker.photo || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                  <p className="text-gray-600 mb-4">{speaker.role}</p>
                  <div className="flex space-x-4">
                    <a
                      href={speaker.github}
                      className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                    >
                      <FaGithub className="h-6 w-6" />
                    </a>
                    <a
                      href={speaker.twitter}
                      className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
                    >
                      <FaTwitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

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
                className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

        <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-8 text-center text-indigo-600"
          >
            Our Volunteers
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteers.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">{team.team}</h3>
                <div className="space-y-4">
                  {team.members.map((member, memberIndex) => (
                    <div
                      key={memberIndex}
                      className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-800">{member.name}</span>
                      <span className="text-indigo-600">{member.role}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-6 text-indigo-500"
          >
            Live Updates
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg mb-4">
              Stay connected with real-time event updates! Follow us on{" "}
              <a
                href="https://telegram.org"
                className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors duration-300"
              >
                Telegram
              </a>{" "}
              for live coverage of keynotes, workshop highlights, and exclusive behind-the-scenes content.
            </p>
          </motion.div>
        </section>

        {/* <section className="mb-16">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold mb-6 text-indigo-500"
          >
            Community Forum
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-lg mb-4">
              Join our vibrant community forum to connect with fellow attendees, share your thoughts, and continue the
              conversations beyond the event sessions.
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">Forum Highlights</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Discuss the latest tech trends with industry experts</li>
                <li>Share your project ideas and get feedback from peers</li>
                <li>Network with developers from around the world</li>
                <li>Access exclusive resources and learning materials</li>
              </ul>
            </div>
            <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Access Forum
            </button>
          </motion.div>
        </section> */}
      </div>
    </motion.div>
  )
}

function MobileSchedule({ schedule }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-gray-200">
      {schedule.map((item, index) => (
        <div key={index} className="py-4 px-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(index)}>
            <span className="font-medium text-gray-900">{item.time}</span>
            {expandedIndex === index ? (
              <FaChevronUp className="text-gray-500" />
            ) : (
              <FaChevronDown className="text-gray-500" />
            )}
          </div>
          {expandedIndex === index && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">{item.event}</p>
              <p className="text-sm text-gray-500 mt-1">{item.speaker || "No speaker"}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default V3
