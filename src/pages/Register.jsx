// import { useState } from "react"
// import { motion } from "framer-motion"
// import { FaUser, FaEnvelope, FaLock, FaBuilding } from "react-icons/fa"

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     company: "",
//   })
//   const [errors, setErrors] = useState({})

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const validateForm = () => {
//     const errors = {}
//     if (!formData.name.trim()) errors.name = "Name is required"
//     if (!formData.email.trim()) errors.email = "Email is required"
//     else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
//     if (!formData.password) errors.password = "Password is required"
//     else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters"
//     if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match"
//     return errors
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const validationErrors = validateForm()
//     if (Object.keys(validationErrors).length === 0) {
//       // Here you would typically send the data to your backend
//       console.log("Form submitted:", formData)
//       alert("Registration successful! Check console for details.")
//     } else {
//       setErrors(validationErrors)
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-md mx-auto">
//         <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 300 }}>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for DevMeetup V3</h2>
//           <p className="mt-2 text-center text-sm text-gray-600">Join the most exciting developer event of the year!</p>
//         </motion.div>
//         <motion.form
//           className="mt-8 space-y-6"
//           onSubmit={handleSubmit}
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="name" className="sr-only">
//                 Name
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaUser className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="email-address" className="sr-only">
//                 Email address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaEnvelope className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="confirm-password" className="sr-only">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaLock className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="confirm-password"
//                   name="confirmPassword"
//                   type="password"
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//             <div>
//               <label htmlFor="company" className="sr-only">
//                 Company (Optional)
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FaBuilding className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </div>
//                 <input
//                   id="company"
//                   name="company"
//                   type="text"
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Company (Optional)"
//                   value={formData.company}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>
//           </div>

//           {Object.keys(errors).length > 0 && (
//             <div className="rounded-md bg-red-50 p-4">
//               <div className="flex">
//                 <div className="ml-3">
//                   <h3 className="text-sm font-medium text-red-800">There were errors with your submission</h3>
//                   <div className="mt-2 text-sm text-red-700">
//                     <ul className="list-disc pl-5 space-y-1">
//                       {Object.values(errors).map((error, index) => (
//                         <li key={index}>{error}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Register
//             </motion.button>
//           </div>
//         </motion.form>
//       </div>
//     </motion.div>
//   )
// }

// export default Register

import { motion } from "framer-motion"
import { FaCalendarAlt } from "react-icons/fa"

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 300 }}>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-indigo-600">DevMeetup V3 Registration</h2>
          <p className="mt-2 text-center text-xl text-gray-600">Coming Soon</p>
        </motion.div>
        <motion.div
          className="mt-8 bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaCalendarAlt className="mx-auto h-12 w-12 text-indigo-500 mb-4" />
          <p className="text-lg text-gray-700 mb-4">
            Registration for DevMeetup V3 will be opening soon. Stay tuned for updates!
          </p>
          <p className="text-sm text-gray-500">
            We're working hard to bring you an amazing event. Check back later for registration details.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Register

