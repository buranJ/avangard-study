import { FC } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import img from 'assets/icons/handleRange.svg';

import './style.scss';

interface IProps {
  building: number;
  day_image: string
  id: number;
  night_image: string
}

const BeforeAfter: FC<IProps> = ({ day_image, night_image }) => {
  return (
    <>
    </>
  );
};

export default BeforeAfter;
