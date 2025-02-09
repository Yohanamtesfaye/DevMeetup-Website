import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // Handle loading state if no data is passed
  }

  return (
    <motion.div 
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-center shadow-2xl p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="w-full max-w-4xl space-y-6 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{data.name}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Everything started here</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-500 text-white shadow-lg p-6 md:p-10">
            <p className="text-lg md:text-xl mb-2">{data.date} | {data.time}</p>
          </div>
          <div className="bg-indigo-500 text-white shadow-lg p-6 md:p-10">
            <p className="text-lg md:text-xl mb-4">Venue: {data.eventVenue || 'ALX-Ethiopia'}</p>
          </div>
          <div className="bg-indigo-500 text-white shadow-lg p-6 md:p-10">
            <p className="text-md md:text-lg mb-3">Organizers: <span className="font-medium text-teal-200">{data.organizers || 'Codenight Admins'}</span></p>
          </div>
          <div className="bg-indigo-500 text-white shadow-lg p-6 md:p-10">
            <p className="text-md md:text-lg mb-6">Participants: <span className="font-medium text-teal-200">{data.participant || '80+ developers and tech personalities'}</span></p>
          </div>
        </div>
        
        <p className="text-md md:text-lg leading-relaxed">{data.description}</p>
      </div>
    </motion.div>
  );
};

export default EventDetails;