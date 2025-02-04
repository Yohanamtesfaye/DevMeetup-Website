import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="ml-2 text-xl font-bold text-indigo-600"
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
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="pt-2 pb-3 space-y-1">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children, setIsOpen }) {
  return (
    <Link
      to={to}
      className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-300"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}

export default Navbar

