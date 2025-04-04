import { Link } from 'react-router-dom';
import Vector from '../../../assets/images/OngoingProjects/onvector.svg';
import Img from '../../../assets/images/OngoingProjects/itemImg1.svg'

import { useGetObjectsListQuery } from 'api/objects/objects.api';

import Item from './Item';

import blackArrow from 'assets/icons/arrow-right-black.svg';

import './style.scss';

type Projects = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Projects[] = [
  {
    id: 1,
    title: "КД 'Panorama Park'",
    description: "Элитный жилой комплекс в классическом стиле с современной инфраструктурой.",
    image:Img,
  },
  {
    id: 2,
    title: "ЖК 'Москва Сити'",
    description: "Высотные здания в центре города с панорамными видами и развитой инфраструктурой.",
    image: Img,
  },
  {
    id: 3,
    title: "ЖК 'Европа'",
    description: "Современный жилой комплекс с европейской архитектурой и удобными планировками.",
    image: Img,
  },
  {
    id: 4,
    title: "ЖД 'Москва'",
    description: "Архитектурный проект, вдохновленный сталинским ампиром, с высокими потолками и просторными квартирами.",
    image: Img,
  },
  {
    id: 5,
    title: "Салкын - Төр",
    description: "Современный коттеджный поселок с просторными домами и природными зонами.",
    image: Img,
  },
  {
    id: 6,
    title: "'Елисейские поля'",
    description: "Жилой комплекс с роскошной архитектурой и развитой инфраструктурой в живописном районе.",
    image: Img,
  },
];

const OngoingProjects = () => {

  return (
     <section className="OnProjects">
      <div className="container">
        <div className="OnProjects__content flex flex-col my-[50px] md:my-[70px] " >
          <div className="OnProjects__header flex justify-between">
          <h1 className="OnProjects__title  font-bold text-[24px] md:text-[50px]">Строящиеся объекты</h1>
            <img src={Vector} alt="vector" />
          </div>
          <div className="OnProjects__item-container grid grid-cols-3 gap-[39px]">
          {projects.map((item,index)=>(
          <div key={index}
          className="OnProject__item mt-[50px] md:mt-[30px] flex flex-col items-center rounded-[28px] bg-white max-w-[350px] max-h-[305px]">
            <img src={item.image} alt="img" />
            <h2 className="OnProject__item-title font-medium text-[30px] mt-[20px]">{item.title}</h2>
            <p className="OnProject__item-des  font-medium  text-center text-[20px] text-[rgba(0, 9, 27, 0.5)] mt-[15px]">{item.description}</p>
            <button className="OnProject__item-btn mt-[20px] w-[141px] h-[42px] text-white text-[20px] font-medium bg-[#00091b] rounded-[22px]">О проекте</button>
          </div>
          ))}
          </div>
        </div>
      </div>
     </section>
  );
};

export default OngoingProjects;

