import React from 'react';

interface MapImagesProps {
  images: string[]; 
}

const MapImages: React.FC<MapImagesProps> = ({ images }) => {

  if (!images || images.length === 0) {
    return (
    <>
    </>
    );
  }

  return (
    <div className="w-full py-10">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${images.length === 2 ? 'md:flex-row' : ''} justify-center items-center gap-8`}
        >
          {images.map((url, index) => (
            <div
              key={index}
              className={`${
                images.length === 1 ? 'w-full' : 'md:w-1/2'
              } flex justify-center`}
            >
              <img
                src={url}
                alt={`Изображение ${index + 1}`}
                className={`${
                  images.length === 1
                    ? 'w-full h-[240px] sm:h-[320px] md:h-[700px]'
                    : 'w-[600px] h-[240px] sm:h-[320px] md:h-[500px]'
                } object-contain rounded-lg`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapImages;


