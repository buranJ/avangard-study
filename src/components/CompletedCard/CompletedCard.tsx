import { FC, useRef } from 'react';

import { IObjectsFinishedList } from 'types/common';

import './style.scss';

interface IProps extends IObjectsFinishedList {
  onClick: (slug: string) => void;
}

const CompletedCard: FC<IProps> = ({ title, imagebg, slug, onClick }) => {


  return (
    <>
    </>
  );
};

export default CompletedCard;

