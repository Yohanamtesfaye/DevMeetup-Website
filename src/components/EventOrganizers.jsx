import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const EventOrganizers = () => {
  const organizers = [
    {
      name: "Temkin mengistu",
      role: "Lead Organizer",
      description: "DevMeetup Lead Organizer",
      image: "/src/assets/chapi.jpg",
      socials: {
        twitter: "https://x.com/chapimenge3",
        linkedin: "https://www.linkedin.com/in/chapimenge/",
        github: "https://github.com/chapimenge3"
      }
    },
    {
      name: "Meron Abate",
      role: "Lead Organizer",
      description: "DevMeetup Lead Organizer",
      image: "/src/assets/meron.jpg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/meronabate/",
        github: "https://github.com/"
      }
    },
    {
      name: "Mulu Tsega",
      role: "Guest Coordinator",
      description: "Coordinating guest speakers and attendees",
      image: "/src/assets/luna.jpg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/mulu-tsega943/",
        github: "https://github.com/"
      }
    },
    {
      name: "Simon Asaye",
      role: "Agenda Coordinator",
      description: "Managing event schedule and activities",
      image: "/src/assets/simon.jpg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/simon-asnake/",
        github: "https://github.com/justsima/"
      }
    },
    {
      name: "Mohammed Ibrahim",
      role: "Guest Coordinator",
      description: "Coordinating guest speakers and attendees",
      image: "/src/assets/muhammed.jpg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/mohammed-ibrahim-45a1b9247/",
        github: "https://github.com/MohammedIbrahim8887"
      }
    },
    {
      name: "Lydia A Firew",
      role: "Logistics Coordinator",
      description: "Managing event logistics and operations",
      image: "/src/assets/lydia.jpg",
      socials: {
        twitter: "https://twitter.com/",
        linkedin: "https://www.linkedin.com/in/lydiaabrahamfirew/",
        github: "https://github.com/LydiaAbrahamF"
      }
    }
  ];

  return (
    <section className="py-12 max-md:px-10 bg-white">
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