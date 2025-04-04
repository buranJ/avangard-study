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
    <section className="SupBottom">
      <div className="container">
       <div className="SupBottom__video rounded-[29px] w-[1128px] h-[632px]">
       <iframe width="560" height="315" src={youtube_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </div>
      </div>
</section>
  );
};

export default SupBottom;

