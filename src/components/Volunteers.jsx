import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Volunteers = ({ volunteers }) => {
  return (
    <section className="py-8 px-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-3">Our Volunteers</h2>
        <p className="text-gray-600 text-center text-sm mb-8 max-w-2xl mx-auto">
          Meet our amazing volunteers helping to make this event possible
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {volunteers.map((volunteer, index) => (
            <div key={index} className="text-center  bg-white rounded-lg">
              <div className="w-36 h-36 mx-auto mb-4  rounded-full">
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className="size-[80%]  object-cover rounded-full"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{volunteer.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{volunteer.role}</p>
              <p className="text-sm text-gray-500 mb-2">{volunteer.description}</p>
              <div className="flex justify-center gap-2">
                {volunteer.github && (
                  <a href={volunteer.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <FaGithub className="w-5 h-5" />
                  </a>
                )}
                {volunteer.twitter && (
                  <a href={volunteer.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                )}
                {volunteer.linkedin && (
                  <a href={volunteer.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <FaLinkedin className="w-5 h-5" />
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

export default Volunteers;