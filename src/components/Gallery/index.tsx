// import loaderIcon from 'assets/icons/loader.svg';
import { FC } from 'react';
import './style.scss';
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const fixedSizes = [
  { width: 456, height: 456 },
  { width: 648, height: 364 },
  { width: 460, height: 272 },
  { width: 312, height: 364 },
  { width: 312, height: 364 }
];
interface IProps {
  imgsSrc?: {
    id: number;
    image: string;
    created_at: string | null;
    section7: number;
  }[];
  building?: number;
  setActiveImg?: (imgSrc: string) => void;
  activeImg?: string;
}
const Gallery: FC<IProps> = ({ imgsSrc, setActiveImg, activeImg }) => {
  return (
    <>
      <section className="galerey">
        <div className="container mx-auto">
          <div className="galerey__content">
            <h2 className='text-black text-[28px] text-center font-bold md:text-[50px]'>Общий вид зданий</h2>
            <p className='text-[#00091B] text-[18px] text-center md:text-[25px]'>Нажмите для увеличения</p>
            <div className="galerey__body mt-[134px] flex flex-wrap justify-center items-start gap-2 gap-y-[12px] md:mt-[134px]">
              {imgsSrc?.map((src, index) => {
                
                const { width, height } =
                  index < 5 ? fixedSizes[index] : fixedSizes[index % 5];
                return (
                  <div style={{ width: `${width}px`, height: `${height}px ${index % 5  ===  0? "mt-10 md:mt-20" : ""}` }}
                  >
                    <img
                      key={index}
                      src={src.image}
                      alt={`Tech ${index + 1}`}
                      width={width}
                      height={height}
                      className={` border border-rounded-[27px] ${[5].includes(index) ? "md:mt-[-90px]" : "md:mt-[-90px]"}${[2].includes(index)?"md:mt-[90px]" : ""} ${[12,7].includes(index)?"md:mt-[0px]" : ""}`}
                      style={{ width:`${width}px`, height:`${height}px`,borderRadius: "27px" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section >
    </>
  );
}
export default Gallery;

