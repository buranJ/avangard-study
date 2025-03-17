// import loaderIcon from 'assets/icons/loader.svg';

import { FC } from 'react';

import './style.scss';
import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface IProps {
  imgsSrc?: { image: string, description?: string }[];
  setActiveImg: (imgSrc: string) => void;
  activeImg: string;
}

const Gallery: FC<IProps> = ({ imgsSrc, setActiveImg, activeImg }) => {

  return (
    <>
  
    </>
  );
}

export default Gallery;
