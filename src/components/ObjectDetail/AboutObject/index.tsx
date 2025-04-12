import { FC, useEffect, useState } from 'react';
import { Complex } from 'types/common';
import mockData from "./AboutObject.helpers";

type IProps = Complex;
const AboutObject: FC<IProps> = ({ Data }) => {
  console.log(Data);

  const parts = Data?.description ? Data.description.split('\r\n\r\n') : [];

  const firstPart = parts[0]?.trim() || '⠒⠒⠒';
  const secondPart = parts[1]?.trim() || '⠒⠒⠒';

  const [showSecondBlock, setShowSecondBlock] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setShowSecondBlock(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="about mt-[10px] md:mt-[30px]">
      <div className="container mx-auto">
        <div className="about__content">
          <div className="about__title">
            <h3 className="font-bold text-[24px] leading-[110%] text-center text-[#00091b] md:text-[50px]">
              О жилом комплексе
            </h3>
            <p className="font-normal text-[15px] leading-[150%] text-center text-[#00091b] sm:hidden">
              {Data?.address}

            </p>
          </div>
          <div className="about__up flex w-[1/2] mt-10 gap-5">
            <div className="about__description ml-3 w-[50%]">
              <p className="text-[rgba(0,9,27,0.7)] max-w-[480px] md:text-[25px]">
                {firstPart}</p>
              <p className="text-[rgba(0,9,27,0.7)] max-w-[480px] mt-3 hidden md:block md:text-[25px]">
                {secondPart}
              </p>
              <div className="about__desctop mt-10 grid grid-cols-2 max-w-[550px] gap-3 hidden md:block">
                {Data?.apartments.map((apartment) => (
                  <button key={apartment.id}
                    className="py-[7px] gap-[10px] px-[6px] mt-2 ml-2 border border-[#00417d] rounded-[62px] text-[14px] text-center text-[#00417d] md:py-[10px] md:px-[20px] md:border md:rounded-[22px] md:text-[20px]">
                    {apartment.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="about__down relative w-[50%]">
              <img className="h-[100%] rounded-[41px]" src={Data?.first_image} alt="photo" />
              <div className="about__adress__btn absolute bottom-[4%] left-[5%]">
                <p className="text-white hidden mb-3 text-[20px] md:block md:text-[30px]">
                  {Data?.address}
                </p>
                <div className="about__btns flex">
                  <button className="py-[10px] px-[11px] mr-3 hidden md:block border border-white rounded-[62px] text-white text-center text-[13px] backdrop-blur-[15px] bg-[rgba(0,9,27,0.1)] md:text-[25px]">
                    {Data?.max_apartment}
                  </button>
                  <button className="py-[10px] px-[15px] border border-white rounded-[62px] text-white text-center text-[11px] backdrop-blur-[15px] bg-[rgba(0,9,27,0.1)] md:text-[25px]">
                    {Data?.max_blocks}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {showSecondBlock && (
            <div className="about__second flex flex-row-reverse w-[1/2] mt-10 gap-5">
              <p className="ml-3 w-[50%] text-[rgba(0,9,27,0.7)]">{secondPart}</p>
              <div className="button relative w-[50%]">
                <img className="h-[100%] rounded-[41px]" src={Data?.second_image} alt="photo" />
                <button className="py-[10px] px-[15px] absolute bottom-[4%] left-[29%] mr-3 border border-white rounded-[62px] text-white text-center text-[11px] backdrop-blur-[15px] bg-[rgba(0,9,27,0.1)]">
                {Data?.max_apartment}
                </button>
              </div>
            </div>
          )}
          <div className="about__btns grid grid-cols-2 gap-2 mt-10 max-w-[550px]  md:hidden">
            {Data?.apartments.map((apartment) => (
              <button key={apartment.id}
                className="py-[7px] gap-[10px] px-[6px] mt-2 ml-2 border border-[#00417d] rounded-[62px] text-[14px] text-center text-[#00417d] md:py-[10px] md:px-[20px] md:border md:rounded-[22px] md:text-[20px]">
                {apartment.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutObject;



