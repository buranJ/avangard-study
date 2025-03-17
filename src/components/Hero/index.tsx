import { ComponentProps, FC, ReactNode } from 'react';

import poster from 'assets/images/poster.webp';

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
    </>
  );
};

export default Hero;
