import { FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetConstructionProgressQuery } from 'api/objects/objects.api';
import { Footer } from 'types/common';
import Button from 'components/Button';
import CalendarAccordion from 'components/CalendarAccordion';
import { Modal } from 'components/Modal';

// import x from "../../../assets/images/BeforeAfter/krestik.svg";
import BtnsModal from "./BtnsModal";

import "./style.scss";
import './style.scss';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

const SupBottom: FC<Footer> = ({ youtube_url, building }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="SupBottom">
      <div className="container">
        <div className="SupBottom__content">
          <div className="SupBottom__video rounded-[29px] w-[1128px] h-[632px]">
            <iframe width="560" height="315" src={youtube_url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          {open && (
            <div className="BtnsModal__out">
              <div className="BtnsModal" role="dialog" aria-modal="true">
                <button className="BtnsModal__close">
                  <img
                    src=""
                    alt="x"
                    width={"24px"}
                    height={"24px"}
                    onClick={() => setOpen(false)}
                  />
                </button>
                <BtnsModal />
              </div>
            </div>
          )}
          {open ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")}
          <div className="objectBtns__content">
            <div className="objectBtns__top">
              <h3 className="objectBtns__top-title">Прямой эфир</h3>
              <p className="objectBtns__top-description">
                Смотрите трансляцию строительства в режиме реального времени по
                ссылке:
              </p>
              <Button
                label="Посмотреть"
                className="objectBtns__top-btn px-[102px] py-[11.5px] xl:px-[192.5px] xl:py-[15px]"
              />
            </div>
            <div className="objectBtns__bot">
              <h3 className="objectBtns__bot-title">Этапы строительства</h3>
              <p className="objectBtns__bot-description">
                Смотрите “Этапы строительства” по ссылке:
              </p>
              <Button
                onClick={() => setOpen(true)}
                variant="secondary"
                label="Посмотреть"
                className="objectBtns__bot-btn px-[102px] py-[11.5px] xl:px-[192.5px] xl:py-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupBottom;

