import { FC, useState } from 'react';

import { ObjectMetrics as ObjectMetricsType } from 'types/common';

// import Gallery from 'components/Gallery';
import './styles.scss';

interface IProps {
  title: string;
  metrics: ObjectMetricsType;
}


const ObjectMetrics: FC<IProps> = ({ metrics }) => {
  const numerics = metrics?.numerics || [];

  const leftItems = numerics.slice(0, Math.ceil(numerics.length / 2));
  const rightItems = numerics.slice(Math.ceil(numerics.length / 2));

  return (
    <section className="object-metrics">
      <div className="object-metrics__content">
        <h2 className="object-metrics__title text-[24px] leading-[110%] text-[#00091b] text-center mt-[90px] md:text-[50px]">
          “Panorama Park” в цифрах
        </h2>
        <div className="object-metrics__wrapper flex flex-wrap md:flex">

          <div className="object-metrics__columns">
            {leftItems.map((item) => (
              <div
                key={item.id}
                className="object-metrics__item bg-[#00417d] rounded-r-[60px] pl-[29px] mt-[24px] md:pl-[76px] md:w-[340px] md:h-[108px] w-[190px] h-[70px]"
              >
                <p className="object-metrics__value text-[27px]">{item.value}</p>
                <p className="object-metrics__label text-[15px]">{item.title}</p>
              </div>
            ))}
          </div>

          <img
            src={metrics?.first_image}
            alt="Объект"
            className="object-metrics__image md:w-[504px] md:h-[504px] md:rounded-[41px] w-[49%] h-[301px] rounded-[20px] object-cover"
          />
          <img
            src={metrics?.second_image}
            alt="Объект адаптив"
            className="rounded-[20px] w-[49%] h-[301px] md:hidden object-cover"
          />

          <div className="object-metrics__columns">
            {rightItems.map((item) => (
              <div
                key={item.id}
                className="object-metrics__item bg-[#00417d] rounded-l-[60px] pr-[29px] mt-[24px] md:pr-[76px] md:w-[340px] md:h-[108px] w-[190px] h-[70px]"
              >
                <p className="object-metrics__value text-right text-[27px]">{item.value}</p>
                <p className="object-metrics__label text-right text-[15px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default ObjectMetrics;
