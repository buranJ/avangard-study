import { FC } from 'react';

import { InterestNearbyBuilding } from 'types/common';

import Desktop from './Desktop';
import Mobile from './Mobile';
import './style.scss';
interface IProps {
  data: InterestNearbyBuilding[];
}

const WhatInteresting = ({ data }: IProps) => {
  return (
    <>
      <div className="only-desktop">
        <Desktop data={data} />
      </div>
      <div className="only-mobile">
        <Mobile data={data} />
      </div>
    </>
  );
};

export default WhatInteresting;

