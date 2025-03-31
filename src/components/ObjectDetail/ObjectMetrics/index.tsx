import { FC, useState } from 'react';

import { ObjectMetrics as ObjectMetricsType } from 'types/common';

// import Gallery from 'components/Gallery';
import './styles.scss';

interface IProps {
  title: string;
  metrics: ObjectMetricsType;
}
// import img1 from './imgAmantur/img1.jpg'
import img3 from '../../../assets/images/image.jpg'
import img2 from '../../../assets/images/img2.png'

const Objectdata = [
  { value: "2,5 ГА", label: "Площадь участка" },
  { value: "207", label: "Парковочных мест" },
  { value: "13", label: "Малоэтажных блоков" },
  { value: "30%", label: "Площадь застройки" },
  { value: "151", label: "Количество квартир" },
  { value: "1,67 ГА", label: "Площадь двора" },
  { value: "0,6 ГА", label: "Площадь озеленения" },
  { value: "4", label: "Детских площадок" },
];


const ObjectMetrics: FC<IProps> = ({ title, metrics }) => {
  return (
    <section className="object-metrics">
      <div className="object-metrics__content">
        <h2 className="object-metrics__title text-[24px] leading-[110%] text-[#00091b] text-center mt-[90px] md:text-[50px]">
          “Panorama Park” в цифрах
        </h2>
        <div className="object-metrics__wrapper flex flex-wrap md:flex " >
          <div className="object-metrics__columns">
            {Objectdata.slice(0, 4).map((item, index) => (
              <div key={index} className="object-metrics__item bg-[#00417d] rounded-r-[60px] pl-[29px] mt-[24px] md:pl-[76px] md:w-[340px] md:h-[108px] md:[108px] w-[190px] h-[70px]">
                <p className="object-metrics__value text-[27px]">{item.value}</p>
                <p className="object-metrics__label text-[15px]">{item.label}</p>
              </div>
            ))}
          </div>
          <img src={img3} alt="img3" className="md:w-[504px] md:h-[504px] md:rounded-[41px] w-[49%] h-[301px] rounded-[20px]" />
          <img src={img2} alt="img2" className='rounded-[20px] w-[49%] h-[301px] md:hidden' />
          <div className="object-metrics__columns">
            {Objectdata.slice(4).map((item, index) => (
              <div key={index} className="object-metrics__item bg-[#00417d] rounded-l-[60px] pr-[29px] mt-[24px] md:pr-[76px] md:w-[340px] md:h-[108px] md:[108px] w-[190px] h-[70px] ">
                <p className="object-metrics__value text-right text-[27px]">{item.value}</p>
                <p className="object-metrics__label text-right text-[15px]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
};

export default ObjectMetrics;
