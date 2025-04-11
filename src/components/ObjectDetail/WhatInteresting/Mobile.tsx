import { FC, useState } from 'react';

import { InterestNearbyBuilding } from 'types/common';
import Gallery from 'components/Gallery';

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
const Mobile: FC<IProps> = ({ data }) => {

  return (
    <section className="mobile-interesting">
      <div className="container">
        <div className="mobile-interesting__content">
          <h2 className="mobile-interesting__title">Что интересного рядом</h2>
          <div className="mobile-interesting__item ">
            {places.map((place, index) => (
              <div className={`mobile-interesting__item__content ${index % 2 === 0 ? "left" : "right"}`} key={place.id}>
                <div className="mobile-interesting__item__content__box">
                  <h3 className='mobile-interesting__item__title'>{place.title}</h3>
                  <div className="mobile-interesting__item__test relative">
                    <img src={place.image} alt={place.title} className='mobile-interesting__item__imag' />
                    <p className='mobile-interesting__item__time absolute flex'>{place.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default Mobile;
