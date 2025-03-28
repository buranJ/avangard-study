import { FC } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import day from "../../../assets/images/BeforeAfter/before.webp"

import night from "../../../assets/images/BeforeAfter/after.jpg"
import img from "assets/icons/handleRange.svg";

import "./style.scss";

interface IProps {
  building: number;
  day_image: string;
  id: number;
  night_image: string;
}

const BeforeAfter: FC<IProps> = ({ day_image, night_image }) => {
  return (
    <>
      <div className="beforeAfter">
        <div className="container">
          <div className="beforeAfter__content">
            <h2 className="beforeAfter__title">Атмосфера вечернего парка</h2>
            <div className="beforeAfter__slider">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={day} alt={day_image} className="beforeAfter__slider-image" />}
                itemTwo={<ReactCompareSliderImage src={night} alt={night_image} className="beforeAfter__slider-image" />}
                handle={<img className="beforeAfter__handle" src={img} alt="handle" />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeAfter;
