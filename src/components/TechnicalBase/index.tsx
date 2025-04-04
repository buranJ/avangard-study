import { useGetTechnicalBaseQuery } from 'api/contact/contact.api';
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
import image14 from "../../assets/images/TechnicalBase/14.png"
import image15 from "../../assets/images/TechnicalBase/15.png"

import './styles.scss';
import Gallery from 'components/Gallery';





const TechnicalBasePage = () => {
  const imageOfTech = [
    image1, image2, image3,
    image4, image5, image6,
    image7, image8, image9,
    image10, image11, image12,
    image14, image15
  ]
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




