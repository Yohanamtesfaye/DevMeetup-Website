import React, { useState } from 'react';

const Gallery = ({ galleryImages }) => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleImageClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index);
  };

  return (
    <div className='m-5'>
      <h2 className="text-4xl font-semibold flex justify-center text-purple-600 mb-8">Memories</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2 rounded-md md:grid-cols-4 gap-2">
        {galleryImages.slice(0, 9).map((image, index) => (
          <div key={index} className="h-80 rounded-md">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={`w-full h-full object-cover cursor-pointer ${
                clickedIndex === index ? 'grayscale-0' : 'grayscale'
              } md:hover:grayscale-0`}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;