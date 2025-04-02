import { FC, useEffect, useMemo, useRef, useState } from 'react';

import type { Architecture } from 'types/common';
import SegmentedControl from 'components/Segment';

import './styles.scss';

type IProps = Architecture;

import circle from '../../../assets/images/arch__circle.svg'
import line from '../../../assets/images/arch__little-line.svg'

type Feature = {
  id: number,
  title: string,
  description: string,

}
type Marerials = {
  id: number,
  title: string,
  description: string,

}


const features: Feature[] = [
  {
    id: 1,
    title: "Конструкция из монолитного железобетона",
    description: "Характеристики повышенной устойчивости и длительным сроком службы"
  },
  {
    id: 2,
    title: "Вентфасад",
    description: "Фасад с воздушным зазором между облицовкой и стеной"
  },
  {
    id: 3,
    title: "Теплоизоляция из минплит",
    description: "Утеплитель приспособлен к непостоянному климату"
  },
  {
    id: 4,
    title: "Фасад — натуральный камень «Сары-Таш»",
    description: "Высокая прочность, устойчивость к агрессивным воздействиям"
  },
  {
    id: 5,
    title: "Высокие потолки высотой 3,2 метра",
    description: "Создают ощущение простора и роскоши в помещении"
  },

];

const materials: Marerials[] = [
  {
    id: 1,
    title: "Металлический каркас",
    description: "Обеспечивает жёсткость конструкции и долговечность всего здания"
  },
  {
    id: 2,
    title: "Тёплый керамический блок",
    description: "Обладает хорошими теплоизоляционными свойствами и устойчив к внешним воздействиям"
  },
  {
    id: 3,
    title: "Кирпичная кладка",
    description: "Классическое решение с высокой надёжностью и длительным сроком службы"
  },
  {
    id: 4,
    title: "Гидроизоляционная мембрана",
    description: "Защищает строительные конструкции от влаги и продлевает срок эксплуатации"
  },
  {
    id: 5,
    title: "Кровельное покрытие из металлочерепицы",
    description: "Обеспечивает надёжную защиту крыши и устойчиво к погодным условиям"
  }
];



const Architecture: FC<IProps> = ({ architecture }) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isButtonChoice, setButtonChoice] = useState<string>('facade');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const refs = useRef<(HTMLImageElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);
  const ChosenArr = isButtonChoice === "facade" ? features : materials

  useEffect(() => {
    if (refs.current.length > 1) {
      const newHeights = refs.current.map((imgRef, index) => {
        if (index !== refs.current.length - 1) {
          const nextImg = refs.current[index + 1];
          if (imgRef && nextImg) {
            return nextImg.offsetTop - imgRef.offsetTop;
          }
        }
        return 0;
      });
      setHeights(newHeights);

    }
  },);

  const toggleButton = (buttonName: string) => {
    setButtonChoice(buttonName)
  }
  return (
    <section className="architecture">
      <div className="container">
        <div className="arch__content font-normal flex flex-col items-center gap-[30px] md:gap-[50px]">
          <h1 className="arch__title text-[24px] md:text-[50px]">Архитектура</h1>
          <div className="arch__btns-switch  flex  text-[24px] md:text-[30px] gap-[0px]">
            <button onClick={() => toggleButton('facade')}
              className={`arch__btn__facade h-[50px]  md:h-[63px] rounded-[31px]  w-[140px] md:w-[210px]  text-center border-2  border-[#00417d] ${isButtonChoice === "facade" ? "bg-[#00417d] text-white" : "bg-white text-[#00417d]"}`}>Фасад</button>
            <button onClick={() => toggleButton('material')}
              className={`arch__btn-material  rounded-[31px] h-[50px]  md:h-[63px] w-[194px] md:w-[291px] border-2  border-[#00417d] text-center  ${isButtonChoice === "material" ? "bg-[#00417d] text-white" : "bg-white text-[#00417d]"}`}>Материалы</button>
          </div>
          <div className="arch__information-content">
            {isMobile && (
              <div className="arch-data__side relative flex flex-col gap-[50px]">
                {ChosenArr.map((item, index) => (
                  <div key={item.id}
                    className="arch__element-wrapper flex  items-center gap-[10px]">
                    <div className="element__visual   flex flex-col items-center">
                      <img ref={(el) => (refs.current[index] = el)} className="m-[0px] p-[0px]" src={circle} />
                      {index !== features.length - 1 && (
                        <hr
                          className="element__line absolute w-[2px] bg-[#00417d]"
                          style={{ height: `${heights[index]}px` }}
                        />
                      )}
                    </div>
                    <div className="element__text">
                      <h4 className="element__title text-[19px]">{item.title}</h4>
                      <p className="element__des text-[15px]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )

            }
            {!isMobile && (
              <div className="arch__data__desktop w-[1128px] font-normal flex flex-col">
                <div className="arch__desktop__flex flex justify-between items-end gap-[20px]">
                  {ChosenArr.map((item, index) => (
                    index % 2 === 0 && (
                      <div key={index} className="desktop__container">
                        <div className="desktop__wrapper flex flex-col items-center gap-[10px] text-center max-w-[315px]">
                          <h4 className="desktop__title text-[30px]">{item.title}</h4>
                          <p className="desktop__des text-[20px]">{item.description}</p>
                          <img src={line} alt="desktop__line" />
                        </div>
                      </div>
                    )
                  ))}
                </div>
                <hr className="desktop__main-line border-[4px] border-[#00417d] rounded-[5px] w-[1128px] " />
                <div className="arch__desktop__flex flex justify-around gap-[20px]">
                  {ChosenArr.map((item, index) => (
                    index % 2 !== 0 && (
                      <div key={index} className="desktop__container">
                        <div className="desktop__wrapper flex flex-col gap-[10px] items-center text-center max-w-[315px]">
                          <img src={line} alt="desktop__line" />
                          <h4 className="desktop__title text-[30px]">{item.title}</h4>
                          <p className="desktop__des text-[20px]">{item.description}</p>
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



