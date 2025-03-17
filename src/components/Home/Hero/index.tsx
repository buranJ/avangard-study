import { FC } from 'react';

import Hero from 'components/Hero';

import AnimatedNumber from './AnimatedNumber';

import './styles.scss';



interface IProps {
  banner?: string;
  first_key?: string;
  first_value?: number;
  second_key?: string;
  second_value?: number;
  third_key?: string;
  third_value?: number;
}

const HomeHero: FC<IProps> = ({ banner, first_key, first_value, second_key, second_value, third_key, third_value }) => {

  return (
    <></>
  );
};

export default HomeHero;
