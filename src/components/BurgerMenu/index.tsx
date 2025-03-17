import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MenuItem } from 'components/Header/Header.helpers';

import arrowForward from 'assets/icons/arrow-right-black.svg';
import arrowBack from 'assets/icons/arrowBack.svg';
import logo from 'assets/images/logo-blue.svg';

import './styles.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  menuData: MenuItem[];
  setIsModalOpen: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu, menuData, setIsModalOpen }) => {

  return (
    <>
    </>
  );
};

export default BurgerMenu;
