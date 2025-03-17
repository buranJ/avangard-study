import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetConstructionProgressQuery } from 'api/objects/objects.api';
import { Footer } from 'types/common';
import Button from 'components/Button';
import CalendarAccordion from 'components/CalendarAccordion';
import { Modal } from 'components/Modal';

import './style.scss';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

const SupBottom: FC<Footer> = ({ youtube_url, building }) => {


  return (
    <>
    
    </>
  );
};

export default SupBottom;

