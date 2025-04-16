import { useGetObjectQuery } from 'api/contact/contact.api';

import { FC, useState } from 'react';

import { InterestNearbyBuilding } from 'types/common';
import Gallery from 'components/Gallery';

interface IProps {
  data: InterestNearbyBuilding[];
}
import './style.scss'

const Mobile: FC<IProps> = ({ data }) => {



  return (
    <section className="mobile-interesting">
      <div className="container">
        <div className="mobile-interesting__content">
          <h2 className="mobile-interesting__title">Что интересного рядом</h2>
          <div className="mobile-interesting__item ">
            {data?.interest_nearby?.map((item, index) => (
              <div className={`mobile-interesting__item__content ${index % 2 === 0 ? "left" : "right"}`} key={item.id}>
                <div className="mobile-interesting__item__content__box">
                  <h3 className='mobile-interesting__item__title'>{item.building.title}</h3>
                  <div className="mobile-interesting__item__test relative">
                    <img src={item.building.image} alt={item.building.title} className='mobile-interesting__item__imag' />
                    <p className='mobile-interesting__item__time absolute flex'>{item.time}мин</p>
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
