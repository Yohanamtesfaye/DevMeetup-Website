import React from 'react';

const EventHighlights = () => {
  const highlights = [
    {
      title: "Keynote Presentations",
      description:
        "Industry experts shared insights on emerging technologies, cloud architecture, and AI innovations.",
    },
    {
      title: "Hands-on Workshops",
      description:
        "Practical sessions on modern development tools, frameworks, and best practices.",
    },
    {
      title: "Hackathon",
      description:
        "Teams collaborated to build innovative solutions during our 24-hour coding challenge.",
    },
    {
      title: "Networking Events",
      description:
        "Both in-person and virtual networking opportunities to connect with fellow developers.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-semibold text-purple-600 mb-12 text-center">Event Highlights</h2>
      <div className="bg-white rounded-2xl shadow-lg">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200"
          >
            <h3 className="text-xl font-medium text-purple-600 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHighlights;