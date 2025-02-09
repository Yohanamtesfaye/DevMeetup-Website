import React from 'react';

const Gallery = ({ galleryImages }) => {
  return (
    <div className='m-5'>
      <h2 className="text-4xl font-semibold flex justify-center text-purple-600 mb-8">Memories</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        {galleryImages.slice(0, 9).map((image, index) => (
          <div key={index} className="overflow-hidden  h-80">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;