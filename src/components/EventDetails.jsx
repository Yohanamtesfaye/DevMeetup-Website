import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = ({ data }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white p-4">
      <motion.div 
        className="bg-white text-black rounded-2xl shadow-2xl p-8 w-4/5 max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-extrabold mb-2 text-cyan-600">{data.name}</h1>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Everything started here</h2>
        
        <p className="text-lg mb-1 text-gray-600">{data.date} | {data.time}</p>
        <p className="text-lg mb-3 text-gray-600">Venue: {data.eventVenue || 'ALX-Ethiopia'}</p>
        
        <p className="text-md mb-2">Organizers: <span className="font-medium text-cyan-500">{data.organizers || 'Codenight Admins'}</span></p>
        <p className="text-md mb-4">Participants: <span className="font-medium text-cyan-500">{data.participant || '80+ developers and tech personalities'}</span></p>
        
        <p className="text-gray-700 leading-relaxed">{data.description}</p>
      </motion.div>
    </div>
  );
};

export default EventDetails;
