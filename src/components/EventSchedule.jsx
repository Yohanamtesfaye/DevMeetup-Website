import React from 'react';
import { CalendarDays, Trophy, Users, Gamepad2, Mic2, Network, Utensils } from 'lucide-react';

const schedule = [
  {
    time: '8:30 AM',
    title: 'Welcome Speech',
    description: 'By the organizers, announcing the full-day schedule.',
    icon: <Mic2 className="text-blue-500" />,
  },
  {
    time: '9:00 AM',
    title: 'Cool Games',
    description: 'Tech trivia with sticker prizes, led by Joe the Game Dev.',
    icon: <Gamepad2 className="text-green-500" />,
  },
  {
    time: '10:00 AM - 12:00 PM',
    title: 'Panel Discussions',
    description: 'With senior devs and tech leaders of Ethiopia about freelancing, remote work, and more.',
    icon: <Users className="text-purple-500" />,
  },
  {
    time: '12:00 PM - 1:00 PM',
    title: 'Lunch Break',
    description: 'Delicious meals and cakes.',
    icon: <Utensils className="text-red-500" />,
  },
  {
    time: '1:30 PM - 3:00 PM',
    title: 'Networking Session',
    description: 'Vibrant networking with fellow tech enthusiasts.',
    icon: <Network className="text-yellow-500" />,
  },
  {
    time: '3:30 PM - 5:00 PM',
    title: 'Hackathon',
    description: 'For CodeNight developers to showcase their skills.',
    icon: <CalendarDays className="text-indigo-500" />,
  },
  {
    time: '5:30 PM',
    title: 'Prize Ceremony & Sponsor Appreciation',
    description: 'Prizes awarded and sponsors speaking about their companies.',
    icon: <Trophy className="text-orange-500" />,
  },
];

const Schedule = () => {
  return (
    <div className="relative max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Event Schedule</h2>

    
    {/* the vertical line of the event timline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-2 border-pink-500 rounded-full animate-pulse"></div>
          </div>
    
          <div className="flex flex-col space-y-0 ml-[10rem]" >
            {schedule.map((item, index) => (
              <div
              key={index}
              className={`relative w-4/12 p-6 bg-white shadow-xl rounded-2xl border border-gray-200
                ${index % 2 === 0 ? 'ml-[20rem]' : 'mr-0'} // Reduced margin
              `}
            >
                
                
    
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-xl animate-ping"
                ></div>
    
                <h3 className="text-xl font-semibold text-gray-800 text-center">{item.time}</h3>
                <p className="text-lg text-gray-700 mt-2 text-center">{item.title}</p>
                <p className="text-gray-500 mt-1 text-center">{item.description}</p>
              </div>
            ))}
          </div>
</div>

  );
};

export default Schedule;
