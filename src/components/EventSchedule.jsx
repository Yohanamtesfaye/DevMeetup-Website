import React from 'react';

const EventSchedule = ({ scheduleItems }) => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Event Schedule</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-6xl mx-auto">
          {Array.isArray(scheduleItems) && scheduleItems.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 border-l-4 ${
                item.type === 'keynote' ? 'border-indigo-500' :
                item.type === 'talk' ? 'border-purple-500' :
                item.type === 'workshop' ? 'border-pink-500' :
                'border-gray-300'
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <div className="text-gray-600 mt-1">
                    {typeof item.speaker === 'string' ? item.speaker : 
                      item.speaker ? `${item.speaker.name}${item.speaker.role ? ` - ${item.speaker.role}` : ''}${item.speaker.company ? ` (${item.speaker.company})` : ''}` : 'TBA'
                    }
                  </div>
                </div>
                <div className="text-indigo-600 whitespace-nowrap font-medium">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;