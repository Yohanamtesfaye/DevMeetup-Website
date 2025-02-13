import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-22T23:59:59').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <motion.div 
      className="w-full max-w-xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
        
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {timeBlocks.map((block, index) => (
          <motion.div
            key={block.label}
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="bg-gradient-to-br pt-2 xl:p-6 from-indigo-600 to-purple-600 rounded-2xl p-1">
              <div className="bg-black/10 backdrop-blur-lg rounded-xl p-4">
                <div className="relative flex flex-col items-center justify-center h-4 md:h-4">
                  <motion.span 
                    key={block.value}
                    className="text-2xl  font-bold text-white"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {String(block.value).padStart(2, '0')}
                  </motion.span>
                  <span className="text-sm md:text-base text-white/80 font-medium">
                    {block.label}
                  </span>
                </div>
              </div>
            </div>
            {index < timeBlocks.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                <span className="text-2xl font-bold text-indigo-600">:</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="text-sm xl:text-lg md:text-base text-gray-600">
          Join us for an amazing event! Don't miss out.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default CountdownTimer;
