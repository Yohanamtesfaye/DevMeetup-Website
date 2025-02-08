import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 shadow-lg border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-2"
              >
                <span className="text-white font-bold">D</span>
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
              >
                DevMeetup
              </motion.span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/v1">V1</NavLink>
            <NavLink to="/v2">V2</NavLink>
            <NavLink to="/v3">V3 Features</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <motion.div
              animate={{
                y: [0, -5, 0],
                filter: [
                  "drop-shadow(0 0 0px rgba(99, 102, 241, 0))",
                  "drop-shadow(0 0 10px rgba(99, 102, 241, 0.5))",
                  "drop-shadow(0 0 0px rgba(99, 102, 241, 0))"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <NavLink to="/sponser-us" className="text-indigo-600 font-semibold">
                Sponsor Us
              </NavLink>
            </motion.div>
            <NavLink to="/help-us">Help Us</NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: "auto", 
              opacity: 1,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
          >
            <div className="pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-sm">
              <MobileNavLink to="/" setIsOpen={setIsOpen}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/v1" setIsOpen={setIsOpen}>
                V1
              </MobileNavLink>
              <MobileNavLink to="/v2" setIsOpen={setIsOpen}>
                V2
              </MobileNavLink>
              <MobileNavLink to="/v3" setIsOpen={setIsOpen}>
                V3 Features
              </MobileNavLink>
              <MobileNavLink to="/about-us" setIsOpen={setIsOpen}>
                About Us
              </MobileNavLink>
              <MobileNavLink to="/contact-us" setIsOpen={setIsOpen}>
                Contact Us
              </MobileNavLink>
              <motion.div
                animate={{
                  backgroundColor: ["rgba(99, 102, 241, 0)", "rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <MobileNavLink to="/sponser-us" setIsOpen={setIsOpen} className="text-indigo-600  font-semibold">
                  Sponsor Us
                </MobileNavLink>
              </motion.div>
              <MobileNavLink to="/help-us" setIsOpen={setIsOpen}>
                Help Us
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`group relative border-transparent hover:border-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300 ${className}`}
    >
      <span className="relative z-10 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 bg-indigo-50 rounded-lg -z-0"
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  )
}

function MobileNavLink({ to, children, setIsOpen, className = "" }) {
  return (
    <Link
      to={to}
      className={`border-transparent hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-all duration-300 ${className}`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}

export default Navbar