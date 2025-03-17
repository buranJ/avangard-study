import { FC, useState } from 'react';

import { IProgressData } from 'hooks/useGetConstructionProgress';
import Button from 'components/Button';
import Gallery from 'components/Gallery';

interface IProps {
  project: IProgressData;
  allImages: { image: string }[];
  visibleImagesArray: { image: string }[];
  hasMoreImages: boolean;
  handleLoadMore: (projectTitle: string) => void;
  handleMonthChange: (projectTitle: string, month: number, year: number) => void;
  months: string[];
  activePeriod: { month: number; year: number };
}

const DesktopItem: FC<IProps> = ({
  project,
  allImages,
  visibleImagesArray,
  hasMoreImages,
  handleLoadMore,
  handleMonthChange,
  months,
  activePeriod
}) => {


  return (<>
  </>
  );
};

export default DesktopItem;

