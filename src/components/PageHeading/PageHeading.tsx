import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import arrowBack from 'assets/icons/arrowBack.svg';

import './styles.scss';

interface IProps {
  title?: string;
  icon?: boolean;
}

const PageHeading: FC<IProps> = ({ title, icon = true }) => {


  return (
    <>
    </>
  );
};

export default PageHeading;

