import { ComponentProps, FC, ReactNode, useState } from 'react';

import Button from "../../components/Button";

import { ObjectHeroModal } from './ObjectHeroModal';

import x from "../../assets/icons/krestik.svg";

// import poster from 'assets/images/poster.webp';
import './styles.scss';

interface IProps {
  videoSrc?: string;
  bannerSrc?: string;
  className?: ComponentProps<'div'>['className'];
  children: ReactNode;
  pageName: string;
}

const Hero: FC<IProps> = ({ videoSrc, bannerSrc, className, pageName, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="objectHero__modal-out">
          <div className="objectHero__modal" role="dialog" aria-modal="true">
            <button className="objectHero__modal-close">
              <img
                src={x}
                alt="x"
                width={"24px"}
                height={"24px"}
                onClick={() => setOpen(false)}
              />
            </button>
            <ObjectHeroModal name='КД "Панорама Парк"' />
          </div>
        </div>
      )}
      {open ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden")}
      <div className={`objectHero`}>
        <div className="container">
          <div className="objectHero__content">
            <p className="objectHero__subtitle">Клубные дома премиум класса</p>
            <h1 className="objectHero__title">Panorama Park</h1>
            <div className="objectHero__btns ">
              <Button
                label="Выбрать квартиру"
                className="border-none"
                onClick={() => setOpen(true)}
              />
              <Button label="Скачать буклет" className="border-none" />
              <Button label="Live" className="uppercase border-none" />
              <Button
                label="3D тур"
                variant="outline"
                className="bg-white border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

