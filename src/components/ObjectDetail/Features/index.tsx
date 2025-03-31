import { FC } from 'react';

import fence from '../../../assets/icons/material-symbols_outdoor-garden.svg'

import './style.scss';

interface IProps {
  advantages: {
    title: string;
    iconUrl: string;
    id: number;
  }[];
}

const features = [
  { icon: fence, title: "Закрытый двор" },
  { icon: fence, title: "Шумоизоляция" },
  { icon: fence, title: "Подземный паркинг" },
  { icon: fence, title: "Спортивная площадка" },
  { icon: fence, title: "Бесшумные лифты" },
  { icon: fence, title: "Газификация" },
  { icon: fence, title: "Продуманная система вентиляции" },
  { icon: fence, title: "Детские площадки" },
  { icon: fence, title: "Монолитно-каркасное строительство" },
  { icon: fence, title: "Удобная планировка квартир" },
  { icon: fence, title: "Экологически чистый район" },
  { icon: fence, title: "Круглосуточное видеонаблюдение" },
  { icon: fence, title: "Мультифункциональный стеклопакет" },
  { icon: fence, title: "Автономное газовое отопление" },
  { icon: fence, title: "Алюминиевый профиль окон теплой серии" },
  { icon: fence, title: "Система контроля доступа и безопасности" }
];
const Features: FC<IProps> = ({ advantages }) => {
  return (
    <>
      <section className="advantages">
        <div className="container">
          <div className="advantages__content flex flex-col items-center ">
            <h2 className="advantages__title flex justify-center font-[700] text-[50px] ">Преимущества</h2>
           <ul className="grid grid-cols-4 mt-[70px] font-[700] text-[20px] ">{features.map((item) => {
          
           return <li className="dvantages__icon flex flex-col items-center max-w-[238px] text-center">
                    <img src={item.icon} alt="fence" />
                    <p className="">{item.title}</p>
                  </li>
            }
            )}
</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

