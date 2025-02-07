import React from 'react';

const EventDetails = ({ data }) => {
  return (
    <div className="w-full h-screen relative ">
      <div className="w-full h-full rounded-3xl relative">
        <img className='object-cover h-full w-full' src="src/assets/disscusion.jpg" alt="" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 bg-slate-950 opacity-70">
          <h1 className="text-7xl font-bold mb-4">{data.name}</h1>
          <h1 className='text-5xl font-sans font-bold mb-3'>Everything started here</h1>
          
          <p className="text-xl mb-2">{data.date} | {data.time}</p>
          <p className="text-lg mb-4">{data.location}</p>
          <p className="max-w-xl text-center text-gray-200">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
