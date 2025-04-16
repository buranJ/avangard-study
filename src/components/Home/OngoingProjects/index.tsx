import { Link } from 'react-router-dom';

import { useGetObjectsListQuery } from 'api/objects/objects.api';

import Item from './Item';


import blackArrow from 'assets/icons/arrow-right-black.svg';

import './style.scss';

const OngoingProjects = () => {
  const { data } = useGetObjectsListQuery();
 console.log(data);
  return (
    <section className="OnProjects">
      <div className="container">
        <div className="OnProjects__content flex flex-col my-[50px] md:my-[70px] " >
          <div className="OnProjects__header flex justify-between">
            <h1 className="OnProjects__title  font-bold text-[24px] md:text-[50px]">Строящиеся объекты</h1>
            <img src={blackArrow} alt="vector" />
          </div>
          <div className="OnProjects__item-container mx-auto grid  xl:grid-cols-3 gap-[39px] relative">
            {data?.map((item, index) => (
              <div key={index}
                className="OnProject__item mt-[50px] md:mt-[30px] flex flex-col items-center rounded-[28px] px-[10px] bg-white w-[350px] h-[385px]">
               <div className="OnProject__img-wrapper relative">
                {item.is_new && (
     <div className="OnProject__NEW backdrop-blur border-[0.50px] border-white text-center rounded-[40px] w-[106px] h-[30px] absolute  ml-[20px] mt-[20px] font-normal text-[17px] text-white">Новинка</div>
                )}
               <img className='w-[330x] h-[213px] rounded-[28px] mt-[10px] '
                src={item.imagebg} alt="img" />
               </div>
                <h2 className="OnProject__item-title font-medium text-[30px] mt-[20px]">{item.title}</h2>
                <p className="OnProject__item-des text-grey font-medium  text-center text-[20px] text-[rgba(0, 9, 27, 0.5)] mt-[10px]">{item.info.address}</p>
                <button className="OnProject__item-btn absolute  mt-[360px] w-[141px] h-[42px] text-white text-[20px] font-medium bg-[#00091b] rounded-[22px]">О проекте</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;

