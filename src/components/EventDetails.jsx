import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = ({ data }) => {
  return (
    <motion.div 
      className="w-full py-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white text-center shadow-lg p-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="w-full max-w-5xl space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">{data.name}</h1>
        <h1 className='text-2xl md:text-3xl font-extrabold text-gray-700 mb-4'>{data.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg md:text-xl mb-2 text-gray-800">{data.date} | {data.time}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg md:text-xl mb-4 text-gray-800">Venue: {data.eventVenue || 'ALX-Ethiopia'}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-md md:text-lg mb-3 text-gray-800">Organizers: <span className="font-medium text-gray-600">{data.organizers || 'Codenight Admins'}</span></p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-6 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-md md:text-lg mb-6 text-gray-800">Participants: <span className="font-medium text-gray-600">{data.participant || '80+ developers and tech personalities'}</span></p>
          </div>
        </div>
        
        <p className="text-md md:text-lg leading-relaxed text-gray-800">{data.description}</p>
      </div>
    </motion.div>
  );
};

export default EventDetails;