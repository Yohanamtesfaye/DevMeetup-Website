// "use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const schedule = [
  {
    time: "9:00 AM",
    event: "Opening Keynote: The Future of Tech",
    speaker: "Jane Doe",
    description: "Explore cutting-edge technologies shaping our future.",
  },
  {
    time: "10:30 AM",
    event: "Workshop: Mastering React 18 Features",
    speaker: "John Smith",
    description: "Hands-on session covering the latest React 18 features and best practices.",
  },
  {
    time: "12:00 PM",
    event: "Lunch Break & Networking",
    description: "Connect with fellow developers and industry professionals.",
  },
  {
    time: "1:30 PM",
    event: "Panel: Ethical AI Development",
    speaker: "Emily Johnson, Michael Chen",
    description: "Discuss ethical considerations in AI development and implementation.",
  },
  {
    time: "3:00 PM",
    event: "Workshop: Building Scalable Cloud Solutions",
    speaker: "Michael Chen",
    description: "Learn to design and implement scalable solutions using cloud technologies.",
  },
  {
    time: "4:30 PM",
    event: "Closing Remarks & Networking Session",
    description: "Wrap up the event and continue building valuable connections.",
  },
]

function EventSchedule() {
  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">Event Schedule</h2>
        <div className="bg-white shadow-lg rounded-lg">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              initial={false}
              animate={{ backgroundColor: expandedItem === index ? "#EEF2FF" : "inherit" }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="px-6 py-4 sm:flex sm:justify-between sm:items-center cursor-pointer hover:bg-indigo-50 transition-colors duration-150 ease-in-out"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm font-medium text-gray-600">{item.time}</p>
                  <h3 className="text-lg font-semibold text-indigo-600">{item.event}</h3>
                </div>
                <div className="flex items-center">
                  {item.speaker && <p className="text-sm text-gray-600 mr-4">{item.speaker}</p>}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-500"
                    animate={{ rotate: expandedItem === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </motion.svg>
                </div>
              </div>
              <AnimatePresence>
                {expandedItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-indigo-50"
                  >
                    <p className="text-gray-700 mb-2">{item.description}</p>
                    {item.speaker && (
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Speaker(s):</span> {item.speaker}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}

export default EventSchedule

