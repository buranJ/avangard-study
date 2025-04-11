import { FC, useState } from 'react';

import { InterestNearbyBuilding } from 'types/common';
import Gallery from 'components/Gallery';

import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  data: InterestNearbyBuilding[];
}
import auca from '../../../assets/images/auca.jpg'
import cambridge from '../../../assets/images/cambridge.jpg'
import panaramaBish from '../../../assets/images/panarama.jpg'

import './style.scss'
const places = [
  {
    id: 1,
    title: "Панорама города Бишкек",
    time: "2 мин",
    image: panaramaBish,
  },
  {
    id: 2,
    title: "Silk Road International School",
    time: "2 мин",
    image: cambridge,
  },
  {
    id: 3,
    title: "American University of Central Asia",
    time: "2 мин",
    image: auca,
  },
];
const Desktop: FC<IProps> = ({ data }) => {
  return (
    <section className="what-interesting ">
      <div className="container">
        <div className="what-interesting__content ">
          <h2 className="what-interesting__title ">Что интересного рядом</h2>
          <div className="what-interesting__item ">
            {places.map((place) => (
              <div className="what-interesting__item__content flex items-center flex-col" key={place.id}>
                <h3 className='what-interesting__item__title'><span></span>{place.title}</h3>
                <div className="what-interesting__item__test relative ">
                  <img src={place.image} alt={place.title} className='what-interesting__item__image' />
                  <p className='what-interesting__item__time '>{place.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Desktop;
