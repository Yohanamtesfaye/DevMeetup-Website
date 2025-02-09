import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // Handle loading state if no data is passed
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-cyan-50 p-6">
      <motion.div 
        className="bg-white text-black rounded-3xl   -2xl p-12 w-4/5 max-w-4xl text-center transform transition-all hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-extrabold mb-4 text-teal-600">{data.name}</h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Everything started here</h2>
        
        <p className="text-xl mb-2 text-gray-600">{data.date} | {data.time}</p>
        <p className="text-xl mb-4 text-gray-600">Venue: {data.eventVenue || 'ALX-Ethiopia'}</p>
        
        <p className="text-lg mb-3">Organizers: <span className="font-medium text-teal-500">{data.organizers || 'Codenight Admins'}</span></p>
        <p className="text-lg mb-6">Participants: <span className="font-medium text-teal-500">{data.participant || '80+ developers and tech personalities'}</span></p>
        
        <p className="text-lg text-gray-700 leading-relaxed">{data.description}</p>
      </motion.div>
    </div>
  );
};

export default EventDetails;
