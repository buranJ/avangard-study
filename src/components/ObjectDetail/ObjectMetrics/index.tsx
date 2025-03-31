import { FC, useState } from 'react';

import { ObjectMetrics as ObjectMetricsType } from 'types/common';

// import Gallery from 'components/Gallery';
import './styles.scss';

interface IProps {
  title: string;
  metrics: ObjectMetricsType;
}
// import img1 from './imgAmantur/img1.jpg'
// import img2 from './imgAmantur/img2.jpg'
import img3 from '../../../assets/images/image.jpg'

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
      <div className=" ">
        <div className="object-metrics__content">
          <h2 className="object-metrics__title md:texxt-[50px]">“Panorama Park” в цифрах</h2>
          <div className="object-metrics__wrapper flex justify-between ">
            <div className="object-metrics__columns">
              {Objectdata.slice(0, 4).map((item, index) => (
                <div key={index} className="object-metrics__item bg-[#00417d] rounded-r-[60px] px-0 py-0 pl-[76px] w-[340px] h-[108px] mt-[24px]">
                  <p className="object-metrics__value">{item.value}</p>
                  <p className="object-metrics__label">{item.label}</p>
                </div>
              ))}
            </div>
            <img src={img3} alt="img3" className='mt-[20px] rounded-[41px]' />
            <div className="object-metrics__columns">
              {Objectdata.slice(4).map((item, index) => (
                <div key={index} className="object-metrics__item bg-[#00417d] rounded-l-[60px] px-0 py-0 pr-[76px] w-[340px] h-[108px] mt-[24px]">
                  <p className="object-metrics__value text-right">{item.value}</p>
                  <p className="object-metrics__label text-right">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ObjectMetrics;



