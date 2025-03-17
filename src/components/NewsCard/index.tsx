import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

interface IProps {
  imgSrc: string;
  title: string;
  date: string;
  slug: string;
}

const NewsCard: FC<IProps> = ({ imgSrc, title, date, slug }) => {

  return (
    <>
    </>
  );
};

export default NewsCard;

