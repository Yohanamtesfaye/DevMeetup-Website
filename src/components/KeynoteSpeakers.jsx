import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const KeynoteSpeakers = ({ speakers }) => {
  return (
    <section className="py-12  bg-white">
      <div className="container mx-auto max-md:px-5 lg:px-20">
        <h2 className="text-2xl font-bold text-center mb-3">Keynote Speakers</h2>
        <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
          Learn from industry leaders and innovators
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors">
              <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{speaker.name}</h3>
              <p className="text-indigo-600 text-sm text-center mb-3">{speaker.title}</p>
              <p className="text-gray-600 text-sm text-center mb-4">{speaker.description}</p>
              <div className="flex justify-center gap-4">
                {speaker.linkedin && (
                  <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
                {speaker.twitter && (
                  <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                )}
                {speaker.github && (
                  <a href={speaker.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
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

export default KeynoteSpeakers;