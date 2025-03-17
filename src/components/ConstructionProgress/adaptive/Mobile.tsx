import { FC, useCallback, useEffect, useState } from 'react';

import { useGetObjectsListQuery, useLazyGetConstructionProgressQuery } from 'api/objects/objects.api';
import Button from 'components/Button';
import CalendarAccordion from 'components/CalendarAccordion';
import Gallery from 'components/Gallery';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  building_id?: string;
}

const Mobile: FC<IProps> = ({ building_id }) => {

  return (
    <>
   
    </>
  );
};

export default Mobile;

