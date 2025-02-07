import React from 'react';
import EventDetails from '../components/EventDetails';
import EventSchedule from '../components/EventSchedule';
import EventSponsors from '../components/EventSponsors';

const V1Meetup = () => {
  const eventData = {
    name: "Developer Meetup V1",
    date: "March 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Addis Ababa, Ethiopia",
    description: "A gathering of passionate developers to share knowledge, network, and learn from industry leaders."
  };

  // Sponsors data here
  const sponsors = [
    {
      name: 'TechNova Solutions',
      description: 'Innovative software solutions for global businesses.',
      level: 'Gold',
      logo: 'https://via.placeholder.com/100',
      socials: {
        linkedin: '#',
        telegram: '#',
      },
    },
    {
      name: 'CodeCrafters Inc.',
      description: 'Leading tech company specializing in AI and ML products.',
      level: 'Silver',
      logo: 'https://via.placeholder.com/100',
      socials: {
        linkedin: '#',
        telegram: '#',
      },
    },
    {
      name: 'DevSphere Technologies',
      description: 'Empowering developers with cutting-edge tools.',
      level: 'Premium',
      logo: 'https://via.placeholder.com/100',
      socials: {
        linkedin: '#',
        telegram: '#',
      },
    },
  ];

  return (
    <>
      <div className="">
        <EventDetails data={eventData} />
        {/* We'll add KeynoteSpeaker, Sponsors, etc., here later */}
      </div>

      <section id="schedule" className="mt-10 border-amber-200 border-2">
        <EventSchedule />
      </section>
      <br />
      <br />
      <br />

      <section className="mb-12">
        <EventSponsors sponsors={sponsors} />
      </section>
    </>
  );
};

export default V1Meetup;
