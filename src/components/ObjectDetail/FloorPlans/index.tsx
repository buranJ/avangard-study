import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';

import type { FloorPlans } from 'types/common';
import { useImageCache } from 'hooks/useImageCache';
import Button from 'components/Button';
import Gallery from 'components/Gallery';
import SegmentedControl from 'components/Segment';

import LazyImage from './LazyImage';

import './styles.scss';

type IProps = Pick<FloorPlans, 'floorschemas'>;

const FloorPlans: FC<IProps> = ({ floorschemas }) => {

  return (
    <>
    </>
  );
};

export default memo(FloorPlans);

