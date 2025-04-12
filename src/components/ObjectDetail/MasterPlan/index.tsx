import { FC } from 'react';
import { INumeration } from 'types/common/objects';
import './style.scss'
const MasterPlan: FC<INumeration> = ({ gen_plan, image }) => {
  return (
    <>
      <section className="number">
        <div className="container">
          <div className="number__content">
            <div className="number__title">
              <h2 className="font-bold text-[22px] text-center md:text-[50px]">Нумерация и Расположение</h2>
            </div>
            <div className="number__img relative">
              <img className="mt-[30px] m-auto rounded-[50px]" src={image} alt="body-img" />
              <a className="absolute bottom-[3%] right-[5%] md:right-[10%] text-[14px] border border-white rounded-[62px] px-[10px] py-[10px] md:py-[15px] md:px-[25px] md:text-[25px] backdrop-blur-[10px] bg-[rgba(0,9,27,0.1)] font-medium leading-[110%] text-center text-white"
                download href={gen_plan}>
                Скачать генплан</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MasterPlan;
