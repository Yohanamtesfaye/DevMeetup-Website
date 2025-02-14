import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function MobileNavLink({ to, children, setIsOpen, className = "" }) {
  return (
    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={`border-transparent hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-all duration-300 ${className}`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    </motion.div>
  )
}

function DesktopNavLink({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`border-transparent hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${className}`}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
        DevMeetup
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex space-x-4">
          <DesktopNavLink to="/">Home</DesktopNavLink>
          <DesktopNavLink to="/v1">V1</DesktopNavLink>
          <DesktopNavLink to="/v2">V2</DesktopNavLink>
          <DesktopNavLink to="/about-us">About Us</DesktopNavLink>
          <DesktopNavLink to="/contact-us">Contact Us</DesktopNavLink>
          <DesktopNavLink to="/sponser-us" className="text-indigo-600 font-semibold">
            Sponsor Us
          </DesktopNavLink>
          <DesktopNavLink to="/help-us">Help Us</DesktopNavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="sm:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="sm:hidden fixed top-16 right-0 bottom-0 h-96 rounded-l-2xl w-64 bg-white shadow-lg z-50"
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{
                x: "100%",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
            >
              <motion.div
                className="h-full overflow-y-auto py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <MobileNavLink to="/" setIsOpen={setIsOpen}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/v1" setIsOpen={setIsOpen}>
                  V1
                </MobileNavLink>
                <MobileNavLink to="/v2" setIsOpen={setIsOpen}>
                  V2
                </MobileNavLink>
                <MobileNavLink to="/about-us" setIsOpen={setIsOpen}>
                  About Us
                </MobileNavLink>
                <MobileNavLink to="/contact-us" setIsOpen={setIsOpen}>
                  Contact Us
                </MobileNavLink>
                <motion.div
                  animate={{
                    backgroundColor: ["rgba(99, 102, 241, 0)", "rgba(99, 102, 241, 0.1)", "rgba(99, 102, 241, 0)"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <MobileNavLink to="/sponser-us" setIsOpen={setIsOpen} className="text-indigo-600 font-semibold">
                    Sponsor Us
                  </MobileNavLink>
                </motion.div>
                <MobileNavLink to="/help-us" setIsOpen={setIsOpen}>
                  Help Us
                </MobileNavLink>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}