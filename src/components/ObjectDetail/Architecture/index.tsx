import { FC, useEffect, useMemo, useRef, useState } from 'react';

import type { ArchitectureItem } from 'types/common/objects';

interface IProps {
  materials: ArchitectureItem[];
  facades: ArchitectureItem[];
}



import './styles.scss';
import line from '../../../assets/images/arch__little-line.svg'


const Architecture: FC<IProps> = ({ materials, facades }) => {
  console.log(materials)
  console.log(facades)

  const [isMobile, setIsMobile] = useState(false);
  const [isButtonChoice, setButtonChoice] = useState<string>('facade');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
  
    handleResize();
  
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize",handleResize)
    }

  }, [])


  const ChosenArray: ArchitectureItem[] = isButtonChoice === "facade" ? facades : materials;
  console.log(ChosenArray)

  const toggleButton = (buttonName: string) => {
    setButtonChoice(buttonName)
  }
  return (
    <section className="architecture">
      <div className="container">
        <div className="arch__content font-normal flex flex-col items-center gap-[30px] md:gap-[50px]">
          <h1 className="arch__title text-[24px] md:text-[50px]">Архитектура</h1>
          <div className="arch__btns-switch  flex  text-[24px] md:text-[30px] gap-[0px] bg-white rounded-[31px] border-2 border-[#00417d]">
            <button onClick={() => toggleButton('facade')}
              className={`arch__btn__facade h-[50px]  md:h-[63px] rounded-[31px]  w-[140px] md:w-[210px]  text-center border-none ${isButtonChoice === "facade" ? "bg-[#00417d] text-white" : "bg-transparent text-[#00417d]"}`}>Фасад</button>
            <button onClick={() => toggleButton('material')}
              className={`arch__btn-material  rounded-[31px] h-[50px]  md:h-[63px] w-[194px] md:w-[291px] border-none  text-center  ${isButtonChoice === "material" ? "bg-[#00417d] text-white" : "bg-transparent text-[#00417d]"}`}>Материалы</button>
          </div>
          <div className="arch__information-content">
            {isMobile && (
              <div className="arch-data__side relative flex flex-col">
              {ChosenArray.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-[10px] pb-[50px]" 
                >
                  <div className="flex flex-col items-center">
                    <div className="h-[15px] w-[15px] rounded-full bg-[#00417d] z-10"></div>
                    {index < ChosenArray.length - 1 && (
                      <div className="absolute top-[15px] left-[6.5px] w-[2px] bg-[#00417d] h-full"></div>
                    )}
                  </div>
                  <div className="element__text">
                    <h4 className="text-[19px]">{item.title}</h4>
                    <p className="text-[15px]">{item.mini_description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            )}
            {!isMobile && (
              <div className="arch__data__desktop w-[1128px] font-normal flex flex-col">
                <div className="arch__desktop__flex flex justify-between items-end gap-[20px]">
                  {ChosenArray?.map((item, index: number) => (
                    index % 2 === 0 && (
                      <div key={index} className="desktop__container">
                        <div className="desktop__wrapper flex flex-col items-center gap-[10px] text-center max-w-[315px]">
                          <h4 className="desktop__title text-[30px]">{item.title}</h4>
                          <p className="desktop__des text-[20px]">{item.mini_description}</p>
                          <img src={line} alt="desktop__line" />
                        </div>
                      </div>
                    )
                  ))}
                </div>
                <hr className="desktop__main-line border-[4px] border-[#00417d] rounded-[5px] w-[1128px] " />
                <div className="arch__desktop__flex flex justify-around gap-[20px]">
                  {ChosenArray?.map((item, index: number) => (
                    index % 2 !== 0 && (
                      <div key={index} className="desktop__container">
                        <div className="desktop__wrapper flex flex-col gap-[10px] items-center text-center max-w-[315px]">
                          <img src={line} alt="desktop__line" />
                          <h4 className="desktop__title text-[30px]">{item.title}</h4>
                          <p className="desktop__des text-[20px]">{item.mini_description}</p>
                        </div>
                      </div>
                    )
                  ))}
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

    </section >

  )
};

export default Architecture;
