// import loaderIcon from 'assets/icons/loader.svg';

import { FC } from 'react';

import img1 from '../../assets/images/Galerey/1.png'
import img2 from '../../assets/images/Galerey/2.png'
import img3 from '../../assets/images/Galerey/3.png'
import img4 from '../../assets/images/Galerey/4.png'
import img5 from '../../assets/images/Galerey/5.png'

import './style.scss';
import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const imfInterface = [
  img1, img2, img3, img4, img5
]
const fixedSizes = [
  { width: 456, height: 456 },
  { width: 648, height: 364 },
  { width: 460, height: 272 },
  { width: 312, height: 364 },
  { width: 312, height: 364 }
];

interface IProps {
  imgsSrc?: { image: string, description?: string }[];
  setActiveImg: (imgSrc: string) => void;
  activeImg: string;
}

const Gallery: FC<IProps> = ({ imgsSrc, setActiveImg, activeImg }) => {

  return (
    <>
      <section className="galerey">
        <div className="container">
          <div className="galerey__content">

            <h2 className='text-black text-[28px] text-center font-bold md:text-[50px]'>Общий вид зданий</h2>
            <p className='text-[#00091B] text-[18px] text-center md:text-[25px]'>Нажмите для увеличения</p>

            <div className="galerey__body mt-[30px] flex flex-wrap justify-center items-center gap-2 gap-y-[12px] md:mt-[70px]">
              {imfInterface.map((src, index) => {
                const { width, height } =
                  index < 5 ? fixedSizes[index] : fixedSizes[index % 5];
                return (
                  <div style={{ width: `${width}px`, height: `${height}px` }}
                >
              <img
                key={index}
                src={src}
                alt={`Tech ${index + 1}`}
                width={width}
                height={height}
                className="object-cover"
                style={{ width: `${width}px`, height: `${height}px` }}
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
