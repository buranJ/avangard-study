import { FC, useState } from 'react';

import { InterestNearbyBuilding } from 'types/common';
import Gallery from 'components/Gallery';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
interface IProps {
  data: InterestNearbyBuilding[];
}
import './style.scss'

const Desktop: FC<IProps> = ({ data }) => {



  return (
    <section className="what-interesting">
      <div className="container">
        <div className="what-interesting__content">
          <h2 className="what-interesting__title">Что интересного рядом</h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="what-interesting__swiper"
          >
            {data?.interest_nearby?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="what-interesting__item__content flex items-center flex-col">
                  <h3 className="what-interesting__item__title">
                    <span></span>{item.building.title}
                  </h3>
                  <div className="what-interesting__item__test relative">
                    <img
                      src={item.building.image}
                      alt={item.building.title}
                      className="what-interesting__item__image"
                    />
                    <p className="what-interesting__item__time">{item.time} мин</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
};

export default Desktop;
