import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import BitrixForm from 'components/BitrixForm';
import BurgerMenu from 'components/BurgerMenu';
import { Modal } from 'components/Modal';

import Dropdown from './Dropdown/Dropdown';
import { MenuItem } from './Header.helpers';

import logo from 'assets/images/logo.svg';

import './styles.scss';

interface IProps {
  menuData: MenuItem[];
  consultationNumber?: number;
}

const Header: FC<IProps> = ({ menuData, consultationNumber }) => {
  

  return (
    <>
 
    </>
  );
};

export default Header;

