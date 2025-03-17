import { FC, useState } from 'react';

import { ObjectMetrics as ObjectMetricsType } from 'types/common';
import Gallery from 'components/Gallery';

import './styles.scss';

interface IProps {
  title: string;
  metrics: ObjectMetricsType;
}

const ObjectMetrics: FC<IProps> = ({ title, metrics }) => {
 
  return (
    <>
    </>
  );
};

export default ObjectMetrics;

