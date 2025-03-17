import { FC, useEffect, useState } from 'react';

import { IConstructionProgress } from 'types/common';

import './style.scss';

import classNames from 'classnames';

interface IProps {
  handleChange: (date: number) => void;
  data: IConstructionProgress[];
  variant?: 'default' | 'minimal' | 'bordered';
  size?: 'small' | 'medium' | 'large';
  iconPosition?: 'left' | 'right';
  showIcon?: boolean;
  className?: string;
}

const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const CalendarAccordion: FC<IProps> = ({
  handleChange,
  data,
  variant = 'default',
  size = 'medium',
  iconPosition = 'left',
  showIcon = true,
  className
}) => {
  return (
    <></>
  );
};

export default CalendarAccordion;

