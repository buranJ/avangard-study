import React from 'react';

import { Location } from 'types/common';
import Gallery from 'components/Gallery';

import mapImage from '../../../assets/images/maps/map-1.png';
import cityPanorama from '../../../assets/images/maps/map-2.png';
['jsfshk','sjkhfjks']
import './styles.scss';

interface MapImages {
  images: Location;
}
const MapImages: React.FC<MapImages> = ({ images }) => {

  return (
    <div className="panorama-map w-full  py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={mapImage} alt="Карта Panorama Park"
              className="w-[800px] h-[400px] object-contain rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={cityPanorama} alt="Инфографика Panorama Park"
              className="w-[800px] h-[400px] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapImages;


