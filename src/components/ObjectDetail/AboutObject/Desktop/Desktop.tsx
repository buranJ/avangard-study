import { FC } from 'react';

import { Complex } from 'types/common';
import Button from 'components/Button';

import { getWordDeclension } from '../AboutObject.helpers';

interface IProps extends Complex {
  setActiveImg: (imgSrc: string) => void;
}

const Desktop: FC<IProps> = ({ address, apartments, description, first_image, max_apartment, max_blocks, setActiveImg }) => {
  return (
    <>
    </>
  );
};

export default Desktop;
