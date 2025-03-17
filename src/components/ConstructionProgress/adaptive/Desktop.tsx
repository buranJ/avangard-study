import { FC, useEffect } from 'react';
import { scroller } from 'react-scroll';

import { useGetConstructionProgress } from 'hooks/useGetConstructionProgress';

import DesktopItem from './DesktopItem';

interface IProps {
  building_id?: string;
}

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const Desktop: FC<IProps> = ({ building_id }) => {

  return (
    <>
    
    </>
  );
};

export default Desktop;

