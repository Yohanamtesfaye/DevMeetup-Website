import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const VolunteersSection = ({ volunteers }) => (
  <section className="py-8 lg:px-28 max-md:px-10 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-3">Our Volunteers</h2>
      <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
        Meet our amazing volunteers helping to make this event possible
      </p>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
        {volunteers.map((volunteer, index) => (
          <div key={index} className="text-center shadow-2xl rounded-xl p-4">
            <div className="w-16 h-16 mx-auto mb-2 overflow-hidden rounded-full">
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xs font-semibold text-gray-800">{volunteer.name}</h3>
            <p className="text-xs text-gray-500 mb-1">{volunteer.role}</p>
            <p className="text-xs text-gray-500 mb-2">{volunteer.description}</p>
            <div className="flex justify-center gap-2">
              {volunteer.github && (
                <a href={volunteer.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaGithub className="w-3 h-3" />
                </a>
              )}
              {volunteer.twitter && (
                <a href={volunteer.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaTwitter className="w-3 h-3" />
                </a>
              )}
              {volunteer.linkedin && (
                <a href={volunteer.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                  <FaLinkedin className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VolunteersSection;