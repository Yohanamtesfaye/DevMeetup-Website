import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const EventOrganizers = () => {
  const organizers = [
    {
      name: "Yohannes Tesfaye",
      role: "Lead Organizer",
      description: "Full-stack developer passionate about community",
      image: "https://example.com/organizer1.jpg",
      socials: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sara Mohammed",
      role: "Technical Lead",
      description: "AI/ML engineer focused on tech education",
      image: "https://example.com/organizer2.jpg",
      socials: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Dawit Alemu",
      role: "Community Manager",
      description: "Developer advocate & community builder",
      image: "https://example.com/organizer3.jpg",
      socials: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Helen Tadesse",
      role: "Operations Lead",
      description: "Event coordinator & logistics expert",
      image: "https://example.com/organizer4.jpg",
      socials: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold text-center mb-3">Event Organizers</h2>
        <p className="text-gray-600 text-center text-sm mb-8 max-w-3xl mx-auto">
          Meet the dedicated team behind DevMeetup V3
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {organizers.map((organizer, index) => (
            <div key={index} className="text-center shadow-lg rounded-xl p-4">
              <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={organizer.image}
                  alt={organizer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{organizer.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{organizer.role}</p>
              <p className="text-sm text-gray-500 mb-3">{organizer.description}</p>
              <div className="flex justify-center gap-3">
                {organizer.socials.twitter && (
                  <a href={organizer.socials.twitter} className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                )}
                {organizer.socials.linkedin && (
                  <a href={organizer.socials.linkedin} className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
                {organizer.socials.github && (
                  <a href={organizer.socials.github} className="text-gray-400 hover:text-gray-600">
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventOrganizers;