import { ComponentProps, FC, ReactNode } from 'react';

import Button from "../../components/Button";

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
  return (
    <>
      <div className="objectHero">
        <div className="container">
          <div className="objectHero__content">
            <p className="objectHero__subtitle">Клубные дома премиум класса</p>
            <h1 className="objectHero__title">Panorama Park</h1>
            <div className="objectHero__btns ">
              <Button label="Выбрать квартиру" className="border-none" />
              <Button label="Скачать буклет" className="border-none" />
              <Button label="Live" className="uppercase border-none" />
              <Button label="3D тур" variant="outline" className="bg-white border-none" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

