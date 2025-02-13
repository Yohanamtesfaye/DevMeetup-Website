import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const schedule = [
  {
    time: "10:00-10:15 AM",
    event: "Welcome and Opening vibe",
    speaker: "Mirafe Gebriel Marcos",
    speakerLink: "https://www.linkedin.com/in/mirafe-gebriel-marcos/",
    description: "Introduces ALX Ethiopia and its offerings, sets an energetic tone, and creates a vibrant morning vibe for the day.",
  },
  {
    time: "10:15-10:45 AM",
    event: "Digital Business Solutions & The Business Side",
    speaker: "Meried Bekele",
    speakerLink: "https://www.linkedin.com/in/meried-bekele/",
    description: "Discusses transforming business through digital solutions and shares strategic insights on how developers can thrive in today’s competitive market.",
  },
  {
    time: "10:45-11:15 AM",
    event: "Business Side of Development",
    speaker: "Israel Goytom",
    speakerLink: "https://www.linkedin.com/in/israel-goytom/",
    description: "Explores how Chapa evolved from a startup to a leading fintech in Ethiopia, highlighting the essential blend of technical expertise and business acumen.",
  },
  {
    time: "11:15-11:45 AM",   
    event: "Turning Passion into Enterprise",
    speaker: "Kidus Asfaw",
    speakerLink: "https://www.linkedin.com/in/kidus-asfaw/",
    description: "Explains how personal passion for technology can be transformed into a profitable business venture through innovative and sustainable solutions.",
  },
  {
    time: "11:45-12:15 PM",
    event: "Mindset for Developers to Succeed",
    speaker: "Addis Alemayew",
    speakerLink: "https://www.linkedin.com/in/addis-alemayew/",
    description: "Outlines the essential mental frameworks and strategies that developers must adopt to excel both technically and in the business realm.",
  },
  {
    time: "12:15-12:45 PM",
    event: "Entrepreneurial Journey & Strategic Insights",
    speaker: "Nebiyu Zekeriyas",
    speakerLink: "https://www.linkedin.com/in/nebiyu-zekeriyas/",
    description: "Shares insights from his entrepreneurial journey, discussing challenges, successes, and strategic advice for emerging tech innovators in Ethiopia.",
  },
  {
    time: "12:45-1:15 PM",
    event: "Panel Discussion on: How to grow your company from 0 to Hero",
    speaker: "Leul Mekonnen, Abenezer Seifu",
    speakerLink: "https://www.linkedin.com/in/leul-mekonnen/, https://www.linkedin.com/in/abenezer-seifu/",
    description: "Topic: Two tech giants in Ethiopia Hulugram and Gebeta Maps explain how they managed to scale up their business with a small team and how other companies can learn from the as well.",
  },
  {
    time: "1:15-2:15 PM",
    event: "Panel Discussion on Artificial Intelligence",
    speaker: "Hiruy, Abdurahman Omar, Temkin Mengistu",
    speakerLink: "https://www.linkedin.com/in/hiruy/, https://www.linkedin.com/in/abdurahman-omar/, https://www.linkedin.com/in/temkin-mengistu/",
    description: "The Future of AI in Tech. Content: Focused discussion on emerging AI trends, practical applications, and the transformative impact of AI on technical development and business strategies. Each panelist provides their unique perspective on how AI is shaping the future of tech.",
  },
  {
    time: "2:15-3:15 PM",
    event: "Technical Panel",
    speaker: "Rehana Abubakar, Cherinet Hailu, Berhan Nega",
    speakerLink: "https://www.linkedin.com/in/rehana-abubakar/, https://www.linkedin.com/in/cherinet-hailu/, https://www.linkedin.com/in/berhan-nega/",
    description: "Open Q&A: Diverse Tech Perspectives. Content: Interactive session where the audience engages with panelists on a range of topics including technical challenges, AI integration, and innovative business strategies.",
  },
  {
    time: "3:15-4:00 PM",
    event: "Community Products Showcase",
    speaker: "Selected Community Members / Startups",
    speakerLink: "",
    description: "Showcase of Community Innovations. Content: Highlights cutting-edge products and projects from the local tech community, demonstrating innovative, community-driven tech solutions.",
  },
  {
    time: "4:00-5:15 PM",
    event: "Closing remarks and Networking",
    speaker: "",
    speakerLink: "",
    description: "",
  },
];

function EventSchedule() {
  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto lg:px-20 py-8"
    >
      <section className="mb-16 bg-white">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">Event Schedule</h2>
        <div className="bg-gray-50 max-md:mx-5 shadow-lg rounded-lg">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              className={`border-b  border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
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
                  <h3 className=" text-gray-600">{item.event}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {item.speaker.split(', ').map((speaker, i) => (
                    <div key={i} className="flex items-center text-sm bg-gray-100 rounded-full px-2 py-1 shadow-sm">
                      <p className="text-sm text-gray-600 mr-2">{speaker}</p>
                      <a href={item.speakerLink.split(', ')[i]} target="_blank" rel="noopener noreferrer" className="text-indigo-500  hover:text-indigo-700">
                        <FaLinkedin />
                      </a>
                    </div>
                  ))}
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
                    className="text-slate-400 ml-4 "
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
                    className="px-4 py-2 bg-indigo-50"
                  >
                    <p className="text-gray-700 mb-2">{item.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default EventSchedule;