import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const schedule = [
  { time: '8:30 AM', event: 'Welcome Speech', speaker: 'Organizers' },
  { time: '9:00 AM', event: 'Cool Games', speaker: 'Joe the Game Dev' },
  { time: '10:00 AM - 12:00 PM', event: 'Panel Discussions', speaker: 'Senior Devs & Tech Leaders' },
  { time: '12:00 PM - 1:00 PM', event: 'Lunch Break', speaker: '-' },
  { time: '1:30 PM - 3:00 PM', event: 'Networking Session', speaker: 'Tech Enthusiasts' },
  { time: '3:30 PM - 5:00 PM', event: 'Hackathon', speaker: 'CodeNight Developers' },
  { time: '5:30 PM', event: 'Prize Ceremony & Sponsor Appreciation', speaker: 'Organizers & Sponsors' },
];

function Schedule() {
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
      <div className="container lg:px-16 mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold mb-6 text-center text-indigo-600"
        >
          Event Schedule
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

export default Schedule
