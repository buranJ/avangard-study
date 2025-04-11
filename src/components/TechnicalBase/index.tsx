import { useGetTechnicalBaseQuery } from 'api/contact/contact.api';
import Gallery from 'components/Gallery';
import Mansory from 'components/Masonry';
import PageHeading from 'components/PageHeading';

import mockTechnicalBase from "./mocType"

import image1 from "../../assets/images/TechnicalBase/1.png"
import image2 from "../../assets/images/TechnicalBase/2.png"
import image3 from "../../assets/images/TechnicalBase/3.png"
import image4 from "../../assets/images/TechnicalBase/4.png"
import image5 from "../../assets/images/TechnicalBase/5.png"
import image6 from "../../assets/images/TechnicalBase/6.png"
import image7 from "../../assets/images/TechnicalBase/7.png"
import image8 from "../../assets/images/TechnicalBase/8.png"
import image9 from "../../assets/images/TechnicalBase/9.png"
import image10 from "../../assets/images/TechnicalBase/10.png"
import image11 from "../../assets/images/TechnicalBase/11.png"
import image12 from "../../assets/images/TechnicalBase/12.png"
import image13 from "../../assets/images/TechnicalBase/13.png"
import image14 from "../../assets/images/TechnicalBase/14.png"
import image15 from "../../assets/images/TechnicalBase/15.png"

import './styles.scss';





const TechnicalBasePage = () => {
  const imageOfTech: { image: string, description?: string }[] = [
    { image: image1, description: "Описание изображения 1" },
    { image: image2, description: "Описание изображения 2" },
    { image: image3, description: "Описание изображения 3" },
    { image: image4, description: "Описание изображения 4" },
    { image: image5, description: "Описание изображения 5" },
    { image: image6, description: "Описание изображения 6" },
    { image: image7, description: "Описание изображения 7" },
    { image: image8, description: "Описание изображения 8" },
    { image: image9, description: "Описание изображения 9" },
    { image: image10, description: "Описание изображения 10" },
    { image: image11, description: "Описание изображения 11" },
    { image: image12, description: "Описание изображения 12" },
    { image: image13, description: "Описание изображения 13" },
    { image: image14, description: "Описание изображения 14" },
    { image: image15, description: "Описание изображения 15" }
];

  const fixedSizes = [
    { width: 456, height: 456 },
    { width: 648, height: 364 },
    { width: 460, height: 272 },
    { width: 312, height: 364 },
    { width: 312, height: 364 }
  ];
  const imagesType = []
  for (let index = 0; index < imageOfTech.length; index++) {
    const { width, height } = fixedSizes[index % fixedSizes.length];

    imagesType.push(
      <img
        key={index}
        src={imageOfTech[index]}
        alt={`Tech ${index + 1}`}
        width={width}
        height={height}
        className="object-cover"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    )
  }

  return (
    <>
      <section className="technica">
        <div className="container mx-auto">
          <div className="tech__content">
            <div className="title">
              <h2 className="font-bold text-[24px] leading-[110%] text-center text-[#00091b] md:text-[50px]">
                {mockTechnicalBase.title}
              </h2>
              <div className="tech__body flex flex-col gap-y-[10px] m-auto">
                <p className="font-normal mt-[29px] text-center text-[15px] max-w-[1200px] text-[#00091b] md:text-[20px]">
                  {mockTechnicalBase.description}</p>
                {mockTechnicalBase.statistics.map((item, index) => {
                  return (
                    <li key={index}
                      className="font-normal text-[15px] leading-[150%] text-[#00091b] md:text-[20px]">
                      {item}
                    </li>
                  )
                })}
                <div className="tech__you-tube mt-[30px] md:mt-[90px]">
                  <iframe className="w-full h-full aspect-video"
                    src="https://www.youtube.com/embed/LPYKRoOIpTo?si=px5NppNau2cWFMQH"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen></iframe>
                  <li className="text-end list-none">

                    Видео 2019 года</li>
                </div>
                <Gallery imgsSrc={imageOfTech} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default TechnicalBasePage;




